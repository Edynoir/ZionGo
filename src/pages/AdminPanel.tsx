import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useUserStore } from '../store/useUserStore';
import { Users, LayoutDashboard, ShieldCheck, Loader, BarChart3 } from 'lucide-react';
import { Navigate } from 'react-router-dom';

interface AdminStats {
    totalUsers: number;
    totalXP: number;
}

export const AdminPanel = () => {
    const { isAdmin } = useUserStore();
    const [stats, setStats] = useState<AdminStats>({ totalUsers: 0, totalXP: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isAdmin) return;

        const fetchStats = async () => {
            try {
                const usersRef = collection(db, 'users');
                const snapshot = await getDocs(usersRef);

                let totalXP = 0;
                snapshot.forEach(doc => {
                    totalXP += doc.data().xp || 0;
                });

                setStats({
                    totalUsers: snapshot.size,
                    totalXP
                });
            } catch (error) {
                console.error("Error fetching admin stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [isAdmin]);

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="py-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-primary)]">Admin Dashboard</h1>
                    <p className="text-[var(--text-secondary)] text-sm">Welcome back, Admin.</p>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center p-12">
                    <Loader className="animate-spin text-gray-400" />
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-display">
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 rounded-3xl group hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-2xl">
                                    <Users size={24} />
                                </div>
                                <h2 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Total Users</h2>
                            </div>
                            <div className="text-4xl font-black text-[var(--text-primary)]">{stats.totalUsers}</div>
                        </div>

                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 rounded-3xl group hover:border-yellow-500/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 rounded-2xl">
                                    <BarChart3 size={24} />
                                </div>
                                <h2 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Total XP Earned</h2>
                            </div>
                            <div className="text-4xl font-black text-[var(--text-primary)]">{stats.totalXP.toLocaleString()}</div>
                        </div>
                    </div>

                    {/* Placeholder for future features */}
                    <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] border-dashed p-12 rounded-3xl flex flex-col items-center text-center">
                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-400 mb-4">
                            <LayoutDashboard size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">More Tools Coming Soon</h3>
                        <p className="text-[var(--text-secondary)] max-w-sm">
                            Managing lessons, managing users, and detailed analytics are currently under development.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
