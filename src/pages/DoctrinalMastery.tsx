import { useState, useMemo, useCallback } from 'react';
import { Book, ExternalLink, RefreshCw, Brain, GraduationCap, ChevronLeft, ChevronRight, Shuffle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { getMasteryData, type MasteryScripture } from '../data/doctrinalMastery';
import clsx from 'clsx';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';

type Mode = 'STUDY' | 'FLASHCARDS' | 'QUIZ';
type Volume = 'ALL' | 'Old Testament' | 'New Testament' | 'Book of Mormon' | 'Doctrine and Covenants';
type QuizType = 'IDENTIFY_REFERENCE' | 'IDENTIFY_TEXT' | 'VOLUME_MATCH';

export const DoctrinalMastery = () => {
    const [mode, setMode] = useState<Mode>('STUDY');
    const [selectedVolume, setSelectedVolume] = useState<Volume>('ALL');
    const { gainXp, language } = useUserStore();
    const { t } = useTranslation(language);

    // Data Filtering
    const filteredData = useMemo(() => {
        const data = getMasteryData(language);
        if (selectedVolume === 'ALL') return data;
        return data.filter(item => item.volume === selectedVolume);
    }, [selectedVolume, language]);

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
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const { language } = useUserStore();
    const { t } = useTranslation(language);

    const toggleExpand = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {data.map((item) => (
                <div
                    key={item.id}
                    className={clsx(
                        "group bg-[var(--bg-card)] border-2 rounded-xl transition-all",
                        expandedId === item.id ? "border-green-500 shadow-lg shadow-green-500/10" : "border-[var(--border-color)] hover:border-blue-500 hover:-translate-y-1"
                    )}
                >
                    {/* Card Header — clickable to expand */}
                    <div
                        className="p-5 cursor-pointer"
                        onClick={() => toggleExpand(item.id)}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold uppercase text-gray-400">{item.volume}</span>
                            <div className="flex items-center gap-2">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                    title={t('mastery.openExternal')}
                                >
                                    <ExternalLink size={16} />
                                </a>
                                {expandedId === item.id ? (
                                    <ChevronUp size={16} className="text-green-500" />
                                ) : (
                                    <ChevronDown size={16} className="text-gray-400" />
                                )}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.reference}</h3>
                        {expandedId !== item.id && (
                            <p className="text-[var(--text-secondary)] text-sm line-clamp-3">"{item.text}"</p>
                        )}
                    </div>

                    {/* Expanded Reader View */}
                    {expandedId === item.id && (
                        <div className="px-5 pb-5 border-t border-[var(--border-color)]">
                            <div className="pt-4 flex items-start gap-3">
                                <BookOpen size={20} className="text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-bold text-green-500 uppercase tracking-widest mb-3">{t('mastery.fullScripture')}</p>
                                    <p className="text-[var(--text-primary)] text-base leading-relaxed font-serif italic">
                                        "{item.text}"
                                    </p>
                                    <p className="mt-3 text-xs text-gray-400 font-bold">— {item.reference}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const FlashcardsMode = ({ data }: { data: MasteryScripture[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [shuffledData, setShuffledData] = useState<MasteryScripture[]>(data);
    const { language } = useUserStore();
    const { t } = useTranslation(language);

    // Reset when data changes
    useMemo(() => {
        setShuffledData([...data]);
        setCurrentIndex(0);
        setIsFlipped(false);
    }, [data]);

    const handleShuffle = useCallback(() => {
        const shuffled = [...shuffledData].sort(() => Math.random() - 0.5);
        setShuffledData(shuffled);
        setCurrentIndex(0);
        setIsFlipped(false);
    }, [shuffledData]);

    if (shuffledData.length === 0) return <div className="text-center p-8">{t('mastery.noFlashcards')}</div>;

    const currentCard = shuffledData[currentIndex];

    const nextCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % shuffledData.length);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + shuffledData.length) % shuffledData.length);
    };

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 flex items-center gap-4">
                <span className="text-sm font-bold text-gray-500">
                    {t('mastery.cardCount')} {currentIndex + 1} {t('mastery.of')} {shuffledData.length}
                </span>
                <button
                    onClick={handleShuffle}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-sm font-bold text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-all"
                    title={t('mastery.shuffle')}
                >
                    <Shuffle size={14} /> {t('mastery.shuffle')}
                </button>
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
                        <span className="mt-4 text-xs font-bold text-gray-400 uppercase">{currentCard.volume}</span>
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

// --- Helper: pick a random quiz type ---
const pickQuizType = (): QuizType => {
    const types: QuizType[] = ['IDENTIFY_REFERENCE', 'IDENTIFY_TEXT', 'VOLUME_MATCH'];
    return types[Math.floor(Math.random() * types.length)];
};

const QuizMode = ({ data, onComplete }: { data: MasteryScripture[], onComplete: () => void }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { language } = useUserStore();
    const { t } = useTranslation(language);

    // Pre-generate quiz types for all 10 questions
    const quizTypes = useMemo(() => {
        return Array.from({ length: 10 }, () => pickQuizType());
    }, []);

    if (data.length < 4) return <div className="text-center p-8">{t('mastery.notEnoughQuiz')}</div>;

    const question = data[currentQuestion];
    const currentType = quizTypes[currentQuestion];

    // Build options based on quiz type
    const options = useMemo(() => {
        if (!question) return [];

        if (currentType === 'IDENTIFY_REFERENCE') {
            // Given text → pick the correct reference
            const incorrect = data
                .filter(item => item.id !== question.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            return [...incorrect.map(i => ({ label: i.reference, value: i.reference })), { label: question.reference, value: question.reference }].sort(() => 0.5 - Math.random());
        }

        if (currentType === 'IDENTIFY_TEXT') {
            // Given reference → pick the correct text
            const incorrect = data
                .filter(item => item.id !== question.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            return [
                ...incorrect.map(i => ({ label: `"${i.text.length > 80 ? i.text.slice(0, 80) + '…' : i.text}"`, value: i.text })),
                { label: `"${question.text.length > 80 ? question.text.slice(0, 80) + '…' : question.text}"`, value: question.text }
            ].sort(() => 0.5 - Math.random());
        }

        // VOLUME_MATCH: Given reference → pick the correct volume
        const allVolumes = ['Old Testament', 'New Testament', 'Book of Mormon', 'Doctrine and Covenants'];
        const incorrectVolumes = allVolumes.filter(v => v !== question.volume).sort(() => 0.5 - Math.random()).slice(0, 3);
        return [...incorrectVolumes.map(v => ({ label: v, value: v })), { label: question.volume, value: question.volume }].sort(() => 0.5 - Math.random());
    }, [question, data, currentType]);

    const correctValue = useMemo(() => {
        if (currentType === 'IDENTIFY_REFERENCE') return question?.reference ?? '';
        if (currentType === 'IDENTIFY_TEXT') return question?.text ?? '';
        return question?.volume ?? '';
    }, [question, currentType]);

    const handleAnswer = (value: string) => {
        if (selectedAnswer) return;
        setSelectedAnswer(value);

        if (value === correctValue) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestion < Math.min(data.length - 1, 9)) {
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

    // Question prompt text depends on type
    const promptText = currentType === 'IDENTIFY_REFERENCE'
        ? t('mastery.identifyReference')
        : currentType === 'IDENTIFY_TEXT'
            ? t('mastery.selectCorrectText')
            : t('mastery.whichVolume');

    // What to display in the question card
    const questionDisplay = currentType === 'IDENTIFY_REFERENCE'
        ? `"${question.text}"`
        : question.reference;

    return (
        <div className="max-w-2xl mx-auto py-8">
            <div className="mb-6 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-500">{t('mastery.question')} {currentQuestion + 1}/10</span>
                <span className="text-sm font-bold text-green-500">{t('mastery.score')}: {score}</span>
            </div>

            <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl p-6 mb-6">
                <h3 className="text-sm font-bold text-orange-500 uppercase mb-4">{promptText}</h3>
                <p className={clsx("font-medium", currentType === 'IDENTIFY_REFERENCE' ? "text-xl" : "text-2xl")}>{questionDisplay}</p>
            </div>

            <div className="grid gap-3">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleAnswer(option.value)}
                        disabled={!!selectedAnswer}
                        className={clsx(
                            "p-4 rounded-xl font-bold text-left transition-all border-2",
                            selectedAnswer === null && "bg-[var(--bg-card)] border-[var(--border-color)] hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20",
                            selectedAnswer === option.value && option.value === correctValue && "bg-green-100 dark:bg-green-900/30 border-green-500",
                            selectedAnswer === option.value && option.value !== correctValue && "bg-red-100 dark:bg-red-900/30 border-red-500",
                            selectedAnswer && option.value === correctValue && "bg-green-100 dark:bg-green-900/30 border-green-500",
                            selectedAnswer && selectedAnswer !== option.value && option.value !== correctValue && "opacity-50"
                        )}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
