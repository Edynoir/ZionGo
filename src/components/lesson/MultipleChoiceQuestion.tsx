import clsx from 'clsx';
import type { Question } from '../../types/curriculum';

interface MultipleChoiceQuestionProps {
    question: Question;
    selectedOptionId: string | null;
    onSelectOption: (id: string) => void;
    status: 'IDLE' | 'CORRECT' | 'WRONG';
}

export const MultipleChoiceQuestion = ({ question, selectedOptionId, onSelectOption, status }: MultipleChoiceQuestionProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto mt-8 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8 text-center">
                {question.question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option) => {
                    const isSelected = selectedOptionId === option.id;

                    return (
                        <button
                            key={option.id}
                            onClick={() => status === 'IDLE' && onSelectOption(option.id)}
                            disabled={status !== 'IDLE'}
                            className={clsx(
                                "p-4 rounded-2xl border-2 border-b-4 text-lg font-medium transition-all text-left",
                                isSelected
                                    ? "bg-sky-100 border-sky-300 text-sky-500"
                                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50",
                                status === 'IDLE' && "active:border-b-2 active:translate-y-[2px]"
                            )}
                        >
                            {option.text}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
