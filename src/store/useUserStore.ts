import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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
    nickname: string | null;
    isAdmin: boolean;
    loading: boolean;
    error: string | null;
    getLeague: (xp: number) => { name: string; key: string; nextXp: number | null; progress: number };

    // Actions
    initAuth: () => () => void;
    loginGoogle: () => Promise<void>;
    loginEmail: (email: string, pass: string) => Promise<void>;
    signupEmail: (email: string, pass: string) => Promise<void>;
    logout: () => Promise<void>;
    deleteProfile: () => Promise<void>;

    loseHeart: () => void;
    gainXp: (amount: number) => void;
    toggleTheme: () => void;
    updateSettings: (settings: { notifications?: boolean; fontSize?: 'small' | 'medium' | 'large'; language?: 'en' | 'mn'; theme?: 'light' | 'dark' }) => void;
    completeLesson: () => void;
    completeLessonById: (lessonId: string) => void;
    buyItem: (cost: number, type: 'HEARTS' | 'FREEZE' | 'WAGER') => void;
    updateNickname: (name: string) => Promise<void>;
    updateAvatar: (url: string) => Promise<void>;
    clearError: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
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
            nickname: null,
            isAdmin: false,
            loading: true,
            error: null,

            initAuth: () => {
                return onAuthStateChanged(auth, async (user) => {
                    set({ user, loading: false });

                    if (user) {
                        const userRef = doc(db, 'users', user.uid);
                        // Sync latest Auth profile to Firestore
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
                                    language: data.language ?? 'en',
                                    nickname: data.nickname ?? null,
                                    isAdmin: data.isAdmin ?? false
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
                                    photoURL: user.photoURL,
                                    isAdmin: false
                                }, { merge: true });
                            }
                        });

                        return unsubscribeSnapshot;
                    } else {
                        set({ loading: false, isAdmin: false });
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

                    // Check if user exists in Firestore first
                    setDoc(userRef, {
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        // Only set defaults if they don't exist (merge: true handles the rest)
                    }, { merge: true });

                    // The onSnapshot in initAuth will handle setting the state from Firestore
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

                    // Initialize new user with current local progress (Guest progress)
                    const state = get();
                    await setDoc(userRef, {
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        hearts: state.hearts,
                        xp: state.xp,
                        streak: state.streak,
                        gems: state.gems,
                        theme: state.theme,
                        notifications: state.notifications,
                        fontSize: state.fontSize,
                        language: state.language,
                        lastLessonDate: state.lastLessonDate,
                        completedLessons: state.completedLessons
                    }, { merge: true });
                } catch (err: any) {
                    set({ error: err.message });
                    throw err;
                }
            },

            logout: async () => {
                await signOut(auth);
                set({
                    user: null,
                    hearts: 5,
                    xp: 0,
                    streak: 1,
                    gems: 100,
                    completedLessons: [],
                    lastLessonDate: null,
                    nickname: null,
                    isAdmin: false,
                    error: null
                });
            },

            deleteProfile: async () => {
                const { user } = get();
                if (!user) return;

                try {
                    // 1. Delete Firestore data
                    await setDoc(doc(db, 'users', user.uid), {
                        deleted: true,
                        deletedAt: new Date().toISOString()
                    }, { merge: true });

                    // 2. Try to delete the Auth user
                    // Note: This might fail if the user hasn't logged in recently
                    try {
                        await user.delete();
                    } catch (authErr: any) {
                        console.warn("Auth deletion failed (likely re-auth needed):", authErr);
                        // If auth deletion fails, we just log them out
                        // The firestore record is already marked/deleted data-wise if we want to be thorough
                    }

                    // 3. Complete logout/clear
                    await get().logout();
                } catch (err: any) {
                    set({ error: err.message });
                    throw err;
                }
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

            updateNickname: async (name: string) => {
                const state = get();
                if (!state.user) return;

                try {
                    await updateDoc(doc(db, 'users', state.user.uid), { nickname: name });
                    set({ nickname: name });
                } catch (err: any) {
                    set({ error: err.message });
                }
            },

            updateAvatar: async (url: string) => {
                const state = get();
                if (!state.user) return;

                try {
                    await updateDoc(doc(db, 'users', state.user.uid), { photoURL: url });
                    set({ user: { ...state.user, photoURL: url } as User });
                } catch (err: any) {
                    set({ error: err.message });
                }
            },

            getLeague: (xp: number) => {
                if (xp < 500) return { name: 'Egypt', key: 'leaderboard.cityEgypt', nextXp: 500, progress: (xp / 500) * 100 };
                if (xp < 1500) return { name: 'Wilderness', key: 'leaderboard.cityWilderness', nextXp: 1500, progress: ((xp - 500) / 1000) * 100 };
                if (xp < 3000) return { name: 'Zarahemla', key: 'leaderboard.cityZarahemla', nextXp: 3000, progress: ((xp - 1500) / 1500) * 100 };
                if (xp < 5000) return { name: 'Bountiful', key: 'leaderboard.cityBountiful', nextXp: 5000, progress: ((xp - 3000) / 2000) * 100 };
                if (xp < 10000) return { name: 'City of Enoch', key: 'leaderboard.cityEnoch', nextXp: 10000, progress: ((xp - 5000) / 5000) * 100 };
                return { name: 'Zion', key: 'leaderboard.cityZion', nextXp: null, progress: 100 };
            },

            clearError: () => set({ error: null })
        }),
        {
            name: 'zion-user-storage',
            partialize: (state) => ({
                hearts: state.hearts,
                xp: state.xp,
                streak: state.streak,
                gems: state.gems,
                theme: state.theme,
                notifications: state.notifications,
                fontSize: state.fontSize,
                language: state.language,
                lastLessonDate: state.lastLessonDate,
                completedLessons: state.completedLessons,
                nickname: state.nickname
            }),
        }
    )
);
