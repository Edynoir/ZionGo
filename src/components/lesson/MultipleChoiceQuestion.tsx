import clsx from 'clsx';
import type { Question } from '../../types/curriculum';

interface MultipleChoiceQuestionProps {
    question: Question;
    selectedOption: string | null;
    onSelectOption: (option: string) => void;
    status: 'IDLE' | 'CORRECT' | 'WRONG';
}

export const MultipleChoiceQuestion = ({ question, selectedOption, onSelectOption, status }: MultipleChoiceQuestionProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto mt-8 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
                {question.question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => {
                    const isSelected = selectedOption === option;

                    // Simple logic for ID: use index or option text
                    return (
                        <button
                            key={index}
                            onClick={() => status === 'IDLE' && onSelectOption(option)}
                            disabled={status !== 'IDLE'}
                            className={clsx(
                                "p-4 rounded-2xl border-2 border-b-4 text-lg font-medium transition-all text-left",
                                isSelected
                                    ? "bg-sky-100 border-sky-300 text-sky-500"
                                    : "bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-body)]",
                                status === 'IDLE' && "active:border-b-2 active:translate-y-[2px]"
                            )}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
