import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Gem as GemIcon, RefreshCw, Home } from 'lucide-react';
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

    // Shuffle questions once per lesson load
    const shuffledQuestions = useMemo(() => {
        if (!questions.length) return [];
        // Add user-specific seeding if we had a seedable random, 
        // but for now simple shuffle ensures "per-user" variety.
        return [...questions].sort(() => Math.random() - 0.5);
    }, [questions]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [status, setStatus] = useState<'IDLE' | 'CORRECT' | 'WRONG'>('IDLE');
    const [isComplete, setIsComplete] = useState(false);

    if (!currentLevel || shuffledQuestions.length === 0) {
        return <div className="p-8 text-center text-gray-500">{t('common.loading')}</div>;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const progress = (currentQuestionIndex / shuffledQuestions.length) * 100;

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
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            // Next question
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setStatus('IDLE');
        } else {
            // Finish lesson - save progress with lesson ID
            if (lessonId) {
                completeLessonById(lessonId);
            }
            setIsComplete(true);
        }
    };

    if (isComplete) {
        const earnedXp = (shuffledQuestions.length * 10) + 10;
        const earnedGems = 5;

        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-body)] p-6 text-center text-[var(--text-primary)]">
                <div className="w-full max-w-md space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-green-500 uppercase tracking-tight">
                            {t('mastery.quizComplete')}
                        </h1>
                        <p className="text-[var(--text-secondary)] text-xl font-bold">
                            {t('lesson.completed')} {currentLevel.title}!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6 flex flex-col items-center gap-2 transform transition-all hover:scale-105">
                            <Star className="w-12 h-12 text-[#ffc800] fill-[#ffc800]" />
                            <span className="text-2xl font-black text-[#ffc800]">+{earnedXp}</span>
                            <span className="text-sm font-bold text-gray-400 uppercase">{t('lesson.totalXp')}</span>
                        </div>
                        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6 flex flex-col items-center gap-2 transform transition-all hover:scale-105">
                            <GemIcon className="w-12 h-12 text-sky-400 fill-sky-400" />
                            <span className="text-2xl font-black text-sky-400">+{earnedGems}</span>
                            <span className="text-sm font-bold text-gray-400 uppercase">{t('lesson.gems')}</span>
                        </div>
                    </div>

                    <div className="space-y-4 pt-8">
                        <button
                            onClick={() => navigate('/')}
                            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-black text-xl shadow-[0_4px_0_rgb(22,163,74)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            <Home size={24} /> {t('common.continue').toUpperCase()}
                        </button>
                        <button
                            onClick={() => {
                                setIsComplete(false);
                                setCurrentQuestionIndex(0);
                                setSelectedOption(null);
                                setStatus('IDLE');
                            }}
                            className="w-full py-4 text-gray-500 hover:text-[var(--text-primary)] font-bold text-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <RefreshCw size={20} /> {t('lesson.review')}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

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
