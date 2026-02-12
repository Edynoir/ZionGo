import type { Unit } from '../types/curriculum';

export const mockUnits: Unit[] = [
    {
        id: 'u1',
        title: 'Unit 1',
        description: 'Intro to LDS Beliefs & Scripture',
        color: 'bg-[#58cc02]', // Green
        levels: [
            {
                id: 'l1',
                title: 'The Restoration',
                totalLessons: 3,
                completedLessons: 1,
                status: 'ACTIVE',
                color: 'bg-[#58cc02]',
                questions: [
                    {
                        id: 'q1',
                        type: 'SELECT',
                        question: 'Who was the first prophet of the Restoration?',
                        options: [
                            { id: 'o1', text: 'Joseph Smith', isCorrect: true },
                            { id: 'o2', text: 'Brigham Young', isCorrect: false },
                            { id: 'o3', text: 'Thomas S. Monson', isCorrect: false },
                            { id: 'o4', text: 'Mosiah', isCorrect: false },
                        ],
                    },
                ],
            },
            {
                id: 'l2',
                title: 'First Vision',
                totalLessons: 4,
                completedLessons: 0,
                status: 'LOCKED',
                color: 'bg-[#58cc02]',
                questions: [],
            },
            {
                id: 'l3',
                title: 'Book of Mormon',
                totalLessons: 5,
                completedLessons: 0,
                status: 'LOCKED',
                color: 'bg-[#58cc02]',
                questions: [],
            },
        ],
    },
    {
        id: 'u2',
        title: 'Unit 2',
        description: 'Plan of Salvation',
        color: 'bg-[#ce82ff]', // Purple
        levels: [
            {
                id: 'l4',
                title: 'Pre-Earth Life',
                totalLessons: 3,
                completedLessons: 0,
                status: 'LOCKED',
                color: 'bg-[#ce82ff]',
                questions: [],
            },
        ],
    },
];
