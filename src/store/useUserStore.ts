import { create } from 'zustand';

interface UserState {
    hearts: number;
    xp: number;
    streak: number;
    gems: number;
    theme: 'light' | 'dark';
    lastLessonDate: string | null; // ISO Date string

    loseHeart: () => void;
    gainXp: (amount: number) => void;
    toggleTheme: () => void;
    completeLesson: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    hearts: 5,
    xp: 0,
    streak: 1,
    gems: 100,
    theme: 'light',
    lastLessonDate: null,

    loseHeart: () => set((state) => ({ hearts: Math.max(0, state.hearts - 1) })),

    gainXp: (amount) => set((state) => ({ xp: state.xp + amount })),

    toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        return { theme: newTheme };
    }),

    completeLesson: () => set((state) => {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = state.lastLessonDate;

        let newStreak = state.streak;

        if (lastDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayString = yesterday.toISOString().split('T')[0];

            if (lastDate === yesterdayString) {
                newStreak += 1;
            } else {
                newStreak = 1; // Reset streak if missed a day (logic can be refined)
            }
        }

        return {
            streak: newStreak,
            lastLessonDate: today,
            xp: state.xp + 10 // Bonus XP for finishing
        };
    }),
}));
