export interface Question {
    id: number;
    type: 'MULTIPLE_CHOICE' | 'TRUE_FALSE';
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface Level {
    id: string;
    title: string;
    totalQuestions: number;
    iconType: 'star' | 'book' | 'trophy';
    position: { top: string; left: string };
    status: 'LOCKED' | 'ACTIVE' | 'COMPLETED';
    questions: Question[];
    xpReward: number;
}

export interface Unit {
    id: number;
    title: string;
    description: string;
    color: string;
    levels: Level[];
}
