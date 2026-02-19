import { useState } from 'react';
import { User, Flame, LogIn, Trash2 } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';
import { AuthModal } from '../components/auth/AuthModal';
import { AvatarSelector } from '../components/profile/AvatarSelector';
import { DeleteProfileModal } from '../components/profile/DeleteProfileModal';

export const Profile = () => {
    const { user, xp, streak, nickname, language, logout, updateNickname } = useUserStore();
    const { t } = useTranslation(language);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showAvatarSelector, setShowAvatarSelector] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isEditingNickname, setIsEditingNickname] = useState(false);
    const [nicknameInput, setNicknameInput] = useState(nickname || '');

    const handleSaveNickname = async () => {
        await updateNickname(nicknameInput);
        setIsEditingNickname(false);
    };

    const { isAdmin } = useUserStore();

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

            {showAvatarSelector && (
                <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0" onClick={() => setShowAvatarSelector(false)} />
                    <div className="z-10 w-full max-w-md">
                        <AvatarSelector onClose={() => setShowAvatarSelector(false)} />
                    </div>
                </div>
            )}

            {showDeleteModal && (
                <DeleteProfileModal onClose={() => setShowDeleteModal(false)} />
            )}

            <div className="flex flex-col items-center gap-4 mb-8">
                <div className="relative group w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 border-4 border-[var(--bg-card)] shadow-lg overflow-hidden">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                        <User size={48} />
                    )}
                    {user && (
                        <button
                            onClick={() => setShowAvatarSelector(true)}
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                        >
                            <span className="text-white text-[10px] font-bold uppercase text-center px-2">{t('profile.changeAvatar')}</span>
                        </button>
                    )}
                </div>
                {isEditingNickname ? (
                    <div className="flex flex-col items-center gap-2">
                        <input
                            type="text"
                            value={nicknameInput}
                            onChange={(e) => setNicknameInput(e.target.value)}
                            placeholder={t('profile.nicknamePlaceholder') || "Enter nickname..."}
                            className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl px-4 py-2 font-bold focus:outline-none focus:border-blue-500 text-center"
                            autoFocus
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={handleSaveNickname}
                                className="bg-[#58cc02] text-white px-4 py-1 rounded-lg font-bold text-sm shadow-sm hover:bg-[#46a302] transition-all"
                            >
                                {t('common.save') || "Save"}
                            </button>
                            <button
                                onClick={() => {
                                    setIsEditingNickname(false);
                                    setNicknameInput(nickname || '');
                                }}
                                className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg font-bold text-sm shadow-sm hover:bg-gray-300 transition-all"
                            >
                                {t('common.cancel') || "Cancel"}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                            {nickname || user?.displayName || user?.email?.split('@')[0] || 'Guest User'}
                        </h1>
                        {user && (
                            <button
                                onClick={() => {
                                    setIsEditingNickname(true);
                                    setNicknameInput(nickname || user?.displayName || user?.email?.split('@')[0] || '');
                                }}
                                className="text-blue-500 text-sm font-bold hover:underline"
                            >
                                {t('profile.editNickname') || "Edit Nickname"}
                            </button>
                        )}
                    </div>
                )}
                <p className="text-[var(--text-secondary)]">{t('profile.joined')}</p>

                {!user ? (
                    <button
                        onClick={() => setShowAuthModal(true)}
                        className="flex items-center gap-2 bg-[#58cc02] text-white border-b-4 border-[#46a302] active:border-b-0 active:translate-y-1 px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-[#46a302] transition-all uppercase tracking-widest"
                    >
                        <LogIn size={20} />
                        {t('profile.getStarted')}
                    </button>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={logout}
                            className="text-rose-500 font-bold uppercase tracking-widest text-sm hover:underline"
                        >
                            {t('profile.signOut')}
                        </button>
                    </div>
                )}
            </div>

            <div className="w-full max-w-lg space-y-6">
                {/* Stats */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">{t('profile.statistics')}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 border border-[var(--border-color)] p-3 rounded-xl">
                            <Flame className="text-orange-500" />
                            <div>
                                <div className="font-bold text-lg text-[var(--text-primary)]">{streak}</div>
                                <div className="text-xs text-gray-400 uppercase font-bold">{t('profile.dayStreak')}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border border-[var(--border-color)] p-3 rounded-xl">
                            <div className="font-bold text-yellow-500">XP</div>
                            <div>
                                <div className="font-bold text-lg text-[var(--text-primary)]">{xp}</div>
                                <div className="text-xs text-gray-400 uppercase font-bold">{t('profile.totalXP')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                {user && (
                    <div className="pt-8 border-t border-[var(--border-color)]">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                            {t('profile.dangerZone') || "Danger Zone"}
                        </h2>
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="flex items-center justify-center gap-2 w-full p-4 border-2 border-rose-500/20 text-rose-500 font-bold rounded-2xl hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all active:scale-95"
                        >
                            <Trash2 size={20} />
                            {t('profile.deleteAccount') || "Delete Account"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
