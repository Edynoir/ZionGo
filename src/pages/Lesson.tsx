import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizHeader } from '../components/lesson/QuizHeader';
import { QuizFooter } from '../components/lesson/QuizFooter';
import { MultipleChoiceQuestion } from '../components/lesson/MultipleChoiceQuestion';
import { getUnits } from '../data/lessons';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';

export const Lesson = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const { language, loseHeart, gainXp, completeLessonById } = useUserStore();
    const { t } = useTranslation(language);
    const units = getUnits(language);

    // Find the lesson data
    const currentUnit = units.find(u => u.levels.some(l => l.id === lessonId));
    const currentLevel = currentUnit?.levels.find(l => l.id === lessonId);
    const questions = currentLevel?.questions || [];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [status, setStatus] = useState<'IDLE' | 'CORRECT' | 'WRONG'>('IDLE');

    if (!currentLevel || questions.length === 0) {
        return <div className="p-8 text-center text-gray-500">{t('common.loading')}</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / questions.length) * 100;

    const handleCheck = () => {
        if (!selectedOption) return;

        const isCorrect = currentQuestion.correctAnswer === selectedOption;

        if (isCorrect) {
            setStatus('CORRECT');
            gainXp(10);
        } else {
            setStatus('WRONG');
            loseHeart();
        }
    };

    const handleContinue = () => {
        if (currentQuestionIndex < questions.length - 1) {
            // Next question
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setStatus('IDLE');
        } else {
            // Finish lesson - save progress with lesson ID
            if (lessonId) {
                completeLessonById(lessonId);
            }
            navigate('/');
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-[var(--bg-body)] transition-colors">
            <QuizHeader progress={progress} title={currentLevel.title} />

            <main className="flex-1 overflow-y-auto pb-32">
                <MultipleChoiceQuestion
                    question={currentQuestion}
                    selectedOption={selectedOption}
                    onSelectOption={setSelectedOption}
                    status={status}
                />
            </main>

            <QuizFooter
                status={status}
                onCheck={handleCheck}
                onContinue={handleContinue}
                isCheckDisabled={!selectedOption}
                correctAnswer={currentQuestion.correctAnswer}
            />
        </div>
    );
};
