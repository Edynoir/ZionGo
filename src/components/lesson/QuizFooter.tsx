import { Check, X } from 'lucide-react';
import { useTranslation } from '../../utils/i18n';
import { useUserStore } from '../../store/useUserStore';
import clsx from 'clsx';

interface QuizFooterProps {
    status: 'IDLE' | 'CORRECT' | 'WRONG';
    onCheck: () => void;
    onContinue: () => void;
    isCheckDisabled: boolean;
    correctAnswer?: string;
}

export const QuizFooter = ({ status, onCheck, onContinue, isCheckDisabled, correctAnswer }: QuizFooterProps) => {
    const { language } = useUserStore();
    const { t } = useTranslation(language);
    const isIdle = status === 'IDLE';

    return (
        <div className={clsx(
            "fixed bottom-0 left-0 right-0 p-4 pb-8 md:pb-4 border-t-2 z-50",
            status === 'CORRECT' ? "bg-green-100 border-green-200" :
                status === 'WRONG' ? "bg-rose-100 border-rose-200" : "bg-white border-gray-200"
        )}>
            <div className="max-w-5xl mx-auto flex items-center justify-between">

                {/* Feedback Text */}
                <div className="flex items-center gap-4">
                    {status === 'CORRECT' && (
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500 rounded-full p-2 text-white"><Check size={32} strokeWidth={4} /></div>
                            <div className="text-green-600 font-bold text-2xl">{t('common.correct')}</div>
                        </div>
                    )}
                    {status === 'WRONG' && (
                        <div className="flex items-center gap-3">
                            <div className="bg-rose-500 rounded-full p-2 text-white"><X size={32} strokeWidth={4} /></div>
                            <div>
                                <div className="text-rose-600 font-bold text-2xl">{t('common.incorrect')}</div>
                                <div className="text-rose-500 font-bold text-lg">{t('common.correctAnswer')}: {correctAnswer}</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <button
                    onClick={isIdle ? onCheck : onContinue}
                    disabled={isIdle && isCheckDisabled}
                    className={clsx(
                        "w-full md:w-auto min-w-[150px]",
                        isIdle ? (isCheckDisabled ? "btn-secondary text-gray-300 border-gray-200 bg-gray-100" : "btn-primary") :
                            status === 'CORRECT' ? "btn-primary bg-[#58cc02] border-[#46a302] text-white" :
                                "btn-super bg-rose-500 border-rose-600 text-white" // Error state button style
                    )}
                >
                    {isIdle ? t('common.check') : t('common.continue')}
                </button>
            </div>
        </div>
    );
};
