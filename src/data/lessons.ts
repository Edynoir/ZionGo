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
    position: { top: string; left: string }; // Keep for visual path layout
    status: 'LOCKED' | 'ACTIVE' | 'COMPLETED';
    questions: Question[];
    xpReward: number;
}

export interface Unit {
    id: number;
    title: string;
    description: string;
    color: string; // Tailwinc color class prefix e.g. 'bg-green-500'
    levels: Level[];
}

export const units: Unit[] = [
    {
        id: 1,
        title: "Unit 1: The Restoration",
        description: "Learn about Joseph Smith and the First Vision.",
        color: "bg-[#58cc02]",
        levels: [
            {
                id: "restoration-1",
                title: "Joseph Smith's Prayer",
                totalQuestions: 3,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "ACTIVE", // First one is active by default
                xpReward: 10,
                questions: [
                    {
                        id: 101,
                        type: "MULTIPLE_CHOICE",
                        question: "In completed year did Joseph Smith pray in the Sacred Grove?",
                        options: ["1820", "1830", "1847", "1823"],
                        correctAnswer: "1820"
                    },
                    {
                        id: 102,
                        type: "TRUE_FALSE",
                        question: "Joseph Smith saw God the Father and Jesus Christ.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 103,
                        type: "MULTIPLE_CHOICE",
                        question: "What scripture prompted Joseph to pray?",
                        options: ["James 1:5", "John 3:16", "Moroni 10:3", "Alma 32"],
                        correctAnswer: "James 1:5"
                    }
                ]
            },
            {
                id: "restoration-2",
                title: "The Book of Mormon",
                totalQuestions: 4,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 201,
                        type: "MULTIPLE_CHOICE",
                        question: "Who buried the golden plates?",
                        options: ["Moroni", "Mormon", "Nephi", "Alma"],
                        correctAnswer: "Moroni"
                    },
                    {
                        id: 202,
                        type: "MULTIPLE_CHOICE",
                        question: "How long did it take to translate the majority of the Book of Mormon?",
                        options: ["~65 days", "1 year", "3 years", "6 months"],
                        correctAnswer: "~65 days"
                    },
                    {
                        id: 203,
                        type: "TRUE_FALSE",
                        question: "The Book of Mormon is another testament of Jesus Christ.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 204,
                        type: "MULTIPLE_CHOICE",
                        question: "Who was the main scribe for Joseph Smith?",
                        options: ["Oliver Cowdery", "Martin Harris", "Emma Smith", "Hyrum Smith"],
                        correctAnswer: "Oliver Cowdery"
                    }
                ]
            },
            {
                id: "restoration-3",
                title: "Priesthood Restoration",
                totalQuestions: 3,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 301,
                        type: "MULTIPLE_CHOICE",
                        question: "Who restored the Aaronic Priesthood?",
                        options: ["John the Baptist", "Peter, James, and John", "Elijah", "Moses"],
                        correctAnswer: "John the Baptist"
                    },
                    {
                        id: 302,
                        type: "MULTIPLE_CHOICE",
                        question: "Who restored the Melchizedek Priesthood?",
                        options: ["Peter, James, and John", "John the Baptist", "Moroni", "Adam"],
                        correctAnswer: "Peter, James, and John"
                    },
                    {
                        id: 303,
                        type: "TRUE_FALSE",
                        question: "The Priesthood is the authority to act in God's name.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Unit 2: Plan of Salvation",
        description: "Where we came from, why we are here, and where we are going.",
        color: "bg-[#ce82ff]",
        levels: [
            {
                id: "plan-1",
                title: "Pre-Earth Life",
                totalQuestions: 3,
                iconType: "star",
                position: { top: "50px", left: "55%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 401,
                        type: "TRUE_FALSE",
                        question: "We lived with God before we were born.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 402,
                        type: "MULTIPLE_CHOICE",
                        question: "What did we have in the pre-existence?",
                        options: ["Spirit Bodies", "Physical Bodies", "Resurrected Bodies", "No Bodies"],
                        correctAnswer: "Spirit Bodies"
                    },
                    {
                        id: 403,
                        type: "MULTIPLE_CHOICE",
                        question: "Who presented a plan to save all mankind by taking away agency?",
                        options: ["Lucifer", "Jehovah", "Michael", "Gabriel"],
                        correctAnswer: "Lucifer"
                    }
                ]
            },
            {
                id: "plan-2",
                title: "The Fall",
                totalQuestions: 3,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 501,
                        type: "MULTIPLE_CHOICE",
                        question: "Who were the first people on earth?",
                        options: ["Adam and Eve", "Cain and Abel", "Abraham and Sarah", "Noah and Joan"],
                        correctAnswer: "Adam and Eve"
                    },
                    {
                        id: 502,
                        type: "TRUE_FALSE",
                        question: "The Fall was a necessary part of God's plan.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 503,
                        type: "MULTIPLE_CHOICE",
                        question: "Where did Adam and Eve live before the Fall?",
                        options: ["Garden of Eden", "Jerusalem", "Zion", "Heaven"],
                        correctAnswer: "Garden of Eden"
                    }
                ]
            }
        ]
    }
];
