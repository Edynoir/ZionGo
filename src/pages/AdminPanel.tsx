import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useUserStore } from '../store/useUserStore';
import { Users, ShieldCheck, Loader, BarChart3, Edit2, Check, X, Plus, Trash2, Database, AlertTriangle } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '../utils/i18n';
import { migrateDataToFirebase } from '../utils/migration';

interface AdminStats {
    totalUsers: number;
    totalXP: number;
}

interface UserData {
    uid: string;
    email: string;
    xp: number;
    gems: number;
    streak: number;
    inventory: string[];
    nickname?: string;
    displayName?: string;
}

export const AdminPanel = () => {
    const { isAdmin, language, updateUserStatsAdmin } = useUserStore();
    const { t } = useTranslation(language);
    const [stats, setStats] = useState<AdminStats>({ totalUsers: 0, totalXP: 0 });
    const [users, setUsers] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingUser, setEditingUser] = useState<string | null>(null);
    const [editValues, setEditValues] = useState<Partial<UserData>>({});
    const [newItem, setNewItem] = useState('');
    const [migrating, setMigrating] = useState(false);
    const [migrationStatus, setMigrationStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const usersRef = collection(db, 'users');
            const snapshot = await getDocs(usersRef);

            let totalXP = 0;
            const usersList: UserData[] = [];

            snapshot.forEach(doc => {
                const data = doc.data();
                const xp = data.xp || 0;
                totalXP += xp;
                usersList.push({
                    uid: doc.id,
                    email: data.email || 'N/A',
                    xp: xp,
                    gems: data.gems || 0,
                    streak: data.streak || 0,
                    inventory: data.inventory || [],
                    nickname: data.nickname,
                    displayName: data.displayName
                });
            });

            setStats({
                totalUsers: snapshot.size,
                totalXP
            });
            setUsers(usersList);
        } catch (error) {
            console.error("Error fetching admin data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isAdmin) return;
        fetchAllData();
    }, [isAdmin]);

    const startEditing = (user: UserData) => {
        setEditingUser(user.uid);
        setEditValues({
            xp: user.xp,
            gems: user.gems,
            inventory: [...user.inventory]
        });
    };

    const handleSave = async (uid: string) => {
        try {
            await updateUserStatsAdmin(uid, editValues);
            setEditingUser(null);
            fetchAllData(); // Refresh list
        } catch (error) {
            alert("Failed to update user");
        }
    };

    const addItem = () => {
        if (!newItem) return;
        const currentInv = editValues.inventory || [];
        if (!currentInv.includes(newItem)) {
            setEditValues({ ...editValues, inventory: [...currentInv, newItem] });
        }
        setNewItem('');
    };

    const removeItem = (item: string) => {
        const currentInv = editValues.inventory || [];
        setEditValues({ ...editValues, inventory: currentInv.filter(i => i !== item) });
    };

    const handleMigrate = async () => {
        if (!window.confirm(t('admin.migrationConfirm'))) return;
        setMigrating(true);
        setMigrationStatus('idle');
        try {
            await migrateDataToFirebase();
            setMigrationStatus('success');
            setTimeout(() => setMigrationStatus('idle'), 5000);
        } catch (err) {
            setMigrationStatus('error');
        } finally {
            setMigrating(false);
        }
    };

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    // The user's instruction had a conflicting `if (loading)` block here.
    // To maintain the original loading behavior (showing a loader within the component)
    // while incorporating the new migration section, I'm keeping the loader inside the return.
    // If the intent was to navigate away on loading, the structure would need a different approach.

    return (
        <div className="py-8 px-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-primary)]">Admin Dashboard</h1>
                    <p className="text-[var(--text-secondary)] text-sm">Manage users and track application growth</p>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center p-12">
                    <Loader className="animate-spin text-gray-400" />
                </div>
            ) : (
                <div className="space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-display">
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 rounded-3xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-2xl">
                                    <Users size={24} />
                                </div>
                                <h2 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Total Users</h2>
                            </div>
                            <div className="text-4xl font-black text-[var(--text-primary)]">{stats.totalUsers}</div>
                        </div>

                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 rounded-3xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 rounded-2xl">
                                    <BarChart3 size={24} />
                                </div>
                                <h2 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Total XP Earned</h2>
                            </div>
                            <div className="text-4xl font-black text-[var(--text-primary)]">{stats.totalXP.toLocaleString()}</div>
                        </div>
                    </div>

                    {/* Data Migration Section */}
                    <div className="p-6 bg-orange-500/5 border-2 border-orange-500/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500">
                                <Database size={32} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-orange-600 dark:text-orange-400">{t('admin.migrationTitle')}</h2>
                                <p className="text-[var(--text-secondary)]">{t('admin.migrationDesc')}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleMigrate}
                            disabled={migrating}
                            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 min-w-[200px] ${migrating ? "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed" :
                                    migrationStatus === 'success' ? "bg-green-500 text-white" :
                                        migrationStatus === 'error' ? "bg-red-500 text-white" :
                                            "bg-orange-500 text-white hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-orange-500/20"
                                }`}
                        >
                            {migrating ? (
                                <Loader size={24} className="animate-spin" />
                            ) : migrationStatus === 'success' ? (
                                <Check size={24} />
                            ) : migrationStatus === 'error' ? (
                                <AlertTriangle size={24} />
                            ) : (
                                <Database size={24} />
                            )}
                            {migrating ? t('admin.migrating') : migrationStatus === 'success' ? t('admin.migrationSuccess') : migrationStatus === 'error' ? t('admin.migrationFailed') : t('admin.migrationStart')}
                        </button>
                    </div>

                    {/* User Management Section */}
                    <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-3xl overflow-hidden">
                        <div className="p-6 border-b-2 border-[var(--border-color)] bg-gray-50 dark:bg-gray-800/50">
                            <h2 className="text-lg font-bold text-[var(--text-primary)]">{t('admin.manageUsers')}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                                        <th className="px-6 py-4">User</th>
                                        <th className="px-6 py-4 text-center">XP</th>
                                        <th className="px-6 py-4 text-center">Gems</th>
                                        <th className="px-6 py-4">Inventory</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-[var(--border-color)]">
                                    {users.map(user => (
                                        <tr key={user.uid} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-[var(--text-primary)]">
                                                    {user.nickname || user.displayName || 'Unnamed User'}
                                                </div>
                                                <div className="text-xs text-[var(--text-secondary)]">{user.email}</div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editingUser === user.uid ? (
                                                    <input
                                                        type="number"
                                                        className="w-20 p-2 bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl text-center font-bold"
                                                        value={editValues.xp}
                                                        onChange={e => setEditValues({ ...editValues, xp: Number(e.target.value) })}
                                                    />
                                                ) : (
                                                    <span className="font-black text-blue-500">{user.xp.toLocaleString()}</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editingUser === user.uid ? (
                                                    <input
                                                        type="number"
                                                        className="w-20 p-2 bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl text-center font-bold"
                                                        value={editValues.gems}
                                                        onChange={e => setEditValues({ ...editValues, gems: Number(e.target.value) })}
                                                    />
                                                ) : (
                                                    <span className="font-black text-sky-400">{user.gems.toLocaleString()}</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                {editingUser === user.uid ? (
                                                    <div className="space-y-2">
                                                        <div className="flex flex-wrap gap-1">
                                                            {editValues.inventory?.map(item => (
                                                                <span key={item} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-bold">
                                                                    {item}
                                                                    <button onClick={() => removeItem(item)} className="text-red-500 hover:text-red-600">
                                                                        <Trash2 size={12} />
                                                                    </button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <input
                                                                type="text"
                                                                placeholder="STREAK_FREEZE"
                                                                className="flex-1 p-2 text-xs bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-lg"
                                                                value={newItem}
                                                                onChange={e => setNewItem(e.target.value)}
                                                            />
                                                            <button onClick={addItem} className="p-2 bg-green-500 text-white rounded-lg">
                                                                <Plus size={14} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-wrap gap-1">
                                                        {user.inventory.length > 0 ? user.inventory.map(item => (
                                                            <span key={item} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-[10px] font-bold uppercase">
                                                                {item}
                                                            </span>
                                                        )) : <span className="text-xs text-gray-400 italic">No items</span>}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {editingUser === user.uid ? (
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            onClick={() => handleSave(user.uid)}
                                                            className="p-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                                                        >
                                                            <Check size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => setEditingUser(null)}
                                                            className="p-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors"
                                                        >
                                                            <X size={18} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => startEditing(user)}
                                                        className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                                                    >
                                                        <Edit2 size={18} />
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
