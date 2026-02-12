import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizHeader } from '../components/lesson/QuizHeader';
import { QuizFooter } from '../components/lesson/QuizFooter';
import { MultipleChoiceQuestion } from '../components/lesson/MultipleChoiceQuestion';
import { mockUnits } from '../data/mockData';
import { useUserStore } from '../store/useUserStore';

export const Lesson = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const { loseHeart, gainXp, completeLesson } = useUserStore();

    // Find the lesson data (Mock logic: just find any level with this ID for now)
    // In real app, we'd query by ID properly
    const currentUnit = mockUnits.find(u => u.levels.some(l => l.id === lessonId));
    const currentLevel = currentUnit?.levels.find(l => l.id === lessonId);
    const questions = currentLevel?.questions || [];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [status, setStatus] = useState<'IDLE' | 'CORRECT' | 'WRONG'>('IDLE');

    if (!currentLevel || questions.length === 0) {
        return <div className="p-8 text-center text-gray-500">Lesson not found or empty.</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / questions.length) * 100;

    const handleCheck = () => {
        if (!selectedOptionId) return;

        const isCorrect = currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect;

        if (isCorrect) {
            setStatus('CORRECT');
            gainXp(10); // Mock XP gain
        } else {
            setStatus('WRONG');
            loseHeart();
        }
    };

    const handleContinue = () => {
        if (currentQuestionIndex < questions.length - 1) {
            // Next question
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOptionId(null);
            setStatus('IDLE');
        } else {
            // Finish lesson
            completeLesson();
            navigate('/');
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-[var(--bg-body)] transition-colors">
            <QuizHeader progress={progress} title={currentLevel.title} />

            <main className="flex-1 overflow-y-auto pb-32">
                <MultipleChoiceQuestion
                    question={currentQuestion}
                    selectedOptionId={selectedOptionId}
                    onSelectOption={setSelectedOptionId}
                    status={status}
                />
            </main>

            <QuizFooter
                status={status}
                onCheck={handleCheck}
                onContinue={handleContinue}
                isCheckDisabled={!selectedOptionId}
            />
        </div>
    );
};
