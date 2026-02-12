import { useState } from 'react';
import { User, Flame, Moon, Sun, LogIn } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';
import { AuthModal } from '../components/auth/AuthModal';

export const Profile = () => {
    const { user, xp, streak, theme, toggleTheme, logout } = useUserStore();
    const [showAuthModal, setShowAuthModal] = useState(false);

    return (
        <div className="flex flex-col items-center py-8 relative">
            {showAuthModal && (
                <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0" onClick={() => setShowAuthModal(false)} />
                    <div className="z-10 w-full max-w-md">
                        <AuthModal onClose={() => setShowAuthModal(false)} />
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center gap-4 mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 border-4 border-[var(--bg-card)] shadow-lg overflow-hidden">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                        <User size={48} />
                    )}
                </div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                    {user?.displayName || user?.email?.split('@')[0] || 'Guest User'}
                </h1>
                <p className="text-[var(--text-secondary)]">Joined February 2026</p>

                {!user ? (
                    <button
                        onClick={() => setShowAuthModal(true)}
                        className="flex items-center gap-2 bg-[#58cc02] text-white border-b-4 border-[#46a302] active:border-b-0 active:translate-y-1 px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-[#46a302] transition-all uppercase tracking-widest"
                    >
                        <LogIn size={20} />
                        Get Started
                    </button>
                ) : (
                    <button
                        onClick={logout}
                        className="text-rose-500 font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                        Sign Out
                    </button>
                )}
            </div>

            <div className="w-full max-w-lg space-y-6">
                {/* Stats */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Statistics</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 border border-[var(--border-color)] p-3 rounded-xl">
                            <Flame className="text-orange-500" />
                            <div>
                                <div className="font-bold text-lg text-[var(--text-primary)]">{streak}</div>
                                <div className="text-xs text-gray-400 uppercase font-bold">Day Streak</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border border-[var(--border-color)] p-3 rounded-xl">
                            <div className="font-bold text-yellow-500">XP</div>
                            <div>
                                <div className="font-bold text-lg text-[var(--text-primary)]">{xp}</div>
                                <div className="text-xs text-gray-400 uppercase font-bold">Total XP</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Settings */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Settings</h2>

                    <button
                        onClick={toggleTheme}
                        className="w-full flex items-center justify-between p-4 hover:bg-[var(--border-color)]/20 rounded-xl transition-colors"
                    >
                        <div className="flex items-center gap-3 text-[var(--text-primary)]">
                            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                            <span className="font-bold">Dark Mode</span>
                        </div>
                        <div className={`w-12 h-6 rounded-full p-1 transition-colors ${theme === 'dark' ? 'bg-[#58cc02]' : 'bg-gray-300'}`}>
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${theme === 'dark' ? 'translate-x-6' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
