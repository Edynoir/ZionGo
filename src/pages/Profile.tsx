import { User, Flame, Moon, Sun } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';

export const Profile = () => {
    const { xp, streak, theme, toggleTheme } = useUserStore();

    return (
        <div className="flex flex-col items-center py-8">
            <div className="flex flex-col items-center gap-4 mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 border-4 border-gray-100">
                    <User size={48} />
                </div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">LDS Learner</h1>
                <p className="text-[var(--text-secondary)]">Joined February 2026</p>
            </div>

            <div className="w-full max-w-lg space-y-6">
                {/* Stats */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Statistics</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 border border-[var(--border-color)] p-3 rounded-xl">
                            <Flame className="text-orange-500" />
                            <div>
                                <div className="font-bold text-lg">{streak}</div>
                                <div className="text-xs text-gray-400 uppercase font-bold">Day Streak</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border border-[var(--border-color)] p-3 rounded-xl">
                            <div className="font-bold text-yellow-500">XP</div>
                            <div>
                                <div className="font-bold text-lg">{xp}</div>
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
