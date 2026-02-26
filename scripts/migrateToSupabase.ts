import { createClient } from '@supabase/supabase-js';
import { englishUnits, mongolianUnits } from '../src/data/lessons';
import { masteryData, mongolianMasteryData } from '../src/data/doctrinalMastery';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrate() {
    console.log('Starting migration...');

    // 1. Migrate Units
    const allUnits = [
        ...englishUnits.map(u => ({ ...u, lang: 'en' })),
        ...mongolianUnits.map(u => ({ ...u, lang: 'mn' }))
    ];

    console.log(`Found ${allUnits.length} units to migrate.`);

    for (const unit of allUnits) {
        console.log(`Migrating unit: ${unit.title} (${unit.lang})...`);

        // Check if unit already exists
        const { data: existingUnits, error: checkError } = await supabase
            .from('units')
            .select('id')
            .eq('internal_id', unit.id.toString())
            .eq('lang', unit.lang)
            .limit(1);

        if (checkError) {
            console.error(`  Error checking for unit ${unit.title}:`, checkError);
        }

        let dbUnitId: string | null = null;

        if (existingUnits && existingUnits.length > 0) {
            console.log(`  Unit already exists with ID: ${existingUnits[0].id}`);
            dbUnitId = existingUnits[0].id;
        } else {
            console.log(`  Inserting new unit: ${unit.title}`);
            const { data: unitData, error: unitError } = await supabase
                .from('units')
                .insert({
                    internal_id: unit.id.toString(),
                    lang: unit.lang,
                    title: unit.title,
                    description: unit.description,
                    color: unit.color,
                    order_index: typeof unit.id === 'string' ? parseInt(unit.id) : unit.id
                })
                .select('id')
                .single();

            if (unitError) {
                console.error(`Error inserting unit ${unit.title}:`, unitError);
                continue;
            }
            dbUnitId = unitData.id;
            console.log(`  Unit inserted with DB ID: ${dbUnitId}`);
        }

        if (!dbUnitId) continue;

        // 2. Migrate Levels
        if (unit.levels && unit.levels.length > 0) {
            for (let i = 0; i < unit.levels.length; i++) {
                const level = unit.levels[i];

                // Check if level already exists
                const { data: existingLevels, error: levelCheckError } = await supabase
                    .from('levels')
                    .select('id')
                    .eq('internal_id', level.id)
                    .eq('unit_id', dbUnitId)
                    .limit(1);

                if (levelCheckError) {
                    console.error(`    Error checking for level ${level.title}:`, levelCheckError);
                }

                let dbLevelId: string | null = null;

                if (existingLevels && existingLevels.length > 0) {
                    console.log(`    Level already exists: ${level.title}`);
                    dbLevelId = existingLevels[0].id;
                } else {
                    const insertData: any = {
                        internal_id: level.id,
                        unit_id: dbUnitId,
                        title: level.title,
                        total_questions: level.totalQuestions,
                        icon_type: level.iconType,
                        position: 0, // Using 0 as the column is an integer and unused in UI
                        status: level.status.toLowerCase(),
                        xp_reward: level.xpReward,
                        order_index: i
                    };

                    console.log(`    Inserting level: ${level.title}, Data:`, JSON.stringify(insertData));

                    const { data: levelData, error: levelError } = await supabase
                        .from('levels')
                        .insert(insertData)
                        .select('id')
                        .single();

                    if (levelError) {
                        console.error(`    Error inserting level ${level.title}:`, levelError);
                        continue;
                    }
                    dbLevelId = levelData.id;
                    console.log(`    Level inserted: ${level.title}`);
                }

                if (!dbLevelId) continue;

                // 3. Migrate Questions
                if (level.questions && level.questions.length > 0) {
                    // Check first question to see if questions exist
                    const { data: existingQ } = await supabase
                        .from('questions')
                        .select('id')
                        .eq('internal_id', level.questions[0].id.toString())
                        .eq('level_id', dbLevelId)
                        .limit(1);

                    if (existingQ && existingQ.length > 0) {
                        console.log(`      Questions already exist for level ${level.title}`);
                    } else {
                        const questionsToInsert = level.questions.map((q, qIndex) => ({
                            internal_id: q.id.toString(),
                            level_id: dbLevelId,
                            type: q.type,
                            question: q.question,
                            options: q.options,
                            correct_answer: q.correctAnswer
                        }));

                        const { error: qError } = await supabase
                            .from('questions')
                            .insert(questionsToInsert);

                        if (qError) {
                            console.error(`      Error inserting questions for level ${level.title}:`, qError);
                        } else {
                            console.log(`      Migrated ${questionsToInsert.length} questions.`);
                        }
                    }
                }
            }
        }
    }

    // 4. Migrate Doctrinal Mastery
    console.log('Migrating Doctrinal Mastery...');
    const allMastery = [
        ...masteryData.map(m => ({ ...m, lang: 'en' })),
        ...mongolianMasteryData.map(m => ({ ...m, lang: 'mn' }))
    ];

    const masteryToInsert = allMastery.map(m => ({
        internal_id: m.id,
        lang: m.lang,
        volume: m.volume,
        reference: m.reference,
        text: m.text,
        url: m.url
    }));

    const { error: mError } = await supabase
        .from('doctrinal_mastery')
        .insert(masteryToInsert);

    if (mError) {
        console.error('Error inserting doctrinal mastery:', mError);
    } else {
        console.log(`Migrated ${masteryToInsert.length} mastery scriptures.`);
    }

    console.log('Migration completed!');
}

migrate();
