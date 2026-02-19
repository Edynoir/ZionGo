import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import { useUserStore } from '../../store/useUserStore';
import { useTranslation } from '../../utils/i18n';

interface DeleteProfileModalProps {
    onClose: () => void;
}

export const DeleteProfileModal = ({ onClose }: DeleteProfileModalProps) => {
    const { deleteProfile, language } = useUserStore();
    const { t } = useTranslation(language);
    const [step, setStep] = useState(1);
    const [confirmText, setConfirmText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (confirmText !== 'DELETE') return;
        setLoading(true);
        try {
            await deleteProfile();
        } catch (error) {
            setLoading(false);
            onClose();
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />
                <motion.div
                    className="relative bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                >
                    <div className="p-6">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-500">
                                <AlertTriangle size={32} />
                            </div>

                            {step === 1 ? (
                                <>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                        {t('profile.deleteTitle') || "Delete Profile?"}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                        {t('profile.deleteWarning') || "This will permanently delete ALL your progress, including XP, streaks, and hearts. This action cannot be undone."}
                                    </p>
                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-2xl shadow-lg shadow-rose-500/30 transition-all active:scale-95"
                                    >
                                        {t('common.continue') || "Continue"}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                        {t('profile.finalConfirm') || "Final Confirmation"}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        {t('profile.deleteInstructions') || "To confirm, please type \"DELETE\" in the box below:"}
                                    </p>
                                    <input
                                        type="text"
                                        value={confirmText}
                                        onChange={(e) => setConfirmText(e.target.value)}
                                        placeholder="DELETE"
                                        className="w-full bg-transparent border-2 border-[var(--border-color)] rounded-xl px-4 py-3 text-center font-bold text-rose-500 focus:outline-none focus:border-rose-500 uppercase"
                                        autoFocus
                                    />
                                    <button
                                        disabled={confirmText !== 'DELETE' || loading}
                                        onClick={handleDelete}
                                        className="w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-2xl shadow-lg shadow-rose-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        <Trash2 size={18} />
                                        {loading ? (t('common.loading') || "Deleting...") : (t('profile.confirmDelete') || "Delete Permanently")}
                                    </button>
                                </>
                            )}

                            <button
                                onClick={onClose}
                                className="w-full text-gray-400 font-bold text-sm py-2 hover:text-[var(--text-primary)] transition-colors"
                            >
                                {t('common.cancel') || "Nevermind, I'll stay"}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
