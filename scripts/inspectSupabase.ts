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

async function inspect() {
    console.log('Testing position type specifically...');
    const dummyUnitId = '1db4fcd2-8e46-49ed-8cbe-81efab610f59'; // Use existing unit ID

    const tests = [
        { name: 'JSON Object', val: { top: '50px', left: '50%' } },
        { name: 'JSON String', val: JSON.stringify({ top: '50px', left: '50%' }) },
        { name: 'Integer', val: 123 },
        { name: 'Null', val: null }
    ];

    for (const test of tests) {
        console.log(`\nTesting type: ${test.name}`);
        const { error } = await supabase.from('levels').insert({
            internal_id: 'test-' + Date.now(),
            unit_id: dummyUnitId,
            title: 'Test ' + test.name,
            total_questions: 1,
            icon_type: 'star',
            position: test.val as any,
            status: 'locked',
            order_index: 0
        });
        console.log(`Result: ${error ? 'ERROR: ' + error.message : 'SUCCESS'}`);
    }
}

inspect();
