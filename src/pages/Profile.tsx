import { useState, useEffect } from 'react';
import { User, Flame, LogIn, Trash2, Settings, Moon, Sun, Bell, BellOff, Type, Globe, Save, AlertCircle } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';
import type { TranslationKeys } from '../utils/i18n';
import { AuthModal } from '../components/auth/AuthModal';
import { AvatarSelector } from '../components/profile/AvatarSelector';
import { DeleteProfileModal } from '../components/profile/DeleteProfileModal';
import clsx from 'clsx';

export const Profile = () => {
    const { user, xp, streak, nickname, language, logout, updateNickname, theme, notifications, fontSize, updateSettings } = useUserStore();
    const { t } = useTranslation(language);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showAvatarSelector, setShowAvatarSelector] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isEditingNickname, setIsEditingNickname] = useState(false);
    const [nicknameInput, setNicknameInput] = useState(nickname || '');

    // Settings state
    const [localTheme, setLocalTheme] = useState(theme);
    const [localNotifications, setLocalNotifications] = useState(notifications);
    const [localFontSize, setLocalFontSize] = useState(fontSize);
    const [localLanguage, setLocalLanguage] = useState(language);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    const isDirty =
        localTheme !== theme ||
        localNotifications !== notifications ||
        localFontSize !== fontSize ||
        localLanguage !== language;

    // Update local state when store changes
    useEffect(() => {
        /* eslint-disable react-hooks/set-state-in-effect */
        setLocalTheme(theme);
        setLocalNotifications(notifications);
        setLocalFontSize(fontSize);
        setLocalLanguage(language);
        /* eslint-enable react-hooks/set-state-in-effect */
    }, [theme, notifications, fontSize, language]);

    // Warn before leaving with unsaved changes
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    const handleSaveSettings = () => {
        updateSettings({
            theme: localTheme,
            notifications: localNotifications,
            fontSize: localFontSize,
            language: localLanguage
        });
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 3000);
    };

    const handleResetSettings = () => {
        setLocalTheme(theme);
        setLocalNotifications(notifications);
        setLocalFontSize(fontSize);
        setLocalLanguage(language);
    };

    const handleSaveNickname = async () => {
        await updateNickname(nicknameInput);
        setIsEditingNickname(false);
    };

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

                {/* Settings Section */}
                <div className="pt-8 border-t border-[var(--border-color)]">
                    <div className="flex items-center gap-3 mb-6">
                        <Settings size={24} className="text-blue-500" />
                        <h2 className="text-xl font-bold text-[var(--text-primary)]">{t('settings.title')}</h2>
                    </div>

                    {/* Unsaved Changes Warning */}
                    {isDirty && (
                        <div className="mb-6 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-4 flex items-start gap-3">
                            <AlertCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                            <div className="flex-1">
                                <p className="font-bold text-orange-700 dark:text-orange-400">{t('settings.unsavedChanges')}</p>
                                <p className="text-sm text-orange-600 dark:text-orange-300">{t('settings.unsavedChangesDesc')}</p>
                            </div>
                        </div>
                    )}

                    {/* Save Success Message */}
                    {showSaveSuccess && (
                        <div className="mb-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3 animate-in fade-in">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="font-bold text-green-700 dark:text-green-400">{t('settings.saveSuccess')}</p>
                        </div>
                    )}

                    <div className="space-y-4">
                        {/* Dark Mode */}
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {localTheme === 'dark' ? <Moon size={20} className="text-blue-500" /> : <Sun size={20} className="text-yellow-500" />}
                                    <div>
                                        <h3 className="font-bold text-sm text-[var(--text-primary)]">{t('settings.darkMode')}</h3>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setLocalTheme(localTheme === 'light' ? 'dark' : 'light')}
                                    className={clsx(
                                        "relative w-12 h-6 rounded-full transition-colors",
                                        localTheme === 'dark' ? 'bg-blue-500' : 'bg-gray-300'
                                    )}
                                >
                                    <div className={clsx(
                                        "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                                        localTheme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                                    )} />
                                </button>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {localNotifications ? <Bell size={20} className="text-green-500" /> : <BellOff size={20} className="text-gray-400" />}
                                    <div>
                                        <h3 className="font-bold text-sm text-[var(--text-primary)]">{t('settings.notifications')}</h3>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setLocalNotifications(!localNotifications)}
                                    className={clsx(
                                        "relative w-12 h-6 rounded-full transition-colors",
                                        localNotifications ? 'bg-green-500' : 'bg-gray-300'
                                    )}
                                >
                                    <div className={clsx(
                                        "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                                        localNotifications ? 'translate-x-7' : 'translate-x-1'
                                    )} />
                                </button>
                            </div>
                        </div>

                        {/* Font Size */}
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <Type size={20} className="text-purple-500" />
                                <h3 className="font-bold text-sm text-[var(--text-primary)]">{t('settings.fontSize')}</h3>
                            </div>
                            <div className="flex gap-2">
                                {(['small', 'medium', 'large'] as const).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setLocalFontSize(size)}
                                        className={clsx(
                                            "flex-1 py-2 rounded-lg font-bold capitalize transition-all border-2 text-xs",
                                            localFontSize === size
                                                ? "bg-purple-500 text-white border-purple-500"
                                                : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)]"
                                        )}
                                    >
                                        {t(`settings.${size}` as keyof TranslationKeys)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Language */}
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <Globe size={20} className="text-orange-500" />
                                <h3 className="font-bold text-sm text-[var(--text-primary)]">{t('settings.language')}</h3>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setLocalLanguage('en')}
                                    className={clsx(
                                        "flex-1 py-2 rounded-lg font-bold transition-all border-2 text-xs",
                                        localLanguage === 'en'
                                            ? "bg-orange-500 text-white border-orange-500"
                                            : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)]"
                                    )}
                                >
                                    {t('settings.english')}
                                </button>
                                <button
                                    onClick={() => setLocalLanguage('mn')}
                                    className={clsx(
                                        "flex-1 py-2 rounded-lg font-bold transition-all border-2 text-xs",
                                        localLanguage === 'mn'
                                            ? "bg-orange-500 text-white border-orange-500"
                                            : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)]"
                                    )}
                                >
                                    {t('settings.mongolian')}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex gap-3">
                        <button
                            onClick={handleResetSettings}
                            disabled={!isDirty}
                            className={clsx(
                                "flex-1 py-3 rounded-xl font-bold transition-all border-2 text-sm",
                                isDirty
                                    ? "bg-[var(--bg-card)] text-[var(--text-primary)] border-[var(--border-color)]"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700 cursor-not-allowed"
                            )}
                        >
                            {t('settings.cancel')}
                        </button>
                        <button
                            onClick={handleSaveSettings}
                            disabled={!isDirty}
                            className={clsx(
                                "flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm",
                                isDirty
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                            )}
                        >
                            <Save size={18} />
                            {t('settings.save')}
                        </button>
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
