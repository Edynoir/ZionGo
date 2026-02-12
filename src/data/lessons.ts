
import type { Language } from '../utils/i18n';

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
    color: string; // Tailwind color class prefix e.g. 'bg-green-500'
    levels: Level[];
}

const englishUnits: Unit[] = [
    {
        id: 1,
        title: "Unit 1: The Restoration",
        description: "Learn about Joseph Smith and the First Vision.",
        color: "bg-[#58cc02]",
        levels: [
            {
                id: "restoration-1",
                title: "Joseph Smith's Prayer",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "ACTIVE",
                xpReward: 10,
                questions: [
                    {
                        id: 101,
                        type: "MULTIPLE_CHOICE",
                        question: "In what year did Joseph Smith pray in the Sacred Grove?",
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
                    },
                    {
                        id: 104,
                        type: "MULTIPLE_CHOICE",
                        question: "How old was Joseph Smith during the First Vision?",
                        options: ["14 years old", "17 years old", "12 years old", "21 years old"],
                        correctAnswer: "14 years old"
                    },
                    {
                        id: 105,
                        type: "MULTIPLE_CHOICE",
                        question: "In which U.S. state did the First Vision occur?",
                        options: ["New York", "Ohio", "Missouri", "Illinois"],
                        correctAnswer: "New York"
                    }
                ]
            },
            {
                id: "restoration-2",
                title: "The Book of Mormon",
                totalQuestions: 5,
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
                    },
                    {
                        id: 205,
                        type: "MULTIPLE_CHOICE",
                        question: "What year was the Book of Mormon first published?",
                        options: ["1830", "1820", "1835", "1840"],
                        correctAnswer: "1830"
                    }
                ]
            },
            {
                id: "restoration-3",
                title: "Priesthood Restoration",
                totalQuestions: 5,
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
                    },
                    {
                        id: 304,
                        type: "MULTIPLE_CHOICE",
                        question: "Where were Joseph Smith and Oliver Cowdery when the Aaronic Priesthood was restored?",
                        options: ["Near the Susquehanna River", "In the Sacred Grove", "At the Kirtland Temple", "In Nauvoo"],
                        correctAnswer: "Near the Susquehanna River"
                    },
                    {
                        id: 305,
                        type: "MULTIPLE_CHOICE",
                        question: "What is the first office in the Aaronic Priesthood?",
                        options: ["Deacon", "Teacher", "Priest", "Elder"],
                        correctAnswer: "Deacon"
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
                totalQuestions: 5,
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
                    },
                    {
                        id: 404,
                        type: "MULTIPLE_CHOICE",
                        question: "Who was chosen to be our Savior in the pre-mortal life?",
                        options: ["Jesus Christ", "Adam", "Moses", "Abraham"],
                        correctAnswer: "Jesus Christ"
                    },
                    {
                        id: 405,
                        type: "TRUE_FALSE",
                        question: "We chose to follow Heavenly Father's plan in our pre-earth life.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "plan-2",
                title: "The Fall",
                totalQuestions: 5,
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
                    },
                    {
                        id: 504,
                        type: "MULTIPLE_CHOICE",
                        question: "What did Adam and Eve gain because of the Fall?",
                        options: ["The ability to have children", "Immortality", "Perfection", "Wings"],
                        correctAnswer: "The ability to have children"
                    },
                    {
                        id: 505,
                        type: "TRUE_FALSE",
                        question: "Because of the Fall, all people experience physical death.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "plan-3",
                title: "The Atonement",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "50%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 601,
                        type: "MULTIPLE_CHOICE",
                        question: "Where did Jesus Christ suffer for our sins?",
                        options: ["Garden of Gethsemane", "Garden of Eden", "Mount Sinai", "The Red Sea"],
                        correctAnswer: "Garden of Gethsemane"
                    },
                    {
                        id: 602,
                        type: "TRUE_FALSE",
                        question: "The Atonement of Jesus Christ makes it possible for us to be forgiven of our sins.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 603,
                        type: "MULTIPLE_CHOICE",
                        question: "How many days after His death did Jesus Christ rise again?",
                        options: ["3 days", "7 days", "1 day", "40 days"],
                        correctAnswer: "3 days"
                    },
                    {
                        id: 604,
                        type: "MULTIPLE_CHOICE",
                        question: "What does 'Atonement' mean?",
                        options: ["To reconcile or make 'at one'", "To punish", "To forget", "To ignore"],
                        correctAnswer: "To reconcile or make 'at one'"
                    },
                    {
                        id: 605,
                        type: "TRUE_FALSE",
                        question: "Because of the Atonement, all people will be resurrected.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Unit 3: Commandments & Covenants",
        description: "Living the gospel through obedience and sacred promises.",
        color: "bg-[#ff9600]",
        levels: [
            {
                id: "covenant-1",
                title: "Faith & Repentance",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 701,
                        type: "MULTIPLE_CHOICE",
                        question: "What is the first principle of the gospel?",
                        options: ["Faith in the Lord Jesus Christ", "Repentance", "Baptism", "Charity"],
                        correctAnswer: "Faith in the Lord Jesus Christ"
                    },
                    {
                        id: 702,
                        type: "TRUE_FALSE",
                        question: "Repentance is possible because of the Atonement of Jesus Christ.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 703,
                        type: "MULTIPLE_CHOICE",
                        question: "What does it mean to repent?",
                        options: ["To change and turn to God", "To feel sad", "To confess only", "To be punished"],
                        correctAnswer: "To change and turn to God"
                    },
                    {
                        id: 704,
                        type: "MULTIPLE_CHOICE",
                        question: "In Alma 32, faith is compared to what?",
                        options: ["A seed", "A rock", "A river", "A mountain"],
                        correctAnswer: "A seed"
                    },
                    {
                        id: 705,
                        type: "TRUE_FALSE",
                        question: "Faith requires action, not just belief.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "covenant-2",
                title: "Baptism & the Holy Ghost",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 801,
                        type: "MULTIPLE_CHOICE",
                        question: "How is baptism performed in The Church of Jesus Christ of Latter-day Saints?",
                        options: ["By immersion", "By sprinkling", "By pouring", "Any method"],
                        correctAnswer: "By immersion"
                    },
                    {
                        id: 802,
                        type: "TRUE_FALSE",
                        question: "The Gift of the Holy Ghost is given by the laying on of hands.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 803,
                        type: "MULTIPLE_CHOICE",
                        question: "At what age can a person be baptized?",
                        options: ["8 years old", "12 years old", "Any age", "16 years old"],
                        correctAnswer: "8 years old"
                    },
                    {
                        id: 804,
                        type: "MULTIPLE_CHOICE",
                        question: "What is one role of the Holy Ghost?",
                        options: ["To comfort and guide", "To punish", "To control our actions", "To make us rich"],
                        correctAnswer: "To comfort and guide"
                    },
                    {
                        id: 805,
                        type: "TRUE_FALSE",
                        question: "Jesus Christ was baptized by John the Baptist.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "covenant-3",
                title: "The Sacrament",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 901,
                        type: "MULTIPLE_CHOICE",
                        question: "What does the bread in the sacrament represent?",
                        options: ["The body of Christ", "The blood of Christ", "The word of God", "Manna from heaven"],
                        correctAnswer: "The body of Christ"
                    },
                    {
                        id: 902,
                        type: "MULTIPLE_CHOICE",
                        question: "What does the water in the sacrament represent?",
                        options: ["The blood of Christ", "The body of Christ", "Baptism", "The Holy Ghost"],
                        correctAnswer: "The blood of Christ"
                    },
                    {
                        id: 903,
                        type: "TRUE_FALSE",
                        question: "Taking the sacrament is a way to renew our baptismal covenants.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 904,
                        type: "MULTIPLE_CHOICE",
                        question: "Who has the authority to bless the sacrament?",
                        options: ["Priests", "Deacons", "Teachers", "Bishops"],
                        correctAnswer: "Priests"
                    },
                    {
                        id: 905,
                        type: "TRUE_FALSE",
                        question: "The sacrament is administered every Sunday during sacrament meeting.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Unit 4: Temples & Eternal Families",
        description: "The sacred purpose of temples and family sealings.",
        color: "bg-[#1cb0f6]",
        levels: [
            {
                id: "temple-1",
                title: "The House of the Lord",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 1001,
                        type: "MULTIPLE_CHOICE",
                        question: "What is the temple often called?",
                        options: ["The House of the Lord", "The Chapel", "The Stake Center", "The Meetinghouse"],
                        correctAnswer: "The House of the Lord"
                    },
                    {
                        id: 1002,
                        type: "TRUE_FALSE",
                        question: "Temples are different from regular church meetinghouses.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1003,
                        type: "MULTIPLE_CHOICE",
                        question: "What was the first temple built in this dispensation?",
                        options: ["Kirtland Temple", "Salt Lake Temple", "Nauvoo Temple", "St. George Temple"],
                        correctAnswer: "Kirtland Temple"
                    },
                    {
                        id: 1004,
                        type: "MULTIPLE_CHOICE",
                        question: "What must a member have to enter the temple?",
                        options: ["A temple recommend", "A college degree", "Permission from the bishop only", "Nothing special"],
                        correctAnswer: "A temple recommend"
                    },
                    {
                        id: 1005,
                        type: "TRUE_FALSE",
                        question: "Temples are places where sacred ordinances are performed.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "temple-2",
                title: "Eternal Families",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 1101,
                        type: "MULTIPLE_CHOICE",
                        question: "What ordinance seals families together forever?",
                        options: ["Temple sealing", "Baptism", "Confirmation", "Ordination"],
                        correctAnswer: "Temple sealing"
                    },
                    {
                        id: 1102,
                        type: "TRUE_FALSE",
                        question: "Families can be together forever through temple ordinances.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1103,
                        type: "MULTIPLE_CHOICE",
                        question: "Who holds the sealing power on earth?",
                        options: ["The prophet", "Any bishop", "Any elder", "Any member"],
                        correctAnswer: "The prophet"
                    },
                    {
                        id: 1104,
                        type: "MULTIPLE_CHOICE",
                        question: "What ancient prophet restored the sealing keys?",
                        options: ["Elijah", "Moses", "Abraham", "Noah"],
                        correctAnswer: "Elijah"
                    },
                    {
                        id: 1105,
                        type: "TRUE_FALSE",
                        question: "Temple work can be done on behalf of those who have died.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "temple-3",
                title: "Family History",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "55%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 1201,
                        type: "MULTIPLE_CHOICE",
                        question: "What is the main purpose of family history work?",
                        options: ["To identify ancestors and perform temple work for them", "To write a biography", "To find famous relatives", "To create a family tree for fun"],
                        correctAnswer: "To identify ancestors and perform temple work for them"
                    },
                    {
                        id: 1202,
                        type: "TRUE_FALSE",
                        question: "FamilySearch is a free website provided by the Church for family history.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1203,
                        type: "MULTIPLE_CHOICE",
                        question: "In Malachi 4:5-6, whose heart shall be turned to the fathers?",
                        options: ["The children", "The prophets", "The priests", "The angels"],
                        correctAnswer: "The children"
                    },
                    {
                        id: 1204,
                        type: "MULTIPLE_CHOICE",
                        question: "What do we do with the names we find in family history research?",
                        options: ["Take them to the temple for ordinances", "Just save them", "Only write them down", "Nothing"],
                        correctAnswer: "Take them to the temple for ordinances"
                    },
                    {
                        id: 1205,
                        type: "TRUE_FALSE",
                        question: "Baptism for the dead is a practice taught in the Bible (1 Corinthians 15:29).",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            }
        ]
    }
];

const mongolianUnits: Unit[] = [
    {
        id: 1,
        title: "Нэгж 1: Сэргээлт",
        description: "Иосеф Смит ба Анхны Үзэгдлийн талаар суралц.",
        color: "bg-[#58cc02]",
        levels: [
            {
                id: "restoration-1",
                title: "Иосеф Смитийн залбирал",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "ACTIVE",
                xpReward: 10,
                questions: [
                    {
                        id: 101,
                        type: "MULTIPLE_CHOICE",
                        question: "Иосеф Смит хэдэн онд Ариун Төгөлд залбирсан бэ?",
                        options: ["1820", "1830", "1847", "1823"],
                        correctAnswer: "1820"
                    },
                    {
                        id: 102,
                        type: "TRUE_FALSE",
                        question: "Иосеф Смит Эцэг Бурхан ба Есүс Христийг харсан.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 103,
                        type: "MULTIPLE_CHOICE",
                        question: "Ямар судар Иосефыг залбирахад нөлөөлсөн бэ?",
                        options: ["Иаков 1:5", "Иохан 3:16", "Моронай 10:3", "Алма 32"],
                        correctAnswer: "Иаков 1:5"
                    },
                    {
                        id: 104,
                        type: "MULTIPLE_CHOICE",
                        question: "Анхны Үзэгдлийн үеэр Иосеф Смит хэдэн настай байсан бэ?",
                        options: ["14 настай", "17 настай", "12 настай", "21 настай"],
                        correctAnswer: "14 настай"
                    },
                    {
                        id: 105,
                        type: "MULTIPLE_CHOICE",
                        question: "АНУ-ын аль мужид Анхны Үзэгдэл болсон бэ?",
                        options: ["Нью-Йорк", "Огайо", "Миссури", "Иллинойс"],
                        correctAnswer: "Нью-Йорк"
                    }
                ]
            },
            {
                id: "restoration-2",
                title: "Мормоны Ном",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 201,
                        type: "MULTIPLE_CHOICE",
                        question: "Алтан ялтаснуудыг хэн нуусан бэ?",
                        options: ["Моронай", "Мормон", "Нифай", "Алма"],
                        correctAnswer: "Моронай"
                    },
                    {
                        id: 202,
                        type: "MULTIPLE_CHOICE",
                        question: "Мормоны Номын ихэнх хэсгийг орчуулахад хэр хугацаа зарцуулсан бэ?",
                        options: ["~65 хоног", "1 жил", "3 жил", "6 сар"],
                        correctAnswer: "~65 хоног"
                    },
                    {
                        id: 203,
                        type: "TRUE_FALSE",
                        question: "Мормоны Ном бол Есүс Христийн өөр нэг гэрээ мөн.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 204,
                        type: "MULTIPLE_CHOICE",
                        question: "Иосеф Смитийн гол бичээч хэн байсан бэ?",
                        options: ["Оливер Каудери", "Мартин Харрис", "Эмма Смит", "Хайрум Смит"],
                        correctAnswer: "Оливер Каудери"
                    },
                    {
                        id: 205,
                        type: "MULTIPLE_CHOICE",
                        question: "Мормоны Ном анх хэдэн онд хэвлэгдсэн бэ?",
                        options: ["1830", "1820", "1835", "1840"],
                        correctAnswer: "1830"
                    }
                ]
            },
            {
                id: "restoration-3",
                title: "Санваарын сэргээлт",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 301,
                        type: "MULTIPLE_CHOICE",
                        question: "Аароны Санваарыг хэн сэргээсэн бэ?",
                        options: ["Иохан Баптист", "Петр, Иаков, Иохан", "Елиа", "Мосе"],
                        correctAnswer: "Иохан Баптист"
                    },
                    {
                        id: 302,
                        type: "MULTIPLE_CHOICE",
                        question: "Мелхизедек Санваарыг хэн сэргээсэн бэ?",
                        options: ["Петр, Иаков, Иохан", "Иохан Баптист", "Моронай", "Адам"],
                        correctAnswer: "Петр, Иаков, Иохан"
                    },
                    {
                        id: 303,
                        type: "TRUE_FALSE",
                        question: "Санваар бол Бурханы нэрээр үйлдэх эрх мэдэл мөн.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 304,
                        type: "MULTIPLE_CHOICE",
                        question: "Аароны Санваар сэргээгдэх үед Иосеф Смит, Оливер Каудери нар хаана байсан бэ?",
                        options: ["Саскуэханна голын ойролцоо", "Ариун Төгөлд", "Киртланд ариун сүмд", "Навуд"],
                        correctAnswer: "Саскуэханна голын ойролцоо"
                    },
                    {
                        id: 305,
                        type: "MULTIPLE_CHOICE",
                        question: "Аароны Санваарын анхны албан тушаал юу вэ?",
                        options: ["Дикон", "Багш", "Прист", "Ахлагч"],
                        correctAnswer: "Дикон"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Нэгж 2: Авралын Төлөвлөгөө",
        description: "Бид хаанаас ирсэн, яагаад энд байгаа, хаашаа явах тухай.",
        color: "bg-[#ce82ff]",
        levels: [
            {
                id: "plan-1",
                title: "Дэлхийн өмнөх амьдрал",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "55%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 401,
                        type: "TRUE_FALSE",
                        question: "Бид төрөхөөсөө өмнө Бурхантай хамт амьдарч байсан.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 402,
                        type: "MULTIPLE_CHOICE",
                        question: "Бид дэлхийн өмнөх амьдралд юутай байсан бэ?",
                        options: ["Сүнсэн бие", "Махбодын бие", "Амилсан бие", "Биегүй"],
                        correctAnswer: "Сүнсэн бие"
                    },
                    {
                        id: 403,
                        type: "MULTIPLE_CHOICE",
                        question: "Сонгох эрхийг булаан авч, бүх хүн төрөлхтнийг аврах төлөвлөгөөг хэн танилцуулсан бэ?",
                        options: ["Люсифер", "Иеговын", "Микаел", "Габриел"],
                        correctAnswer: "Люсифер"
                    },
                    {
                        id: 404,
                        type: "MULTIPLE_CHOICE",
                        question: "Дэлхийн өмнөх амьдралд бидний Аврагчаар хэн сонгогдсон бэ?",
                        options: ["Есүс Христ", "Адам", "Мосе", "Абрахам"],
                        correctAnswer: "Есүс Христ"
                    },
                    {
                        id: 405,
                        type: "TRUE_FALSE",
                        question: "Бид дэлхийн өмнөх амьдралдаа Тэнгэрлэг Эцэгийн төлөвлөгөөг дагахаар сонгосон.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            },
            {
                id: "plan-2",
                title: "Уналт",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 501,
                        type: "MULTIPLE_CHOICE",
                        question: "Дэлхий дээрх анхны хүмүүс хэн бэ?",
                        options: ["Адам ба Ева", "Каин ба Абел", "Абрахам ба Саара", "Ноа ба Жоан"],
                        correctAnswer: "Адам ба Ева"
                    },
                    {
                        id: 502,
                        type: "TRUE_FALSE",
                        question: "Уналт бол Бурханы төлөвлөгөөний зайлшгүй хэсэг байсан.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 503,
                        type: "MULTIPLE_CHOICE",
                        question: "Уналтын өмнө Адам ба Ева хаана амьдарч байсан бэ?",
                        options: ["Едений цэцэрлэг", "Иерусалим", "Сион", "Тэнгэр"],
                        correctAnswer: "Едений цэцэрлэг"
                    },
                    {
                        id: 504,
                        type: "MULTIPLE_CHOICE",
                        question: "Уналтын ачаар Адам ба Ева юутай болсон бэ?",
                        options: ["Хүүхэд төрүүлэх чадвар", "Үхэшгүй байдал", "Төгс байдал", "Далавч"],
                        correctAnswer: "Хүүхэд төрүүлэх чадвар"
                    },
                    {
                        id: 505,
                        type: "TRUE_FALSE",
                        question: "Уналтын улмаас бүх хүмүүс махбодын үхлийг амсдаг.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            },
            {
                id: "plan-3",
                title: "Цагаатгал",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "50%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 601,
                        type: "MULTIPLE_CHOICE",
                        question: "Есүс Христ бидний нүглийн төлөө хаана зовж шаналсан бэ?",
                        options: ["Гетсемани цэцэрлэг", "Едений цэцэрлэг", "Синай уул", "Улаан тэнгис"],
                        correctAnswer: "Гетсемани цэцэрлэг"
                    },
                    {
                        id: 602,
                        type: "TRUE_FALSE",
                        question: "Есүс Христийн Цагаатгал нь бидний нүгэл уучлагдах боломжийг олгодог.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 603,
                        type: "MULTIPLE_CHOICE",
                        question: "Нас барснаасаа хойш хэд хоногийн дараа Есүс Христ дахин амилсан бэ?",
                        options: ["3 хоног", "7 хоног", "1 хоног", "40 хоног"],
                        correctAnswer: "3 хоног"
                    },
                    {
                        id: 604,
                        type: "MULTIPLE_CHOICE",
                        question: "'Цагаатгал' гэж юу гэсэн үг вэ?",
                        options: ["Эвлэрэх эсвэл 'нэгдмэл' болох", "Шийтгэх", "Мартах", "Үл тоомсорлох"],
                        correctAnswer: "Эвлэрэх эсвэл 'нэгдмэл' болох"
                    },
                    {
                        id: 605,
                        type: "TRUE_FALSE",
                        question: "Цагаатгалын ачаар бүх хүмүүс амилах болно.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Нэгж 3: Тушаалууд ба Гэрээнүүд",
        description: "Дуулгавар ба ариун амлалтаар дамжуулан сайн мэдээгээр амьдрах.",
        color: "bg-[#ff9600]",
        levels: [
            {
                id: "covenant-1",
                title: "Итгэл ба Наманчлал",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 701,
                        type: "MULTIPLE_CHOICE",
                        question: "Сайн мэдээний анхны зарчим юу вэ?",
                        options: ["Их Эзэн Есүс Христэд итгэх итгэл", "Наманчлал", "Баптисм", "Буяны үйлс"],
                        correctAnswer: "Их Эзэн Есүс Христэд итгэх итгэл"
                    },
                    {
                        id: 702,
                        type: "TRUE_FALSE",
                        question: "Есүс Христийн Цагаатгалын ачаар наманчлах боломжтой.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 703,
                        type: "MULTIPLE_CHOICE",
                        question: "Наманчлах гэдэг нь юу гэсэн үг вэ?",
                        options: ["Өөрчлөгдөж, Бурхан руу эргэх", "Гуниглах", "Зөвхөн наманчлах", "Шийтгүүлэх"],
                        correctAnswer: "Өөрчлөгдөж, Бурхан руу эргэх"
                    },
                    {
                        id: 704,
                        type: "MULTIPLE_CHOICE",
                        question: "Алма 32-т итгэлийг юутай зүйрлэсэн бэ?",
                        options: ["Үр", "Чулуу", "Гол", "Уул"],
                        correctAnswer: "Үр"
                    },
                    {
                        id: 705,
                        type: "TRUE_FALSE",
                        question: "Итгэл нь зөвхөн итгэхээс гадна үйлдэл шаарддаг.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            },
            {
                id: "covenant-2",
                title: "Баптисм ба Ариун Сүнс",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 801,
                        type: "MULTIPLE_CHOICE",
                        question: "Есүс Христийн Хожмын Үеийн Гэгээнтнүүдийн Сүмд баптисмыг хэрхэн хийдэг вэ?",
                        options: ["Усанд бүрэн шумбуулж", "Ус цацаж", "Ус цутгаж", "Дурын аргаар"],
                        correctAnswer: "Усанд бүрэн шумбуулж"
                    },
                    {
                        id: 802,
                        type: "TRUE_FALSE",
                        question: "Ариун Сүнсний бэлгийг гар тавих ёслолоор өгдөг.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 803,
                        type: "MULTIPLE_CHOICE",
                        question: "Хүн хэдэн настайдаа баптисм хүртэж болох бэ?",
                        options: ["8 настай", "12 настай", "Дурын насанд", "16 настай"],
                        correctAnswer: "8 настай"
                    },
                    {
                        id: 804,
                        type: "MULTIPLE_CHOICE",
                        question: "Ариун Сүнсний нэг үүрэг юу вэ?",
                        options: ["Тайвшруулж, удирдах", "Шийтгэх", "Бидний үйлдлийг хянах", "Биднийг баян болгох"],
                        correctAnswer: "Тайвшруулж, удирдах"
                    },
                    {
                        id: 805,
                        type: "TRUE_FALSE",
                        question: "Есүс Христ Иохан Баптистаар баптисм хүртсэн.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            },
            {
                id: "covenant-3",
                title: "Хурлын зоог",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 901,
                        type: "MULTIPLE_CHOICE",
                        question: "Хурлын зоогийн талх юуг төлөөлдөг вэ?",
                        options: ["Христийн бие", "Христийн цус", "Бурханы үг", "Тэнгэрээс ирсэн манна"],
                        correctAnswer: "Христийн бие"
                    },
                    {
                        id: 902,
                        type: "MULTIPLE_CHOICE",
                        question: "Хурлын зоогийн ус юуг төлөөлдөг вэ?",
                        options: ["Христийн цус", "Христийн бие", "Баптисм", "Ариун Сүнс"],
                        correctAnswer: "Христийн цус"
                    },
                    {
                        id: 903,
                        type: "TRUE_FALSE",
                        question: "Хурлын зоог хүртэх нь баптисмын гэрээгээ шинэчлэх арга мөн.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 904,
                        type: "MULTIPLE_CHOICE",
                        question: "Хурлын зоогийг адислах эрх мэдэлтэй хэн бэ?",
                        options: ["Пристүүд", "Диконууд", "Багш нар", "Бишопууд"],
                        correctAnswer: "Пристүүд"
                    },
                    {
                        id: 905,
                        type: "TRUE_FALSE",
                        question: "Хурлын зоогийг ням гараг бүр хурлын үеэр түгээдэг.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Нэгж 4: Ариун Сүм ба Мөнхийн Гэр Бүл",
        description: "Ариун сүм ба гэр бүлийг лацдан холбох ариун зорилго.",
        color: "bg-[#1cb0f6]",
        levels: [
            {
                id: "temple-1",
                title: "Их Эзэний Өргөө",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 1001,
                        type: "MULTIPLE_CHOICE",
                        question: "Ариун сүмийг ихэвчлэн юу гэж нэрлэдэг вэ?",
                        options: ["Их Эзэний Өргөө", "Чапел", "Гадасны төв", "Цуглааны байр"],
                        correctAnswer: "Их Эзэний Өргөө"
                    },
                    {
                        id: 1002,
                        type: "TRUE_FALSE",
                        question: "Ариун сүмүүд нь ердийн сүмийн цуглааны байрнаас өөр байдаг.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 1003,
                        type: "MULTIPLE_CHOICE",
                        question: "Энэ эрин үед баригдсан анхны ариун сүм юу вэ?",
                        options: ["Киртланд ариун сүм", "Солт Лэйк ариун сүм", "Наву ариун сүм", "Сент Жорж ариун сүм"],
                        correctAnswer: "Киртланд ариун сүм"
                    },
                    {
                        id: 1004,
                        type: "MULTIPLE_CHOICE",
                        question: "Ариун сүмд орохын тулд гишүүнд юу байх ёстой вэ?",
                        options: ["Ариун сүмийн зөвшөөрлийн хуудас", "Коллежийн зэрэг", "Зөвхөн бишопын зөвшөөрөл", "Юу ч хэрэггүй"],
                        correctAnswer: "Ариун сүмийн зөвшөөрлийн хуудас"
                    },
                    {
                        id: 1005,
                        type: "TRUE_FALSE",
                        question: "Ариун сүмүүд нь ариун ёслолуудыг гүйцэтгэдэг газар мөн.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            },
            {
                id: "temple-2",
                title: "Мөнхийн гэр бүлүүд",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 1101,
                        type: "MULTIPLE_CHOICE",
                        question: "Гэр бүлүүдийг мөнхөд лацдан холбох ёслол юу вэ?",
                        options: ["Ариун сүмийн лацдан холболт", "Баптисм", "Баталгаажуулалт", "Томилолт"],
                        correctAnswer: "Ариун сүмийн лацдан холболт"
                    },
                    {
                        id: 1102,
                        type: "TRUE_FALSE",
                        question: "Ариун сүмийн ёслолуудаар дамжуулан гэр бүлүүд мөнхөд хамт байж болно.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 1103,
                        type: "MULTIPLE_CHOICE",
                        question: "Дэлхий дээр лацдан холбох хүчийг хэн эзэмшдэг бэ?",
                        options: ["Бошиглогч", "Дурын бишоп", "Дурын ахлагч", "Дурын гишүүн"],
                        correctAnswer: "Бошиглогч"
                    },
                    {
                        id: 1104,
                        type: "MULTIPLE_CHOICE",
                        question: "Лацдан холбох түлхүүрүүдийг аль эртний бошиглогч сэргээсэн бэ?",
                        options: ["Елиа", "Мосе", "Абрахам", "Ноа"],
                        correctAnswer: "Елиа"
                    },
                    {
                        id: 1105,
                        type: "TRUE_FALSE",
                        question: "Ариун сүмийн ажлыг нас барсан хүмүүсийн өмнөөс хийж болно.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            },
            {
                id: "temple-3",
                title: "Гэр бүлийн түүх",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "55%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 1201,
                        type: "MULTIPLE_CHOICE",
                        question: "Гэр бүлийн түүхийн ажлын гол зорилго юу вэ?",
                        options: ["Өвөг дээдсээ тодорхойлж, тэдний өмнөөс ариун сүмийн ажил хийх", "Намтар бичих", "Алдартай төрөл төрөгсдөө олох", "Зүгээр л гэр бүлийн мод үүсгэх"],
                        correctAnswer: "Өвөг дээдсээ тодорхойлж, тэдний өмнөөс ариун сүмийн ажил хийх"
                    },
                    {
                        id: 1202,
                        type: "TRUE_FALSE",
                        question: "FamilySearch бол Сүмээс гаргадаг гэр бүлийн түүхийн үнэ төлбөргүй вэбсайт мөн.",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    },
                    {
                        id: 1203,
                        type: "MULTIPLE_CHOICE",
                        question: "Малахи 4:5-6-д хэний зүрх эцгүүд рүүгээ эргэх вэ?",
                        options: ["Хүүхдүүдийн", "Бошиглогчдын", "Пристүүдийн", "Тэнгэр элчүүдийн"],
                        correctAnswer: "Хүүхдүүдийн"
                    },
                    {
                        id: 1204,
                        type: "MULTIPLE_CHOICE",
                        question: "Гэр бүлийн түүхийн судалгаанаас олсон нэрсээ бид яадаг вэ?",
                        options: ["Ариун сүмд аваачиж ёслол хийдэг", "Зүгээр л хадгалдаг", "Зөвхөн бичиж авдаг", "Юу ч хийдэггүй"],
                        correctAnswer: "Ариун сүмд аваачиж ёслол хийдэг"
                    },
                    {
                        id: 1205,
                        type: "TRUE_FALSE",
                        question: "Нас барагсдын өмнөөс баптисм хүртэх нь Библид заасан зан үйл мөн (1 Коринт 15:29).",
                        options: ["Үнэн", "Худал"],
                        correctAnswer: "Үнэн"
                    }
                ]
            }
        ]
    }
];

export const getUnits = (lang: Language): Unit[] => {
    return lang === 'mn' ? mongolianUnits : englishUnits;
};

// For backward compatibility while refactoring
export const units = englishUnits;
