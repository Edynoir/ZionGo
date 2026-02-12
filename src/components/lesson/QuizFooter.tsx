import clsx from 'clsx';
import { Check, X } from 'lucide-react';

interface QuizFooterProps {
    status: 'IDLE' | 'CORRECT' | 'WRONG';
    onCheck: () => void;
    onContinue: () => void;
    isCheckDisabled: boolean;
}

export const QuizFooter = ({ status, onCheck, onContinue, isCheckDisabled }: QuizFooterProps) => {
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
                            <div className="text-green-600 font-bold text-2xl">Nicely done!</div>
                        </div>
                    )}
                    {status === 'WRONG' && (
                        <div className="flex items-center gap-3">
                            <div className="bg-rose-500 rounded-full p-2 text-white"><X size={32} strokeWidth={4} /></div>
                            <div className="text-rose-600 font-bold text-2xl">Correct answer: [Show answer logic here]</div>
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
                    {isIdle ? 'CHECK' : 'CONTINUE'}
                </button>
            </div>
        </div>
    );
};
