import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function verifyDeduplication() {
    console.log('Fetching units from Supabase for verification...');
    const { data: unitsData, error: unitsError } = await supabase
        .from('units')
        .select(`
            id, internal_id, lang, title, description, color,
            levels (
                id, internal_id, title, total_questions, icon_type, position, status, xp_reward, order_index,
                questions (
                    id, internal_id, type, question, options, correct_answer
                )
            )
        `);

    if (unitsError) {
        console.error('Error fetching units:', unitsError);
        return;
    }

    const transformUnits = (lang: string) => {
        const langUnits = unitsData?.filter(u => u.lang === lang) || [];
        const unitMap = new Map<string, any>();
        langUnits.forEach(u => {
            const existing = unitMap.get(u.internal_id);
            if (!existing || (u.levels?.length || 0) > (existing.levels?.length || 0)) {
                unitMap.set(u.internal_id, u);
            }
        });

        return Array.from(unitMap.values()).map(u => {
            const levelMap = new Map<string, any>();
            (u.levels || []).forEach((l: any) => {
                const existingLevel = levelMap.get(l.internal_id);
                if (!existingLevel || (l.questions?.length || 0) > (existingLevel.questions?.length || 0)) {
                    levelMap.set(l.internal_id, l);
                }
            });
            return {
                title: u.title,
                internal_id: u.internal_id,
                levelsCount: levelMap.size
            };
        });
    };

    const en = transformUnits('en');
    const mn = transformUnits('mn');

    console.log(`\nEnglish Units: ${en.length} (Expected 13)`);
    en.forEach(u => console.log(`  - ${u.title}: ${u.levelsCount} levels`));

    console.log(`\nMongolian Units: ${mn.length} (Expected 13)`);
    mn.forEach(u => console.log(`  - ${u.title}: ${u.levelsCount} levels`));

    const { data: masteryBatch, error: masteryError } = await supabase
        .from('doctrinal_mastery')
        .select('*');

    if (masteryError) {
        console.error('Error fetching mastery:', masteryError);
        return;
    }

    const transformMastery = (lang: string) => {
        const langMastery = masteryBatch?.filter(m => m.lang === lang) || [];
        const masteryMap = new Map<string, any>();
        langMastery.forEach(m => {
            if (!masteryMap.has(m.internal_id)) {
                masteryMap.set(m.internal_id, m);
            }
        });
        return Array.from(masteryMap.values());
    };

    const enMastery = transformMastery('en');
    const mnMastery = transformMastery('mn');

    console.log(`\nEnglish Mastery: ${enMastery.length}`);
    console.log(`Mongolian Mastery: ${mnMastery.length}`);

    if (en.length === 13 && mn.length === 13 && enMastery.length > 0) {
        console.log('\nSUCCESS: All deduplication logic confirmed.');
    } else {
        console.log('\nFAILURE: Unexpected counts.');
    }
}

verifyDeduplication();
