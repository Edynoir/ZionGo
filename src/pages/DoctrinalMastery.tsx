import { useState, useMemo } from 'react';
import { Book, ExternalLink, RefreshCw, Brain, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { masteryData, type MasteryScripture } from '../data/doctrinalMastery';
import clsx from 'clsx';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';

type Mode = 'STUDY' | 'FLASHCARDS' | 'QUIZ';
type Volume = 'ALL' | 'Old Testament' | 'New Testament' | 'Book of Mormon' | 'Doctrine and Covenants';

export const DoctrinalMastery = () => {
    const [mode, setMode] = useState<Mode>('STUDY');
    const [selectedVolume, setSelectedVolume] = useState<Volume>('ALL');
    const { gainXp, language } = useUserStore();
    const { t } = useTranslation(language);

    // Data Filtering
    const filteredData = useMemo(() => {
        if (selectedVolume === 'ALL') return masteryData;
        return masteryData.filter(item => item.volume === selectedVolume);
    }, [selectedVolume]);

    return (
        <div className="flex flex-col items-center py-6 px-4 max-w-4xl mx-auto min-h-[calc(100vh-80px)]">

            {/* Header Controls */}
            <div className="w-full space-y-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-bold text-[var(--text-primary)]">{t('mastery.title')}</h1>

                    {/* Volume Filter */}
                    <select
                        value={selectedVolume}
                        onChange={(e) => setSelectedVolume(e.target.value as Volume)}
                        className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl px-4 py-2 font-bold focus:outline-none focus:border-blue-500"
                    >
                        <option value="ALL">{t('mastery.allVolumes')}</option>
                        <option value="Old Testament">{t('mastery.oldTestament')}</option>
                        <option value="New Testament">{t('mastery.newTestament')}</option>
                        <option value="Book of Mormon">{t('mastery.bookOfMormon')}</option>
                        <option value="Doctrine and Covenants">{t('mastery.doctrineCovenants')}</option>
                    </select>
                </div>

                {/* Mode Switcher */}
                <div className="flex p-1 bg-[var(--border-color)] rounded-xl">
                    <button
                        onClick={() => setMode('STUDY')}
                        className={clsx(
                            "flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2",
                            mode === 'STUDY' ? "bg-[var(--bg-card)] shadow-sm text-green-500" : "text-gray-500 hover:text-[var(--text-primary)]"
                        )}
                    >
                        <Book size={20} /> <span className="hidden sm:inline">{t('mastery.study')}</span>
                    </button>
                    <button
                        onClick={() => setMode('FLASHCARDS')}
                        className={clsx(
                            "flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2",
                            mode === 'FLASHCARDS' ? "bg-[var(--bg-card)] shadow-sm text-blue-500" : "text-gray-500 hover:text-[var(--text-primary)]"
                        )}
                    >
                        <Brain size={20} /> <span className="hidden sm:inline">{t('mastery.flashcards')}</span>
                    </button>
                    <button
                        onClick={() => setMode('QUIZ')}
                        className={clsx(
                            "flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2",
                            mode === 'QUIZ' ? "bg-[var(--bg-card)] shadow-sm text-orange-500" : "text-gray-500 hover:text-[var(--text-primary)]"
                        )}
                    >
                        <GraduationCap size={20} /> <span className="hidden sm:inline">{t('mastery.quiz')}</span>
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="w-full flex-1">
                {mode === 'STUDY' && <StudyMode data={filteredData} />}
                {mode === 'FLASHCARDS' && <FlashcardsMode data={filteredData} />}
                {mode === 'QUIZ' && <QuizMode data={filteredData} onComplete={() => gainXp(10)} />}
            </div>
        </div>
    );
};

// --- Sub-Components ---

const StudyMode = ({ data }: { data: MasteryScripture[] }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {data.map((item) => (
                <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-5 hover:border-blue-500 transition-all hover:-translate-y-1"
                >
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold uppercase text-gray-400">{item.volume}</span>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.reference}</h3>
                    <p className="text-[var(--text-secondary)] text-sm line-clamp-3">"{item.text}"</p>
                </a>
            ))}
        </div>
    );
};

const FlashcardsMode = ({ data }: { data: MasteryScripture[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const { language } = useUserStore();
    const { t } = useTranslation(language);

    if (data.length === 0) return <div className="text-center p-8">{t('mastery.noFlashcards')}</div>;

    const currentCard = data[currentIndex];

    const nextCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 text-center text-sm font-bold text-gray-500">
                {t('mastery.cardCount')} {currentIndex + 1} {t('mastery.of')} {data.length}
            </div>

            <div
                className="relative w-full max-w-lg aspect-[3/2] cursor-pointer perspective-1000"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={clsx(
                    "w-full h-full transition-transform duration-500 transform-style-3d relative",
                    isFlipped && "rotate-y-180"
                )}>
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-lg">
                        <span className="text-sm font-bold text-blue-500 uppercase mb-4 tracking-widest">{t('mastery.reference')}</span>
                        <h2 className="text-3xl font-bold">{currentCard.reference}</h2>
                        <p className="mt-4 text-gray-400 text-sm">{t('mastery.clickToFlip')}</p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden bg-[var(--bg-card)] border-2 border-blue-500 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-lg rotate-y-180">
                        <span className="text-sm font-bold text-green-500 uppercase mb-4 tracking-widest">{t('mastery.scripture')}</span>
                        <p className="text-xl font-medium">"{currentCard.text}"</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-8">
                <button onClick={prevCard} className="p-3 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-color)] hover:bg-gray-100 dark:hover:bg-gray-800">
                    <ChevronLeft />
                </button>
                <button onClick={() => setIsFlipped(!isFlipped)} className="px-6 py-3 rounded-xl bg-blue-500 text-white font-bold shadow-lg hover:bg-blue-600">
                    {isFlipped ? t('mastery.showFront') : t('mastery.showBack')}
                </button>
                <button onClick={nextCard} className="p-3 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-color)] hover:bg-gray-100 dark:hover:bg-gray-800">
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

const QuizMode = ({ data, onComplete }: { data: MasteryScripture[], onComplete: () => void }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { language } = useUserStore();
    const { t } = useTranslation(language);

    if (data.length < 4) return <div className="text-center p-8">{t('mastery.notEnoughQuiz')}</div>;

    // Randomize options for the current question
    const question = data[currentQuestion];
    const options = useMemo(() => {
        if (!question) return [];
        // Get 3 incorrect random scriptures + correct one
        const incorrect = data
            .filter(item => item.id !== question.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        return [...incorrect, question].sort(() => 0.5 - Math.random());
    }, [question, data]);

    const handleAnswer = (reference: string) => {
        if (selectedAnswer) return; // Prevent double clicks
        setSelectedAnswer(reference);

        if (reference === question.reference) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestion < Math.min(data.length - 1, 9)) { // Limit to 10 questions per round
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
                onComplete();
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
    };

    if (showResult) {
        const total = Math.min(data.length, 10);
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-8 rounded-3xl shadow-2xl max-w-md">
                    <h2 className="text-3xl font-bold mb-4">{t('mastery.quizComplete')}</h2>
                    <div className="text-6xl font-bold mb-4">{score}/{total}</div>
                    <p className="text-xl mb-6">{t('mastery.score')} {Math.round((score / total) * 100)}%!</p>
                    <button
                        onClick={resetQuiz}
                        className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
                    >
                        <RefreshCw size={20} /> {t('mastery.playAgain')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto py-8">
            <div className="mb-6 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-500">{t('mastery.question')} {currentQuestion + 1}/10</span>
                <span className="text-sm font-bold text-green-500">{t('mastery.score')}: {score}</span>
            </div>

            <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6 mb-6">
                <h3 className="text-sm font-bold text-orange-500 uppercase mb-4">{t('mastery.identifyReference')}</h3>
                <p className="text-xl font-medium">"{question.text}"</p>
            </div>

            <div className="grid gap-3">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => handleAnswer(option.reference)}
                        disabled={!!selectedAnswer}
                        className={clsx(
                            "p-4 rounded-xl font-bold text-left transition-all border-2",
                            selectedAnswer === null && "bg-[var(--bg-card)] border-[var(--border-color)] hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20",
                            selectedAnswer === option.reference && option.reference === question.reference && "bg-green-100 dark:bg-green-900/30 border-green-500",
                            selectedAnswer === option.reference && option.reference !== question.reference && "bg-red-100 dark:bg-red-900/30 border-red-500",
                            selectedAnswer && option.reference === question.reference && "bg-green-100 dark:bg-green-900/30 border-green-500",
                            selectedAnswer && selectedAnswer !== option.reference && option.reference !== question.reference && "opacity-50"
                        )}
                    >
                        {option.reference}
                    </button>
                ))}
            </div>
        </div>
    );
};
