import { create } from 'zustand';
import { supabase } from '../supabase/config';
import type { Unit, Level, Question } from '../data/lessons';
import { englishUnits, mongolianUnits } from '../data/lessons';
import type { MasteryScripture } from '../data/doctrinalMastery';
import { masteryData, mongolianMasteryData } from '../data/doctrinalMastery';

interface ContentState {
    units: {
        en: Unit[];
        mn: Unit[];
    };
    mastery: {
        en: MasteryScripture[];
        mn: MasteryScripture[];
    };
    loading: boolean;
    error: string | null;

    fetchContent: () => Promise<void>;
}

export const useContentStore = create<ContentState>((set) => ({
    units: {
        en: englishUnits, // Default to local data
        mn: mongolianUnits
    },
    mastery: {
        en: masteryData,
        mn: mongolianMasteryData
    },
    loading: false,
    error: null,

    fetchContent: async () => {
        if (!supabase) {
            console.log('Supabase client not initialized. Using local content.');
            return;
        }
        set({ loading: true });
        try {
            console.log('Fetching units from Supabase...');
            // Fetch Units with nested levels and questions
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
                `)
                .order('order_index');

            if (unitsError) throw unitsError;

            // Fetch Doctrinal Mastery
            const { data: masteryBatch, error: masteryError } = await supabase
                .from('doctrinal_mastery')
                .select('*')
                .order('created_at');

            if (masteryError) throw masteryError;

            // Process and transform units
            const transformUnits = (lang: string): Unit[] => {
                const langUnits = unitsData?.filter(u => u.lang === lang) || [];

                // Deduplicate units by internal_id, keeping the one with most levels
                const unitMap = new Map<string, any>();
                langUnits.forEach(u => {
                    const existing = unitMap.get(u.internal_id);
                    // Prioritize units that have more levels to ensure completeness
                    if (!existing || (u.levels?.length || 0) > (existing.levels?.length || 0)) {
                        unitMap.set(u.internal_id, u);
                    }
                });

                return Array.from(unitMap.values()).map(u => {
                    // Deduplicate levels within each unit by internal_id
                    const levelMap = new Map<string, any>();
                    (u.levels || []).forEach((l: any) => {
                        const existingLevel = levelMap.get(l.internal_id);
                        // Prioritize levels with more questions
                        if (!existingLevel || (l.questions?.length || 0) > (existingLevel.questions?.length || 0)) {
                            levelMap.set(l.internal_id, l);
                        }
                    });

                    return {
                        id: u.internal_id,
                        title: u.title,
                        description: u.description,
                        color: u.color,
                        levels: Array.from(levelMap.values())
                            .sort((a: any, b: any) => a.order_index - b.order_index)
                            .map((l: any): Level => ({
                                id: l.internal_id,
                                title: l.title,
                                totalQuestions: l.total_questions,
                                iconType: l.icon_type,
                                position: l.position,
                                status: l.status,
                                xpReward: l.xp_reward,
                                questions: (l.questions || [])
                                    .map((q: any): Question => ({
                                        id: q.internal_id,
                                        type: q.type,
                                        question: q.question,
                                        options: q.options,
                                        correctAnswer: q.correct_answer
                                    }))
                            }))
                    };
                });
            };

            // Process mastery
            const transformMastery = (lang: string): MasteryScripture[] => {
                const langMastery = masteryBatch?.filter(m => m.lang === lang) || [];
                const masteryMap = new Map<string, MasteryScripture>();

                langMastery.forEach(m => {
                    // Keep the first one found or we could add more complex logic if needed
                    if (!masteryMap.has(m.internal_id)) {
                        masteryMap.set(m.internal_id, {
                            id: m.internal_id,
                            volume: m.volume,
                            reference: m.reference,
                            text: m.text,
                            url: m.url
                        });
                    }
                });

                return Array.from(masteryMap.values());
            };

            const enMasteryFinal = transformMastery('en');
            const mnMasteryFinal = transformMastery('mn');

            set({
                units: {
                    en: unitsData && unitsData.some(u => u.lang === 'en' && u.levels && u.levels.length > 0) ? transformUnits('en') : englishUnits,
                    mn: unitsData && unitsData.some(u => u.lang === 'mn' && u.levels && u.levels.length > 0) ? transformUnits('mn') : mongolianUnits
                },
                mastery: {
                    en: enMasteryFinal.length > 0 ? enMasteryFinal : masteryData as MasteryScripture[],
                    mn: mnMasteryFinal.length > 0 ? mnMasteryFinal : mongolianMasteryData as MasteryScripture[]
                },
                loading: false
            });
        } catch (error: any) {
            console.error('Failed to fetch content from Supabase:', error);
            set({ error: error.message, loading: false });
        }
    }
}));
