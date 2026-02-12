import { useEffect, useState } from 'react';
import { Trophy, User, Loader } from 'lucide-react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';

interface LeaderboardUser {
    uid: string;
    xp: number;
    hearts: number;
    displayName?: string;
    photoURL?: string;
}

export const Leaderboard = () => {
    const { user: currentUser, language } = useUserStore();
    const { t } = useTranslation(language);
    const [users, setUsers] = useState<LeaderboardUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(
            collection(db, 'users'),
            orderBy('xp', 'desc'),
            limit(10)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedUsers: LeaderboardUser[] = [];
            snapshot.forEach((doc) => {
                fetchedUsers.push({ uid: doc.id, ...doc.data() } as LeaderboardUser);
            });
            setUsers(fetchedUsers);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div className="flex justify-center p-12"><Loader className="animate-spin text-gray-400" /></div>;
    }

    return (
        <div className="flex flex-col items-center py-8">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('leaderboard.title')}</h1>
                <p className="text-[var(--text-secondary)]">{t('leaderboard.subtitle')}</p>
            </div>

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

                            <span className="flex-1 font-bold text-[var(--text-primary)] truncate">
                                {user.displayName || t('leaderboard.anonymous')}
                            </span>

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
        </div>
    );
};
