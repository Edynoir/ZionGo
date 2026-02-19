import { useEffect, useState } from 'react';
import { Trophy, User, Loader, MapPin } from 'lucide-react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';
import { LeagueMap } from '../components/leaderboard/LeagueMap';
import clsx from 'clsx';

interface LeaderboardUser {
    uid: string;
    xp: number;
    hearts: number;
    displayName?: string;
    photoURL?: string;
    nickname?: string;
}

export const Leaderboard = () => {
    const { user: currentUser, xp: currentUserXp, getLeague, language } = useUserStore();
    const { t } = useTranslation(language);
    const [users, setUsers] = useState<LeaderboardUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'MAP' | 'LIST'>('MAP');

    const currentLeague = getLeague(currentUserXp);

    useEffect(() => {
        const q = query(
            collection(db, 'users'),
            orderBy('xp', 'desc'),
            limit(10)
        );

        // Safety timeout to prevent infinite loading if Firebase doesn't respond
        const timeout = setTimeout(() => {
            if (loading) setLoading(false);
        }, 5000);

        const unsubscribe = onSnapshot(q,
            (snapshot) => {
                const fetchedUsers: LeaderboardUser[] = [];
                snapshot.forEach((doc) => {
                    fetchedUsers.push({ uid: doc.id, ...doc.data() } as LeaderboardUser);
                });
                setUsers(fetchedUsers);
                setLoading(false);
                clearTimeout(timeout);
            },
            (error) => {
                console.error("Leaderboard fetch error:", error);
                setLoading(false);
                clearTimeout(timeout);
            }
        );

        return () => {
            unsubscribe();
            clearTimeout(timeout);
        };
    }, []);

    if (loading) {
        return <div className="flex justify-center p-12"><Loader className="animate-spin text-gray-400" /></div>;
    }

    return (
        <div className="flex flex-col items-center py-8">
            <div className="mb-0 text-center w-full max-w-lg mb-8">
                <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    <MapPin size={16} />
                    {t(currentLeague.key as any)}
                </div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{t('leaderboard.title')}</h1>
                <p className="text-[var(--text-secondary)] mb-6">{t('leaderboard.subtitle')}</p>

                {/* View Toggle */}
                <div className="flex bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-1 rounded-xl mb-6 self-center max-w-xs mx-auto">
                    <button
                        onClick={() => setViewMode('MAP')}
                        className={clsx(
                            "flex-1 py-2 px-4 rounded-lg font-bold text-sm transition-all",
                            viewMode === 'MAP'
                                ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                                : "text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        {t('leaderboard.viewMap')}
                    </button>
                    <button
                        onClick={() => setViewMode('LIST')}
                        className={clsx(
                            "flex-1 py-2 px-4 rounded-lg font-bold text-sm transition-all",
                            viewMode === 'LIST'
                                ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                                : "text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        {t('leaderboard.viewList')}
                    </button>
                </div>

                {/* Progress Bar to next city (Only in List view or as global stats) */}
                {viewMode === 'LIST' && (
                    <>
                        {currentLeague.nextXp && (
                            <div className="w-full bg-[var(--border-color)] h-4 rounded-full overflow-hidden relative mb-2">
                                <div
                                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-1000"
                                    style={{ width: `${currentLeague.progress}%` }}
                                />
                            </div>
                        )}
                        <div className="flex justify-between text-xs font-bold text-gray-400 px-1">
                            <span>{t(currentLeague.key as any)}</span>
                            {currentLeague.nextXp && (
                                <span>{currentUserXp} / {currentLeague.nextXp} XP</span>
                            )}
                        </div>
                    </>
                )}
            </div>

            {viewMode === 'MAP' ? (
                <LeagueMap />
            ) : (
                <div className="max-w-lg w-full border-2 border-[var(--border-color)] rounded-2xl overflow-hidden bg-[var(--bg-card)]">
                    {users.map((user, index) => {
                        const rank = index + 1;
                        const isMe = user.uid === currentUser?.uid;

                        return (
                            <div key={user.uid} className={`flex items-center gap-4 p-4 border-b border-[var(--border-color)] last:border-0 ${isMe ? 'bg-sky-50 dark:bg-sky-900/20' : ''}`}>
                                <span className={`font-bold w-6 text-center ${rank <= 3 ? 'text-yellow-500' : 'text-gray-400'}`}>
                                    {rank}
                                </span>

                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 overflow-hidden">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                                    ) : (
                                        rank === 1 ? <Trophy size={20} className="text-yellow-500" /> : <User size={20} />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <span className="block font-bold text-[var(--text-primary)] truncate">
                                        {user.nickname || user.displayName || t('leaderboard.anonymous')}
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                                        {t(getLeague(user.xp).key as any)}
                                    </span>
                                </div>

                                <span className="font-bold text-[var(--text-secondary)]">
                                    {user.xp} XP
                                </span>
                            </div>
                        );
                    })}
                    {users.length === 0 && (
                        <div className="p-8 text-center text-gray-400">
                            {t('leaderboard.noUsers')}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
