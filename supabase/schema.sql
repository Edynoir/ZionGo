-- CLEANUP: Drop old conflicting tables if they exist
-- WARNING: This will delete existing data in these tables.
DROP TABLE IF EXISTS public.questions CASCADE;
DROP TABLE IF EXISTS public.levels CASCADE;
DROP TABLE IF EXISTS public.units CASCADE;
DROP TABLE IF EXISTS public.doctrinal_mastery CASCADE;
DROP TABLE IF EXISTS public.main_path_lessons CASCADE;

-- Create Units Table
CREATE TABLE public.units (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    internal_id TEXT NOT NULL,
    lang TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    color TEXT,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Levels Table
CREATE TABLE public.levels (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    internal_id TEXT NOT NULL,
    unit_id UUID REFERENCES public.units(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    total_questions INTEGER NOT NULL,
    icon_type TEXT,
    position JSONB NOT NULL,
    status TEXT DEFAULT 'locked',
    xp_reward INTEGER DEFAULT 10,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Questions Table
CREATE TABLE public.questions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    internal_id TEXT NOT NULL,
    level_id UUID REFERENCES public.levels(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_answer TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Doctrinal Mastery Table
CREATE TABLE public.doctrinal_mastery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    internal_id TEXT NOT NULL,
    lang TEXT NOT NULL,
    volume TEXT NOT NULL,
    reference TEXT NOT NULL,
    text TEXT NOT NULL,
    url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctrinal_mastery ENABLE ROW LEVEL SECURITY;

-- Create Policies
CREATE POLICY "Allow public read access" ON public.units FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.levels FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.questions FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.doctrinal_mastery FOR SELECT USING (true);

-- Migration policies (Allow anon insert for initial setup)
CREATE POLICY "Allow anon insert for migration" ON public.units FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon insert for migration" ON public.levels FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon insert for migration" ON public.questions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon insert for migration" ON public.doctrinal_mastery FOR INSERT WITH CHECK (true);
