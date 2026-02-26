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

async function checkDuplicates() {
    console.log('Checking for duplicate units...');
    const { data: units, error } = await supabase
        .from('units')
        .select('id, internal_id, lang, title');

    if (error) {
        console.error('Error fetching units:', error);
        return;
    }

    const counts: Record<string, number> = {};
    const duplicates: any[] = [];

    units.forEach(u => {
        const key = `${u.lang}:${u.internal_id}`;
        counts[key] = (counts[key] || 0) + 1;
        if (counts[key] > 1) {
            duplicates.push(u);
        }
    });

    console.log(`Total units found: ${units.length}`);
    console.log(`Total unique (lang:internal_id) keys: ${Object.keys(counts).length}`);
    console.log(`Units with duplicates: ${duplicates.length}`);

    if (duplicates.length > 0) {
        console.log('\nSample duplicates:');
        duplicates.slice(0, 5).forEach(d => {
            console.log(`  - Lang: ${d.lang}, Internal ID: ${d.internal_id}, Title: ${d.title}`);
        });
    }

    // Also check levels for a few units
    const { data: levels } = await supabase.from('levels').select('unit_id, count').select('unit_id', { count: 'exact', head: true });
    console.log(`\nLevels count: ${levels?.length || 0}`);
}

checkDuplicates();
