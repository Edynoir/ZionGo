import { useState, useEffect } from 'react';
import { Settings, Moon, Sun, Bell, BellOff, Type, Globe, Save, AlertCircle } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';
import clsx from 'clsx';

export const More = () => {
    const { theme, notifications, fontSize, language, updateSettings } = useUserStore();
    const { t } = useTranslation(language);

    // Local state for unsaved changes
    const [localTheme, setLocalTheme] = useState(theme);
    const [localNotifications, setLocalNotifications] = useState(notifications);
    const [localFontSize, setLocalFontSize] = useState(fontSize);
    const [localLanguage, setLocalLanguage] = useState(language);
    const [isDirty, setIsDirty] = useState(false);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    // Update local state when store changes
    useEffect(() => {
        setLocalTheme(theme);
        setLocalNotifications(notifications);
        setLocalFontSize(fontSize);
        setLocalLanguage(language);
    }, [theme, notifications, fontSize, language]);

    // Track if there are unsaved changes
    useEffect(() => {
        const hasChanges =
            localTheme !== theme ||
            localNotifications !== notifications ||
            localFontSize !== fontSize ||
            localLanguage !== language;
        setIsDirty(hasChanges);
    }, [localTheme, localNotifications, localFontSize, localLanguage, theme, notifications, fontSize, language]);

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

    const handleSave = () => {
        updateSettings({
            theme: localTheme,
            notifications: localNotifications,
            fontSize: localFontSize,
            language: localLanguage
        });
        setIsDirty(false);
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 3000);
    };

    const handleReset = () => {
        setLocalTheme(theme);
        setLocalNotifications(notifications);
        setLocalFontSize(fontSize);
        setLocalLanguage(language);
        setIsDirty(false);
    };

    return (
        <div className="flex flex-col items-center py-6 px-4 max-w-2xl mx-auto min-h-[calc(100vh-80px)]">
            {/* Header */}
            <div className="w-full mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Settings size={32} className="text-blue-500" />
                    <h1 className="text-3xl font-bold text-[var(--text-primary)]">{t('settings.title')}</h1>
                </div>
                <p className="text-[var(--text-secondary)]">{t('settings.subtitle')}</p>
            </div>

            {/* Unsaved Changes Warning */}
            {isDirty && (
                <div className="w-full mb-6 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                    <div className="flex-1">
                        <p className="font-bold text-orange-700 dark:text-orange-400">{t('settings.unsavedChanges')}</p>
                        <p className="text-sm text-orange-600 dark:text-orange-300">{t('settings.unsavedChangesDesc')}</p>
                    </div>
                </div>
            )}

            {/* Save Success Message */}
            {showSaveSuccess && (
                <div className="w-full mb-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3 animate-in fade-in">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p className="font-bold text-green-700 dark:text-green-400">{t('settings.saveSuccess')}</p>
                </div>
            )}

            {/* Settings Sections */}
            <div className="w-full space-y-4">
                {/* Dark Mode */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {localTheme === 'dark' ? <Moon size={24} className="text-blue-500" /> : <Sun size={24} className="text-yellow-500" />}
                            <div>
                                <h3 className="font-bold text-[var(--text-primary)]">{t('settings.darkMode')}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">{t('settings.darkModeDesc')}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setLocalTheme(localTheme === 'light' ? 'dark' : 'light')}
                            className={clsx(
                                "relative w-14 h-8 rounded-full transition-colors",
                                localTheme === 'dark' ? 'bg-blue-500' : 'bg-gray-300'
                            )}
                        >
                            <div className={clsx(
                                "absolute top-1 w-6 h-6 bg-white rounded-full transition-transform",
                                localTheme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                            )} />
                        </button>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {localNotifications ? <Bell size={24} className="text-green-500" /> : <BellOff size={24} className="text-gray-400" />}
                            <div>
                                <h3 className="font-bold text-[var(--text-primary)]">{t('settings.notifications')}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">{t('settings.notificationsDesc')}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setLocalNotifications(!localNotifications)}
                            className={clsx(
                                "relative w-14 h-8 rounded-full transition-colors",
                                localNotifications ? 'bg-green-500' : 'bg-gray-300'
                            )}
                        >
                            <div className={clsx(
                                "absolute top-1 w-6 h-6 bg-white rounded-full transition-transform",
                                localNotifications ? 'translate-x-7' : 'translate-x-1'
                            )} />
                        </button>
                    </div>
                </div>

                {/* Font Size */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Type size={24} className="text-purple-500" />
                        <div>
                            <h3 className="font-bold text-[var(--text-primary)]">{t('settings.fontSize')}</h3>
                            <p className="text-sm text-[var(--text-secondary)]">{t('settings.fontSizeDesc')}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {(['small', 'medium', 'large'] as const).map((size) => (
                            <button
                                key={size}
                                onClick={() => setLocalFontSize(size)}
                                className={clsx(
                                    "flex-1 py-3 rounded-xl font-bold capitalize transition-all border-2",
                                    localFontSize === size
                                        ? "bg-purple-500 text-white border-purple-500"
                                        : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-purple-300"
                                )}
                            >
                                {t(`settings.${size}` as any)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Language */}
                <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Globe size={24} className="text-orange-500" />
                        <div>
                            <h3 className="font-bold text-[var(--text-primary)]">{t('settings.language')}</h3>
                            <p className="text-sm text-[var(--text-secondary)]">{t('settings.languageDesc')}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setLocalLanguage('en')}
                            className={clsx(
                                "flex-1 py-3 rounded-xl font-bold transition-all border-2",
                                localLanguage === 'en'
                                    ? "bg-orange-500 text-white border-orange-500"
                                    : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-orange-300"
                            )}
                        >
                            {t('settings.english')}
                        </button>
                        <button
                            onClick={() => setLocalLanguage('mn')}
                            className={clsx(
                                "flex-1 py-3 rounded-xl font-bold transition-all border-2",
                                localLanguage === 'mn'
                                    ? "bg-orange-500 text-white border-orange-500"
                                    : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-orange-300"
                            )}
                        >
                            {t('settings.mongolian')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full mt-8 flex gap-4">
                <button
                    onClick={handleReset}
                    disabled={!isDirty}
                    className={clsx(
                        "flex-1 py-4 rounded-xl font-bold transition-all border-2",
                        isDirty
                            ? "bg-[var(--bg-card)] text-[var(--text-primary)] border-[var(--border-color)] hover:bg-gray-100 dark:hover:bg-gray-800"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700 cursor-not-allowed"
                    )}
                >
                    {t('settings.cancel')}
                </button>
                <button
                    onClick={handleSave}
                    disabled={!isDirty}
                    className={clsx(
                        "flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
                        isDirty
                            ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
                            : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                    )}
                >
                    <Save size={20} />
                    {t('settings.save')}
                </button>
            </div>
        </div>
    );
};
