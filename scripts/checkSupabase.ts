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

async function check() {
    console.log('Checking Supabase data...');

    const { data: units, error: unitsError } = await supabase.from('units').select('count');
    console.log('Units count:', unitsError ? `Error: ${unitsError.message}` : units?.[0] || 0);

    const { data: levels, error: levelsError } = await supabase.from('levels').select('count');
    console.log('Levels count:', levelsError ? `Error: ${levelsError.message}` : levels?.[0] || 0);

    const { data: questions, error: questionsError } = await supabase.from('questions').select('count');
    console.log('Questions count:', questionsError ? `Error: ${questionsError.message}` : questions?.[0] || 0);

    const { data: mastery, error: masteryError } = await supabase.from('doctrinal_mastery').select('count');
    console.log('Mastery count:', masteryError ? `Error: ${masteryError.message}` : mastery?.[0] || 0);
}

check();
