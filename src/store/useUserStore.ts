import { create } from 'zustand';
import { auth, db } from '../firebase/config';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import {
    doc,
    setDoc,
    updateDoc,
    increment,
    onSnapshot
} from 'firebase/firestore';

interface UserState {
    user: User | null;
    hearts: number;
    xp: number;
    streak: number;
    gems: number;
    theme: 'light' | 'dark';
    notifications: boolean;
    fontSize: 'small' | 'medium' | 'large';
    language: 'en' | 'mn';
    lastLessonDate: string | null;
    completedLessons: string[];
    loading: boolean;
    error: string | null;

    // Actions
    initAuth: () => () => void;
    loginGoogle: () => Promise<void>;
    loginEmail: (email: string, pass: string) => Promise<void>;
    signupEmail: (email: string, pass: string) => Promise<void>;
    logout: () => Promise<void>;

    loseHeart: () => void;
    gainXp: (amount: number) => void;
    toggleTheme: () => void;
    updateSettings: (settings: { notifications?: boolean; fontSize?: 'small' | 'medium' | 'large'; language?: 'en' | 'mn'; theme?: 'light' | 'dark' }) => void;
    completeLesson: () => void;
    completeLessonById: (lessonId: string) => void;
    buyItem: (cost: number, type: 'HEARTS' | 'FREEZE' | 'WAGER') => void;
    clearError: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    hearts: 5,
    xp: 0,
    streak: 1,
    gems: 100,
    theme: 'light',
    notifications: true,
    fontSize: 'medium',
    language: 'en',
    lastLessonDate: null,
    completedLessons: [],
    loading: true,
    error: null,

    initAuth: () => {
        return onAuthStateChanged(auth, async (user) => {
            set({ user, loading: false });

            if (user) {
                // Subscribe to real-time updates for this user
                const userRef = doc(db, 'users', user.uid);
                // Sync latest Auth profile to Firestore (e.g. if they changed name/photo)
                setDoc(userRef, {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }, { merge: true });

                const unsubscribeSnapshot = onSnapshot(userRef, (docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        set({
                            hearts: data.hearts ?? 5,
                            xp: data.xp ?? 0,
                            streak: data.streak ?? 1,
                            gems: data.gems ?? 100,
                            lastLessonDate: data.lastLessonDate ?? null,
                            completedLessons: data.completedLessons ?? [],
                            theme: data.theme ?? 'light',
                            notifications: data.notifications ?? true,
                            fontSize: data.fontSize ?? 'medium',
                            language: data.language ?? 'en'
                        });

                        // Sync theme
                        if (data.theme === 'dark') {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }

                        // Sync font size
                        const fontSize = data.fontSize ?? 'medium';
                        document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
                        document.documentElement.classList.add(`font-${fontSize}`);
                    } else {
                        // Initialize new user doc
                        setDoc(userRef, {
                            hearts: 5,
                            xp: 0,
                            streak: 1,
                            gems: 100,
                            theme: 'light',
                            notifications: true,
                            fontSize: 'medium',
                            language: 'en',
                            lastLessonDate: null,
                            email: user.email,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        }, { merge: true });
                    }
                });

                return unsubscribeSnapshot;
            }
        });
    },

    loginGoogle: async () => {
        try {
            set({ error: null });
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userRef = doc(db, 'users', user.uid);
            await setDoc(userRef, {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                hearts: 5,
                xp: 0,
                streak: 1,
                gems: 100,
                theme: 'light',
                notifications: true,
                fontSize: 'medium',
                language: 'en',
                lastLessonDate: null
            }, { merge: true });
        } catch (err: any) {
            set({ error: err.message });
        }
    },

    loginEmail: async (email, pass) => {
        try {
            set({ error: null });
            await signInWithEmailAndPassword(auth, email, pass);
        } catch (err: any) {
            set({ error: err.message });
            throw err;
        }
    },

    signupEmail: async (email, pass) => {
        try {
            set({ error: null });
            const cred = await createUserWithEmailAndPassword(auth, email, pass);
            const user = cred.user;
            const userRef = doc(db, 'users', user.uid);
            await setDoc(userRef, {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                hearts: 5,
                xp: 0,
                streak: 1,
                gems: 100,
                theme: 'light',
                notifications: true,
                fontSize: 'medium',
                language: 'en',
                lastLessonDate: null
            }, { merge: true });
        } catch (err: any) {
            set({ error: err.message });
            throw err;
        }
    },

    logout: async () => {
        await signOut(auth);
        set({ user: null, hearts: 5, xp: 0, streak: 0, error: null });
    },

    loseHeart: () => {
        set((state) => {
            const newHearts = Math.max(0, state.hearts - 1);
            if (state.user) {
                updateDoc(doc(db, 'users', state.user.uid), { hearts: newHearts });
            }
            return { hearts: newHearts };
        });
    },

    gainXp: (amount) => {
        set((state) => {
            const newXp = state.xp + amount;
            if (state.user) {
                updateDoc(doc(db, 'users', state.user.uid), { xp: increment(amount) });
            }
            return { xp: newXp };
        });
    },

    toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        if (state.user) {
            updateDoc(doc(db, 'users', state.user.uid), { theme: newTheme });
        }

        return { theme: newTheme };
    }),

    updateSettings: (settings) => set((state) => {
        // Apply theme if it's being updated
        if (settings.theme !== undefined) {
            if (settings.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        // Apply font size if it's being updated
        if (settings.fontSize !== undefined) {
            document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
            document.documentElement.classList.add(`font-${settings.fontSize}`);
        }

        // Persist to Firestore
        if (state.user) {
            updateDoc(doc(db, 'users', state.user.uid), settings);
        }

        return settings;
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
                newStreak = 1;
            }
        }

        const updates = {
            streak: newStreak,
            lastLessonDate: today,
            xp: state.xp + 10,
            gems: state.gems + 5
        };

        if (state.user) {
            updateDoc(doc(db, 'users', state.user.uid), updates);
        }

        return updates;
    }),

    completeLessonById: (lessonId: string) => set((state) => {
        if (state.completedLessons.includes(lessonId)) return {};

        const newCompleted = [...state.completedLessons, lessonId];
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
                newStreak = 1;
            }
        }

        const updates = {
            completedLessons: newCompleted,
            streak: newStreak,
            lastLessonDate: today,
            xp: state.xp + 10,
            gems: state.gems + 5
        };

        if (state.user) {
            updateDoc(doc(db, 'users', state.user.uid), updates);
        }

        return updates;
    }),

    buyItem: (cost: number, type: 'HEARTS' | 'FREEZE' | 'WAGER') => {
        set((state) => {
            if (state.gems < cost) return {}; // Not enough gems

            const updates: Partial<UserState> = { gems: state.gems - cost };

            if (type === 'HEARTS') {
                updates.hearts = 5;
            }
            // Add other logic logic later if needed (e.g. freeze inventory)

            if (state.user) {
                updateDoc(doc(db, 'users', state.user.uid), updates);
            }
            return updates;
        });
    },

    clearError: () => set({ error: null })
}));
