export type QuestionType = 'SELECT' | 'MATCH' | 'FILL_BLANK';

export interface Option {
    id: string;
    text: string;
    isCorrect: boolean;
    audio?: string;
    image?: string;
}

export interface Question {
    id: string;
    type: QuestionType;
    question: string;
    options: Option[];
    correctAnswerId?: string; // For fill_blank or simple matching
}

export interface Level {
    id: string;
    title: string;
    totalLessons: number;
    completedLessons: number;
    status: 'LOCKED' | 'ACTIVE' | 'COMPLETED';
    color: string; // e.g., "bg-green-500"
    questions: Question[];
}

export interface Unit {
    id: string;
    title: string;
    description: string;
    color: string; // Header color
    levels: Level[];
}
