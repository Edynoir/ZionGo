
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
    },
    {
        id: 5,
        title: "Unit 5: Prophets & Revelation",
        description: "Learn about living prophets and personal revelation.",
        color: "bg-[#ff4b4b]",
        levels: [
            {
                id: "prophet-1",
                title: "Living Prophets",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 1301,
                        type: "MULTIPLE_CHOICE",
                        question: "Who is the current president of The Church of Jesus Christ of Latter-day Saints?",
                        options: ["Russell M. Nelson", "Thomas S. Monson", "Gordon B. Hinckley", "Spencer W. Kimball"],
                        correctAnswer: "Russell M. Nelson"
                    },
                    {
                        id: 1302,
                        type: "TRUE_FALSE",
                        question: "The prophet is the only person authorized to receive revelation for the entire Church.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1303,
                        type: "MULTIPLE_CHOICE",
                        question: "According to Amos 3:7, the Lord reveals his secrets to whom?",
                        options: ["His servants the prophets", "All people", "Only the righteous", "Angels"],
                        correctAnswer: "His servants the prophets"
                    },
                    {
                        id: 1304,
                        type: "MULTIPLE_CHOICE",
                        question: "How many members serve in the First Presidency?",
                        options: ["3", "12", "7", "1"],
                        correctAnswer: "3"
                    },
                    {
                        id: 1305,
                        type: "TRUE_FALSE",
                        question: "The Quorum of the Twelve Apostles are also prophets, seers, and revelators.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "prophet-2",
                title: "Personal Revelation",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 1401,
                        type: "MULTIPLE_CHOICE",
                        question: "Through what means does God primarily speak to us personally?",
                        options: ["The Holy Ghost", "Thunder", "Dreams only", "Written letters"],
                        correctAnswer: "The Holy Ghost"
                    },
                    {
                        id: 1402,
                        type: "TRUE_FALSE",
                        question: "Every member of the Church can receive personal revelation for their own life.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1403,
                        type: "MULTIPLE_CHOICE",
                        question: "In D&C 8:2-3, how does the Lord say He will tell us things?",
                        options: ["In your mind and in your heart", "Through a loud voice", "Only through dreams", "Through other people only"],
                        correctAnswer: "In your mind and in your heart"
                    },
                    {
                        id: 1404,
                        type: "MULTIPLE_CHOICE",
                        question: "What practice is essential for receiving personal revelation?",
                        options: ["Prayer", "Fasting only", "Traveling to the temple only", "Reading newspapers"],
                        correctAnswer: "Prayer"
                    },
                    {
                        id: 1405,
                        type: "TRUE_FALSE",
                        question: "The Holy Ghost can give us feelings of peace and comfort.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "prophet-3",
                title: "Scripture Study",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 1501,
                        type: "MULTIPLE_CHOICE",
                        question: "What are the four standard works of the Church?",
                        options: ["Bible, Book of Mormon, D&C, Pearl of Great Price", "Bible, Quran, Torah, Vedas", "Only the Bible", "Bible and Book of Mormon only"],
                        correctAnswer: "Bible, Book of Mormon, D&C, Pearl of Great Price"
                    },
                    {
                        id: 1502,
                        type: "TRUE_FALSE",
                        question: "Nephi said 'feast upon the words of Christ' (2 Nephi 32:3).",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1503,
                        type: "MULTIPLE_CHOICE",
                        question: "According to D&C 88:118, we should seek learning by what two means?",
                        options: ["Study and faith", "Study and travel", "Faith and luck", "Money and power"],
                        correctAnswer: "Study and faith"
                    },
                    {
                        id: 1504,
                        type: "MULTIPLE_CHOICE",
                        question: "What does 2 Timothy 3:16 say about scripture?",
                        options: ["All scripture is given by inspiration of God", "Scripture is man-made", "Only some scripture is true", "Scripture is not needed"],
                        correctAnswer: "All scripture is given by inspiration of God"
                    },
                    {
                        id: 1505,
                        type: "TRUE_FALSE",
                        question: "Reading the scriptures daily brings us closer to Heavenly Father.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Unit 6: Missionary Work & Service",
        description: "Sharing the gospel and serving others like Jesus Christ.",
        color: "bg-[#00c9a7]",
        levels: [
            {
                id: "mission-1",
                title: "Sharing the Gospel",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "55%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 1601,
                        type: "MULTIPLE_CHOICE",
                        question: "At what age can young men serve a full-time mission?",
                        options: ["18", "16", "21", "25"],
                        correctAnswer: "18"
                    },
                    {
                        id: 1602,
                        type: "MULTIPLE_CHOICE",
                        question: "At what age can young women serve a full-time mission?",
                        options: ["19", "18", "21", "16"],
                        correctAnswer: "19"
                    },
                    {
                        id: 1603,
                        type: "TRUE_FALSE",
                        question: "Every member of the Church is a missionary.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1604,
                        type: "MULTIPLE_CHOICE",
                        question: "What did Jesus say in Matthew 28:19?",
                        options: ["Go ye therefore, and teach all nations", "Stay home and study", "Only teach your family", "Pray silently"],
                        correctAnswer: "Go ye therefore, and teach all nations"
                    },
                    {
                        id: 1605,
                        type: "MULTIPLE_CHOICE",
                        question: "How long is a typical young men's mission?",
                        options: ["24 months", "12 months", "6 months", "36 months"],
                        correctAnswer: "24 months"
                    }
                ]
            },
            {
                id: "mission-2",
                title: "Service to Others",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 1701,
                        type: "MULTIPLE_CHOICE",
                        question: "In Mosiah 2:17, King Benjamin says that serving others is the same as serving whom?",
                        options: ["God", "The king", "Yourself", "No one"],
                        correctAnswer: "God"
                    },
                    {
                        id: 1702,
                        type: "TRUE_FALSE",
                        question: "Jesus taught that the greatest commandment involves loving God and loving your neighbor.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1703,
                        type: "MULTIPLE_CHOICE",
                        question: "What parable teaches about helping those in need regardless of social barriers?",
                        options: ["The Good Samaritan", "The Prodigal Son", "The Sower", "The Ten Virgins"],
                        correctAnswer: "The Good Samaritan"
                    },
                    {
                        id: 1704,
                        type: "MULTIPLE_CHOICE",
                        question: "What is the Church's humanitarian program called?",
                        options: ["Latter-day Saint Charities", "LDS Aid", "Church Fund", "Samaritan Services"],
                        correctAnswer: "Latter-day Saint Charities"
                    },
                    {
                        id: 1705,
                        type: "TRUE_FALSE",
                        question: "Fast offerings help care for those who are poor and in need.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "mission-3",
                title: "Christlike Attributes",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "50%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 1801,
                        type: "MULTIPLE_CHOICE",
                        question: "According to Moroni 7:47, what is 'the pure love of Christ'?",
                        options: ["Charity", "Faith", "Hope", "Obedience"],
                        correctAnswer: "Charity"
                    },
                    {
                        id: 1802,
                        type: "TRUE_FALSE",
                        question: "Christlike attributes include faith, hope, charity, and virtue.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1803,
                        type: "MULTIPLE_CHOICE",
                        question: "In the Sermon on the Mount, Jesus said 'Blessed are the meek, for they shall...'",
                        options: ["Inherit the earth", "See God", "Find gold", "Live forever"],
                        correctAnswer: "Inherit the earth"
                    },
                    {
                        id: 1804,
                        type: "MULTIPLE_CHOICE",
                        question: "Which chapter in Preach My Gospel focuses on Christlike attributes?",
                        options: ["Chapter 6", "Chapter 1", "Chapter 3", "Chapter 10"],
                        correctAnswer: "Chapter 6"
                    },
                    {
                        id: 1805,
                        type: "TRUE_FALSE",
                        question: "Patience is one of the Christlike attributes we should develop.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Unit 7: The Second Coming & Last Days",
        description: "Preparing for the Savior's return and the Millennium.",
        color: "bg-[#845ef7]",
        levels: [
            {
                id: "second-1",
                title: "Signs of the Times",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    {
                        id: 1901,
                        type: "MULTIPLE_CHOICE",
                        question: "Which of these is a sign of the Second Coming mentioned in the scriptures?",
                        options: ["Wars and rumors of wars", "World peace", "Everyone being wealthy", "No more natural disasters"],
                        correctAnswer: "Wars and rumors of wars"
                    },
                    {
                        id: 1902,
                        type: "TRUE_FALSE",
                        question: "The gospel must be preached to all nations before the Second Coming.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 1903,
                        type: "MULTIPLE_CHOICE",
                        question: "According to Joseph Smith—Matthew 1:37, what parable is used to describe the signs before the Lord comes?",
                        options: ["The parable of the fig tree", "The parable of the sower", "The parable of the talents", "The parable of the lost coin"],
                        correctAnswer: "The parable of the fig tree"
                    },
                    {
                        id: 1904,
                        type: "MULTIPLE_CHOICE",
                        question: "In Matthew 24:36, who knows the exact day and hour of the Second Coming?",
                        options: ["Only the Father", "Everyone", "The prophets", "The angels"],
                        correctAnswer: "Only the Father"
                    },
                    {
                        id: 1905,
                        type: "TRUE_FALSE",
                        question: "The building of temples throughout the world is a sign of the times.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "second-2",
                title: "Preparing for His Coming",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    {
                        id: 2001,
                        type: "MULTIPLE_CHOICE",
                        question: "In the parable of the Ten Virgins, what did the five wise virgins have that the foolish did not?",
                        options: ["Extra oil", "Extra money", "Extra food", "Extra clothing"],
                        correctAnswer: "Extra oil"
                    },
                    {
                        id: 2002,
                        type: "TRUE_FALSE",
                        question: "We should live each day as if the Savior could come at any time.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 2003,
                        type: "MULTIPLE_CHOICE",
                        question: "What does the oil in the parable of the Ten Virgins represent?",
                        options: ["Our personal preparation and faithfulness", "Literal oil", "Money", "Physical strength"],
                        correctAnswer: "Our personal preparation and faithfulness"
                    },
                    {
                        id: 2004,
                        type: "MULTIPLE_CHOICE",
                        question: "What are members encouraged to have for temporal preparedness?",
                        options: ["Food storage and emergency supplies", "Only cash", "Nothing special", "A survival shelter"],
                        correctAnswer: "Food storage and emergency supplies"
                    },
                    {
                        id: 2005,
                        type: "TRUE_FALSE",
                        question: "Keeping the commandments is part of spiritual preparation for the Second Coming.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    }
                ]
            },
            {
                id: "second-3",
                title: "The Millennium",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "55%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    {
                        id: 2101,
                        type: "MULTIPLE_CHOICE",
                        question: "How long will the Millennium last?",
                        options: ["1,000 years", "100 years", "500 years", "Forever"],
                        correctAnswer: "1,000 years"
                    },
                    {
                        id: 2102,
                        type: "TRUE_FALSE",
                        question: "During the Millennium, Satan will be bound.",
                        options: ["True", "False"],
                        correctAnswer: "True"
                    },
                    {
                        id: 2103,
                        type: "MULTIPLE_CHOICE",
                        question: "Who will reign personally on the earth during the Millennium?",
                        options: ["Jesus Christ", "A king", "The prophet only", "An angel"],
                        correctAnswer: "Jesus Christ"
                    },
                    {
                        id: 2104,
                        type: "MULTIPLE_CHOICE",
                        question: "What important work will continue during the Millennium?",
                        options: ["Temple work for the dead", "Building spaceships", "Creating new countries", "Nothing, it will be a rest"],
                        correctAnswer: "Temple work for the dead"
                    },
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Unit 8: Church History & Pioneers",
        description: "The journey West and the establishment of Zion.",
        color: "bg-[#ff9600]",
        levels: [
            {
                id: "history-1",
                title: "The Exodus West",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 2201, type: "MULTIPLE_CHOICE", question: "In what year did the first pioneer company enter the Salt Lake Valley?", options: ["1847", "1830", "1820", "1850"], correctAnswer: "1847" },
                    { id: 2202, type: "MULTIPLE_CHOICE", question: "Who led the pioneers to the Salt Lake Valley?", options: ["Brigham Young", "Joseph Smith", "John Taylor", "Wilford Woodruff"], correctAnswer: "Brigham Young" },
                    { id: 2203, type: "TRUE_FALSE", question: "The pioneers walked over 1,000 miles to reach their new home.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2204, type: "MULTIPLE_CHOICE", question: "What was the name of the pioneer trail?", options: ["The Mormon Trail", "The Oregon Trail", "The Santa Fe Trail", "The Silk Road"], correctAnswer: "The Mormon Trail" },
                    { id: 2205, type: "TRUE_FALSE", question: "Many pioneers used handcarts to pull their belongings across the plains.", options: ["True", "False"], correctAnswer: "True" }
                ]
            },
            {
                id: "history-2",
                title: "Building Zion",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 2301, type: "MULTIPLE_CHOICE", question: "Which temple took 40 years to build?", options: ["Salt Lake Temple", "Kirtland Temple", "Nauvoo Temple", "Manti Temple"], correctAnswer: "Salt Lake Temple" },
                    { id: 2302, type: "TRUE_FALSE", question: "The Relief Society was organized in Nauvoo.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2303, type: "MULTIPLE_CHOICE", question: "Who was the first president of the Relief Society?", options: ["Emma Smith", "Eliza R. Snow", "Lucy Mack Smith", "Zina D. H. Young"], correctAnswer: "Emma Smith" },
                    { id: 2304, type: "MULTIPLE_CHOICE", question: "What famous structure in Salt Lake City is known for its acoustics?", options: ["The Tabernacle", "The Conference Center", "The Beehive House", "The Lion House"], correctAnswer: "The Tabernacle" },
                    { id: 2305, type: "TRUE_FALSE", question: "The Church was organized on April 6, 1830.", options: ["True", "False"], correctAnswer: "True" }
                ]
            },
            {
                id: "history-3",
                title: "Worldwide Growth",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 2401, type: "MULTIPLE_CHOICE", question: "Where was the first international mission of the Church?", options: ["United Kingdom", "Canada", "Germany", "Japan"], correctAnswer: "United Kingdom" },
                    { id: 2402, type: "TRUE_FALSE", question: "The Church has members in nearly every country in the world.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2403, type: "MULTIPLE_CHOICE", question: "What year did the Church reach 10 million members?", options: ["1997", "1980", "2010", "2020"], correctAnswer: "1997" },
                    { id: 2404, type: "MULTIPLE_CHOICE", question: "The 'I'm a Mormon' campaign was replaced by which emphasis?", options: ["The Church of Jesus Christ", "Latter-day Saints", "The Restoration", "Faith in Christ"], correctAnswer: "The Church of Jesus Christ" },
                    { id: 2405, type: "TRUE_FALSE", question: "The first temple in Europe was built in Switzerland.", options: ["True", "False"], correctAnswer: "True" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Unit 9: Living the Gospel",
        description: "Applying the principles of the gospel in daily life.",
        color: "bg-[#1cb0f6]",
        levels: [
            {
                id: "living-1",
                title: "The Word of Wisdom",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "55%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 2501, type: "MULTIPLE_CHOICE", question: "Which section of the Doctrine and Covenants contains the Word of Wisdom?", options: ["Section 89", "Section 1", "Section 76", "Section 121"], correctAnswer: "Section 89" },
                    { id: 2502, type: "TRUE_FALSE", question: "The Word of Wisdom encourages the use of wholesome herbs and grains.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2503, type: "MULTIPLE_CHOICE", question: "What substance is specifically forbidden in the Word of Wisdom?", options: ["Alcohol", "Water", "Milk", "Juice"], correctAnswer: "Alcohol" },
                    { id: 2504, type: "MULTIPLE_CHOICE", question: "The Lord promises that those who obey the Word of Wisdom shall find what?", options: ["Wisdom and great treasures of knowledge", "Wealth", "Fame", "Superpowers"], correctAnswer: "Wisdom and great treasures of knowledge" },
                    { id: 2505, type: "TRUE_FALSE", question: "The Word of Wisdom was given as a 'principle with promise'.", options: ["True", "False"], correctAnswer: "True" }
                ]
            },
            {
                id: "living-2",
                title: "Tithing & Fast Offerings",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 2601, type: "MULTIPLE_CHOICE", question: "What percentage of our income is tithing?", options: ["10%", "5%", "20%", "1%"], correctAnswer: "10%" },
                    { id: 2602, type: "TRUE_FALSE", question: "Tithing funds are used to build temples and meetinghouses.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2603, type: "MULTIPLE_CHOICE", question: "How often do we typically fast and give a fast offering?", options: ["Once a month", "Once a year", "Every Sunday", "Never"], correctAnswer: "Once a month" },
                    { id: 2604, type: "MULTIPLE_CHOICE", question: "What is a proper fast?", options: ["Going without food and drink for two meals", "Eating only bread", "Skipping one meal", "Avoiding sweets"], correctAnswer: "Going without food and drink for two meals" },
                    { id: 2605, type: "TRUE_FALSE", question: "The Law of Tithing was revealed through the Prophet Joseph Smith.", options: ["True", "False"], correctAnswer: "True" }
                ]
            },
            {
                id: "living-3",
                title: "Personal Prayer & Study",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "50%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 2701, type: "MULTIPLE_CHOICE", question: "How should we address Heavenly Father in prayer?", options: ["With reverence and love", "Like a casual friend", "Only with formal titles", "By shouting"], correctAnswer: "With reverence and love" },
                    { id: 2702, type: "TRUE_FALSE", question: "We should pray every morning and night.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2703, type: "MULTIPLE_CHOICE", question: "What did Nephi say we should do to the words of Christ?", options: ["Feast upon them", "Read them once", "Ignore them", "Sample them"], correctAnswer: "Feast upon them" },
                    { id: 2704, type: "MULTIPLE_CHOICE", question: "Where can we find the words of Christ?", options: ["In the scriptures and from prophets", "Only in old books", "Nowhere", "Only in our own thoughts"], correctAnswer: "In the scriptures and from prophets" },
                    { id: 2705, type: "TRUE_FALSE", question: "Sincere prayer can help us receive personal revelation.", options: ["True", "False"], correctAnswer: "True" }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Unit 10: Service & Charity",
        description: "Developing the pure love of Christ through serving others.",
        color: "bg-[#ce82ff]",
        levels: [
            {
                id: "service-1",
                title: "The Spirit of Service",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 2801, type: "MULTIPLE_CHOICE", question: "Who is our greatest example of service?", options: ["Jesus Christ", "Brigham Young", "Joseph Smith", "Nephi"], correctAnswer: "Jesus Christ" },
                    { id: 2802, type: "TRUE_FALSE", question: "Service to others is a way to show our love for God.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2803, type: "MULTIPLE_CHOICE", question: "In what way did Jesus serve His apostles at the Last Supper?", options: ["He washed their feet", "He gave them gold", "He built them a house", "He cooked them a steak"], correctAnswer: "He washed their feet" },
                    { id: 2804, type: "MULTIPLE_CHOICE", question: "What is the primary motive for Christian service?", options: ["Love for God and man", "To be seen of others", "To get rewards", "To be famous"], correctAnswer: "Love for God and man" },
                    { id: 2805, type: "TRUE_FALSE", question: "Even small acts of kindness are considered service.", options: ["True", "False"], correctAnswer: "True" }
                ]
            },
            {
                id: "service-2",
                title: "Pure Love of Christ",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 2901, type: "MULTIPLE_CHOICE", question: "What is the definition of charity according to Moroni?", options: ["The pure love of Christ", "Giving money", "Being nice", "Going to church"], correctAnswer: "The pure love of Christ" },
                    { id: 2902, type: "TRUE_FALSE", question: "Charity never faileth.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 2903, type: "MULTIPLE_CHOICE", question: "Which of these is a characteristic of charity?", options: ["It is kind and seeketh not her own", "It is prideful", "It is easily provoked", "It envieth"], correctAnswer: "It is kind and seeketh not her own" },
                    { id: 2904, type: "MULTIPLE_CHOICE", question: "We should pray to be filled with what?", options: ["This love (charity)", "Food", "Knowledge only", "Power"], correctAnswer: "This love (charity)" },
                    { id: 2905, type: "TRUE_FALSE", question: "Charity is the greatest of all the gifts of God.", options: ["True", "False"], correctAnswer: "True" }
                ]
            },
            {
                id: "service-3",
                title: "The Law of the Harvest",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "55%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 3001, type: "MULTIPLE_CHOICE", question: "What do we reap?", options: ["What we sow", "Whatever we want", "Nothing", "Only wheat"], correctAnswer: "What we sow" },
                    { id: 3002, type: "TRUE_FALSE", question: "If we sow good seeds, we will reap good fruit.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3003, type: "MULTIPLE_CHOICE", question: "Galatians 6:9 says, 'And let us not be weary in...'", options: ["Well doing", "Sleeping", "Eating", "Running"], correctAnswer: "Well doing" },
                    { id: 3004, type: "MULTIPLE_CHOICE", question: "What is the ultimate reward for a faithful life?", options: ["Eternal Life", "A big house", "A gold medal", "A new car"], correctAnswer: "Eternal Life" },
                    { id: 3005, type: "TRUE_FALSE", question: "The Lord will reward every man according to his works.", options: ["True", "False"], correctAnswer: "True" }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Unit 11: Church Organization",
        description: "Understanding how wards, stakes, and the worldwide Church are organized.",
        color: "bg-[#58cc02]",
        levels: [
            {
                id: "org-1", title: "Stake and Ward", totalQuestions: 3, iconType: "star", position: { top: "50px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3101, type: "MULTIPLE_CHOICE", question: "A collection of several wards is called a...", options: ["Stake", "Branch", "Group", "Zone"], correctAnswer: "Stake" },
                    { id: 3102, type: "TRUE_FALSE", question: "A Ward is a local congregation of members.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3103, type: "MULTIPLE_CHOICE", question: "Who leads a Ward?", options: ["Bishop", "Stake President", "Mission President", "Elder"], correctAnswer: "Bishop" }
                ]
            },
            {
                id: "org-2", title: "Bishoprics", totalQuestions: 3, iconType: "book", position: { top: "140px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3201, type: "MULTIPLE_CHOICE", question: "How many counselors does a Bishop have?", options: ["2", "1", "3", "12"], correctAnswer: "2" },
                    { id: 3202, type: "TRUE_FALSE", question: "The Bishop is the presiding high priest in the ward.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3203, type: "MULTIPLE_CHOICE", question: "Who is the 'father of the ward'?", options: ["The Bishop", "The Clerk", "The Deacon", "The Teacher"], correctAnswer: "The Bishop" }
                ]
            },
            {
                id: "org-3", title: "Callings", totalQuestions: 3, iconType: "star", position: { top: "230px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3301, type: "TRUE_FALSE", question: "A 'calling' is an assignment to serve in the Church.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3302, type: "MULTIPLE_CHOICE", question: "Who issues callings in a ward?", options: ["The Bishopric", "The Prophet only", "The Primary kids", "The Neighbors"], correctAnswer: "The Bishopric" },
                    { id: 3303, type: "MULTIPLE_CHOICE", question: "Service in callings is mainly...", options: ["Voluntary", "Paid", "Forced", "For fame"], correctAnswer: "Voluntary" }
                ]
            },
            {
                id: "org-4", title: "Sustainings", totalQuestions: 3, iconType: "book", position: { top: "320px", left: "50%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3401, type: "MULTIPLE_CHOICE", question: "How do members show support for a new calling?", options: ["By raising the right hand", "By clapping", "By shouting", "By voting"], correctAnswer: "By raising the right hand" },
                    { id: 3402, type: "TRUE_FALSE", question: "Sustaining is a promise to support and help the person.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3403, type: "MULTIPLE_CHOICE", question: "After being sustained, a member is usually...", options: ["Set apart", "Graduated", "Promoted", "Retired"], correctAnswer: "Set apart" }
                ]
            },
            {
                id: "org-5", title: "Quorums", totalQuestions: 3, iconType: "star", position: { top: "410px", left: "40%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3501, type: "MULTIPLE_CHOICE", question: "An organized group of priesthood holders is a...", options: ["Quorum", "Class", "League", "Team"], correctAnswer: "Quorum" },
                    { id: 3502, type: "TRUE_FALSE", question: "Deacons, Teachers, and Priests have their own quorums.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3503, type: "MULTIPLE_CHOICE", question: "Who presides over the Deacons Quorum?", options: ["The Quorum President", "The Bishop", "The Elder", "The High Priest"], correctAnswer: "The Quorum President" }
                ]
            },
            {
                id: "org-6", title: "Relief Society", totalQuestions: 3, iconType: "book", position: { top: "500px", left: "60%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3601, type: "TRUE_FALSE", question: "Relief Society is for the women of the Church.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3602, type: "MULTIPLE_CHOICE", question: "What is the motto of Relief Society?", options: ["Charity Never Faileth", "Be Prepared", "Zion First", "Love One Another"], correctAnswer: "Charity Never Faileth" },
                    { id: 3603, type: "MULTIPLE_CHOICE", question: "Relief Society was founded in which city?", options: ["Nauvoo", "Kirtland", "Salt Lake", "Missouri"], correctAnswer: "Nauvoo" }
                ]
            },
            {
                id: "org-7", title: "Young Programs", totalQuestions: 3, iconType: "star", position: { top: "590px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3701, type: "MULTIPLE_CHOICE", question: "Young Women and Young Men programs are for ages...", options: ["11-18", "5-10", "18-30", "0-3"], correctAnswer: "11-18" },
                    { id: 3702, type: "TRUE_FALSE", question: "The goal is to help youth come unto Christ.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3703, type: "MULTIPLE_CHOICE", question: "The theme for youth changes...", options: ["Annually", "Every year", "Every month", "Never"], correctAnswer: "Annually" }
                ]
            },
            {
                id: "org-8", title: "Primary", totalQuestions: 3, iconType: "book", position: { top: "680px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3801, type: "MULTIPLE_CHOICE", question: "The Primary is for children up to age...", options: ["11", "5", "8", "14"], correctAnswer: "11" },
                    { id: 3802, type: "TRUE_FALSE", question: "Children sing 'I am a Child of God' in Primary.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3803, type: "MULTIPLE_CHOICE", question: "What is the Primary color theme often associated with?", options: ["CTR (Choose the Right)", "LDS", "Zion", "Hope"], correctAnswer: "CTR (Choose the Right)" }
                ]
            },
            {
                id: "org-9", title: "General Conference", totalQuestions: 3, iconType: "star", position: { top: "770px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3901, type: "MULTIPLE_CHOICE", question: "How many times a year is General Conference held?", options: ["Twice", "Once", "Four times", "Every month"], correctAnswer: "Twice" },
                    { id: 3902, type: "TRUE_FALSE", question: "We hear from the Prophet and Apostles during conference.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3903, type: "MULTIPLE_CHOICE", question: "In which months is conference usually held?", options: ["April and October", "January and June", "March and September", "May and December"], correctAnswer: "April and October" }
                ]
            },
            {
                id: "org-10", title: "The Prophet", totalQuestions: 3, iconType: "trophy", position: { top: "860px", left: "50%" }, status: "LOCKED", xpReward: 20, questions: [
                    { id: 4001, type: "MULTIPLE_CHOICE", question: "Who leads the whole Church on earth?", options: ["The Prophet", "The Bishop", "The Elder", "The Deacon"], correctAnswer: "The Prophet" },
                    { id: 4002, type: "TRUE_FALSE", question: "The Prophet is the President of the Church.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4003, type: "MULTIPLE_CHOICE", question: "The Prophet is supported by the Quorum of the...", options: ["Twelve Apostles", "Seventy", "Elders", "Deacons"], correctAnswer: "Twelve Apostles" }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Unit 12: Family & The Home",
        description: "Strengthening families through gospel principles.",
        color: "bg-[#ce82ff]",
        levels: [
            {
                id: "fam-1", title: "The Family Proclamation", totalQuestions: 3, iconType: "star", position: { top: "50px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4101, type: "MULTIPLE_CHOICE", question: "What is the official document about families called?", options: ["The Family Proclamation", "The Family Law", "The Family Book", "The Family Guide"], correctAnswer: "The Family Proclamation" },
                    { id: 4102, type: "TRUE_FALSE", question: "Marriage is ordained of God.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4103, type: "MULTIPLE_CHOICE", question: "Where should the gospel be taught first?", options: ["In the home", "In the school", "In the mall", "In the park"], correctAnswer: "In the home" }
                ]
            },
            {
                id: "fam-2", title: "Temple Marriage", totalQuestions: 3, iconType: "book", position: { top: "140px", left: "45%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4201, type: "TRUE_FALSE", question: "Temple marriage is for time and all eternity.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4202, type: "MULTIPLE_CHOICE", question: "What is the ceremony that joins families forever?", options: ["Sealing", "Baptism", "Graduation", "Birthday"], correctAnswer: "Sealing" },
                    { id: 4203, type: "MULTIPLE_CHOICE", question: "Where do sealings take place?", options: ["The Temple", "The Chapel", "The Park", "The Home"], correctAnswer: "The Temple" }
                ]
            },
            {
                id: "fam-3", title: "Parenting", totalQuestions: 3, iconType: "star", position: { top: "230px", left: "55%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4301, type: "MULTIPLE_CHOICE", question: "Parents have a sacred duty to rear children in...", options: ["Love and righteousness", "Fear", "Wealth", "Anger"], correctAnswer: "Love and righteousness" },
                    { id: 4302, type: "TRUE_FALSE", question: "Children are an heritage of the Lord.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4303, type: "MULTIPLE_CHOICE", question: "Who should help parents in their duties?", options: ["Each other (as equal partners)", "The government", "Nobody", "Strangers"], correctAnswer: "Each other (as equal partners)" }
                ]
            },
            {
                id: "fam-4", title: "Family Home Evening", totalQuestions: 3, iconType: "book", position: { top: "320px", left: "50%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4401, type: "MULTIPLE_CHOICE", question: "What is the weekly family meeting called?", options: ["Family Home Evening", "Family Talk", "Family Game", "Family Party"], correctAnswer: "Family Home Evening" },
                    { id: 4402, type: "TRUE_FALSE", question: "The Church encourages holding FHE on Monday nights.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4403, type: "MULTIPLE_CHOICE", question: "FHE usually includes...", options: ["Lesson, prayer, and activity", "Sleeping", "Watching TV only", "Fighting"], correctAnswer: "Lesson, prayer, and activity" }
                ]
            },
            {
                id: "fam-5", title: "Family Prayer", totalQuestions: 3, iconType: "star", position: { top: "410px", left: "45%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4501, type: "MULTIPLE_CHOICE", question: "How often should families pray together?", options: ["Daily (Morning and Night)", "Once a year", "On birthdays", "Never"], correctAnswer: "Daily (Morning and Night)" },
                    { id: 4502, type: "TRUE_FALSE", question: "Family prayer brings peace and unity.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4503, type: "MULTIPLE_CHOICE", question: "Who should take turns leading the family prayer?", options: ["Every family member", "Only the dad", "Only the mom", "Only the kids"], correctAnswer: "Every family member" }
                ]
            },
            {
                id: "fam-6", title: "Honor Parents", totalQuestions: 3, iconType: "book", position: { top: "500px", left: "55%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4601, type: "MULTIPLE_CHOICE", question: "The fifth commandment says: 'Honor thy...'", options: ["Father and thy mother", "Neighbor", "Self", "Friend"], correctAnswer: "Father and thy mother" },
                    { id: 4602, type: "TRUE_FALSE", question: "Obeying parents is a way to show love.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4603, type: "MULTIPLE_CHOICE", question: "What does it mean to honor parents?", options: ["Show respect and love", "Ignore them", "Argue with them", "Hide from them"], correctAnswer: "Show respect and love" }
                ]
            },
            {
                id: "fam-7", title: "Charity at Home", totalQuestions: 3, iconType: "star", position: { top: "590px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4701, type: "TRUE_FALSE", question: "Charity should begin at home.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4702, type: "MULTIPLE_CHOICE", question: "Kind words to siblings is a form of...", options: ["Charity", "Selfishness", "Pride", "Boredom"], correctAnswer: "Charity" },
                    { id: 4703, type: "MULTIPLE_CHOICE", question: "Jesus taught us to love one another as He...", options: ["Loved us", "Warned us", "Ignored us", "Left us"], correctAnswer: "Loved us" }
                ]
            },
            {
                id: "fam-8", title: "Self-Reliance", totalQuestions: 3, iconType: "book", position: { top: "680px", left: "45%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4801, type: "MULTIPLE_CHOICE", question: "Families should work together to be...", options: ["Self-reliant", "Rich", "Famous", "Dependent"], correctAnswer: "Self-reliant" },
                    { id: 4802, type: "TRUE_FALSE", question: "Learning to save money is part of self-reliance.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4803, type: "MULTIPLE_CHOICE", question: "Self-reliance means taking care of our own...", options: ["Needs", "Wants only", "Neighbors' pets", "Video games"], correctAnswer: "Needs" }
                ]
            },
            {
                id: "fam-9", title: "Ancestry", totalQuestions: 3, iconType: "star", position: { top: "770px", left: "55%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4901, type: "MULTIPLE_CHOICE", question: "Ancestors are family members who...", options: ["Lived before us", "Live next door", "Are our pets", "Are our friends"], correctAnswer: "Lived before us" },
                    { id: 4902, type: "TRUE_FALSE", question: "Learning family stories connects us to our roots.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 4903, type: "MULTIPLE_CHOICE", question: "Family history helps us find names for...", options: ["Temple work", "A book", "A movie", "A game"], correctAnswer: "Temple work" }
                ]
            },
            {
                id: "fam-10", title: "Eternal Joy", totalQuestions: 3, iconType: "trophy", position: { top: "860px", left: "50%" }, status: "LOCKED", xpReward: 20, questions: [
                    { id: 5001, type: "TRUE_FALSE", question: "God's plan for families is for our eternal joy.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5002, type: "MULTIPLE_CHOICE", question: "The goal of the plan of salvation is to return to...", options: ["God as families", "Our old house", "The moon", "The woods"], correctAnswer: "God as families" },
                    { id: 5003, type: "MULTIPLE_CHOICE", question: "Families can be together...", options: ["Forever", "For a year", "For a week", "Never"], correctAnswer: "Forever" }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "Unit 13: Gospel Study Tools",
        description: "Equipping yourself with tools for lifelong learning.",
        color: "bg-[#ff9600]",
        levels: [
            {
                id: "study-1", title: "The Holy Bible", totalQuestions: 3, iconType: "star", position: { top: "50px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5101, type: "MULTIPLE_CHOICE", question: "The Bible contains the Old and New...", options: ["Testaments", "Chapters", "Verses", "Stories"], correctAnswer: "Testaments" },
                    { id: 5102, type: "TRUE_FALSE", question: "The Bible is the word of God.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 3103, type: "MULTIPLE_CHOICE", question: "The New Testament tells the life of...", options: ["Jesus Christ", "Moses", "Adam", "Noah"], correctAnswer: "Jesus Christ" }
                ]
            },
            {
                id: "study-2", title: "Book of Mormon", totalQuestions: 3, iconType: "book", position: { top: "140px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5201, type: "MULTIPLE_CHOICE", question: "The Book of Mormon is another testament of...", options: ["Jesus Christ", "The US", "The Moon", "The Garden"], correctAnswer: "Jesus Christ" },
                    { id: 5202, type: "TRUE_FALSE", question: "It was translated by Joseph Smith.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5203, type: "MULTIPLE_CHOICE", question: "Who was the main prophet who kept the records?", options: ["Mormon", "Nephi", "Alma", "Ammon"], correctAnswer: "Mormon" }
                ]
            },
            {
                id: "study-3", title: "Study Aids", totalQuestions: 3, iconType: "star", position: { top: "230px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5301, type: "MULTIPLE_CHOICE", question: "Small notes at the bottom of the page are...", options: ["Footnotes", "Headlines", "Titles", "Pictures"], correctAnswer: "Footnotes" },
                    { id: 5302, type: "TRUE_FALSE", question: "The Topical Guide helps find scriptures by subject.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5303, type: "MULTIPLE_CHOICE", question: "Where can you find definitions of words?", options: ["Bible Dictionary", "Storybook", "Magazine", "News"], correctAnswer: "Bible Dictionary" }
                ]
            },
            {
                id: "study-4", title: "Daily Habits", totalQuestions: 3, iconType: "book", position: { top: "320px", left: "50%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5401, type: "MULTIPLE_CHOICE", question: "How often should we study the scriptures?", options: ["Daily", "Weekly", "Annually", "Never"], correctAnswer: "Daily" },
                    { id: 5402, type: "TRUE_FALSE", question: "Setting a specific time for study is helpful.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5403, type: "MULTIPLE_CHOICE", question: "Prayer before study invites the...", options: ["Holy Ghost", "Sleepiness", "Hunger", "Noise"], correctAnswer: "Holy Ghost" }
                ]
            },
            {
                id: "study-5", title: "Gospel Library", totalQuestions: 3, iconType: "star", position: { top: "410px", left: "40%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5501, type: "MULTIPLE_CHOICE", question: "What is the official Church app for study?", options: ["Gospel Library", "Social Media", "Game Hub", "News App"], correctAnswer: "Gospel Library" },
                    { id: 5502, type: "TRUE_FALSE", question: "You can highlight and take notes in the app.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5503, type: "MULTIPLE_CHOICE", question: "The app contains...", options: ["Scriptures, manuals, and music", "Only games", "Nothing", "Only pictures"], correctAnswer: "Scriptures, manuals, and music" }
                ]
            },
            {
                id: "study-6", title: "Applying Truth", totalQuestions: 3, iconType: "book", position: { top: "500px", left: "60%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5601, type: "MULTIPLE_CHOICE", question: "Nephi said to 'liken all scriptures' to...", options: ["Ourselves", "Strangers", "Nobody", "Animals"], correctAnswer: "Ourselves" },
                    { id: 5602, type: "TRUE_FALSE", question: "Scriptures give us answers to life's problems.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5603, type: "MULTIPLE_CHOICE", question: "Which principle helps us use what we learn?", options: ["Application", "Forgetting", "Ignoring", "Doubting"], correctAnswer: "Application" }
                ]
            },
            {
                id: "study-7", title: "Journals", totalQuestions: 3, iconType: "star", position: { top: "590px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5701, type: "MULTIPLE_CHOICE", question: "Writing down spiritual feelings is a...", options: ["Journal", "Grocery list", "Text message", "Ticket"], correctAnswer: "Journal" },
                    { id: 5702, type: "TRUE_FALSE", question: "Prophets encourage keeping a journal.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5703, type: "MULTIPLE_CHOICE", question: "Journals help us remember God's...", options: ["Mercy and blessings", "Anger", "Rules only", "Distance"], correctAnswer: "Mercy and blessings" }
                ]
            },
            {
                id: "study-8", title: "Teaching Others", totalQuestions: 3, iconType: "book", position: { top: "680px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5801, type: "MULTIPLE_CHOICE", question: "What is one of the best ways to learn?", options: ["Teaching others", "Sleeping", "Running", "Doing nothing"], correctAnswer: "Teaching others" },
                    { id: 5802, type: "TRUE_FALSE", question: "Sharing your testimony strengthens it.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5803, type: "MULTIPLE_CHOICE", question: "Who should we share our gospel learning with?", options: ["Family and friends", "Nobody", "Our enemies only", "Strangers only"], correctAnswer: "Family and friends" }
                ]
            },
            {
                id: "study-9", title: "Lifelong Learning", totalQuestions: 3, iconType: "star", position: { top: "770px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5901, type: "TRUE_FALSE", question: "Gospel study should continue throughout our lives.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 5902, type: "MULTIPLE_CHOICE", question: "We should seek learning by study and by...", options: ["Faith", "Luck", "Money", "Sleep"], correctAnswer: "Faith" },
                    { id: 5903, type: "MULTIPLE_CHOICE", question: "Whose voice should we learn to hear through study?", options: ["The Lord's", "The world's", "The crowd's", "The radio's"], correctAnswer: "The Lord's" }
                ]
            },
            {
                id: "study-10", title: "The End Goal", totalQuestions: 3, iconType: "trophy", position: { top: "860px", left: "50%" }, status: "LOCKED", xpReward: 20, questions: [
                    { id: 6001, type: "MULTIPLE_CHOICE", question: "The goal of all study is to become more like...", options: ["Jesus Christ", "A famous person", "A rich person", "Ourselves only"], correctAnswer: "Jesus Christ" },
                    { id: 6002, type: "TRUE_FALSE", question: "Scriptures point us toward eternal life.", options: ["True", "False"], correctAnswer: "True" },
                    { id: 6003, type: "MULTIPLE_CHOICE", question: "Study helps us build our foundation upon the...", options: ["Rock (Christ)", "Sand", "Water", "Air"], correctAnswer: "Rock (Christ)" }
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
    },
    {
        id: 5,
        title: "Нэгж 5: Бошиглогчид ба Илчлэлт",
        description: "Амьд бошиглогчид ба хувийн илчлэлтийн талаар суралц.",
        color: "bg-[#ff4b4b]",
        levels: [
            {
                id: "prophet-1",
                title: "Амьд бошиглогчид",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 1301, type: "MULTIPLE_CHOICE", question: "Есүс Христийн Хожмын Үеийн Гэгээнтнүүдийн Сүмийн одоогийн ерөнхийлөгч хэн бэ?", options: ["Рассэлл М. Нэлсон", "Томас С. Монсон", "Гордон Б. Хинкли", "Спэнсэр В. Кимбалл"], correctAnswer: "Рассэлл М. Нэлсон" },
                    { id: 1302, type: "TRUE_FALSE", question: "Бошиглогч бол бүх Сүмд зориулсан илчлэлт хүлээн авах эрх мэдэлтэй цорын ганц хүн юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 1303, type: "MULTIPLE_CHOICE", question: "Амос 3:7-д Их Эзэн нууцуудаа хэнд илчилдэг гэж байдаг вэ?", options: ["Өөрийн зарц бошиглогчдод", "Бүх хүмүүст", "Зөвхөн зөвт хүмүүст", "Тэнгэр элч нарт"], correctAnswer: "Өөрийн зарц бошиглогчдод" },
                    { id: 1304, type: "MULTIPLE_CHOICE", question: "Тэргүүн Зөвлөлд хэдэн гишүүн үйлчилдэг вэ?", options: ["3", "12", "7", "1"], correctAnswer: "3" },
                    { id: 1305, type: "TRUE_FALSE", question: "Арван хоёр Төлөөлөгчийн Чуулга нь бас бошиглогчид, үзмэрчид, илчлэгчид юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "prophet-2",
                title: "Хувийн илчлэлт",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 1401, type: "MULTIPLE_CHOICE", question: "Бурхан бидэнтэй хувиараа голчлон яаж ярьдаг вэ?", options: ["Ариун Сүнсээр дамжуулан", "Аянгаар", "Зөвхөн зүүдээр", "Бичгээр"], correctAnswer: "Ариун Сүнсээр дамжуулан" },
                    { id: 1402, type: "TRUE_FALSE", question: "Сүмийн гишүүн бүр хувийн амьдралдаа хувийн илчлэлт хүлээн авч чадна.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 1403, type: "MULTIPLE_CHOICE", question: "С ба Г 8:2-3-т Их Эзэн бидэнд юу яаж хэлнэ гэж хэлсэн бэ?", options: ["Оюун санаа ба зүрх сэтгэлд чинь", "Чанга дуу хоолойгоор", "Зөвхөн зүүдээр", "Зөвхөн бусад хүмүүсээр дамжуулан"], correctAnswer: "Оюун санаа ба зүрх сэтгэлд чинь" },
                    { id: 1404, type: "MULTIPLE_CHOICE", question: "Хувийн илчлэлт хүлээн авахад ямар зуршил чухал вэ?", options: ["Залбирал", "Зөвхөн мацаг", "Зөвхөн ариун сүмд очих", "Сонин унших"], correctAnswer: "Залбирал" },
                    { id: 1405, type: "TRUE_FALSE", question: "Ариун Сүнс бидэнд амар амгалан, тайвшралын мэдрэмж өгч чадна.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "prophet-3",
                title: "Судар судлал",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 1501, type: "MULTIPLE_CHOICE", question: "Сүмийн дөрвөн жишиг бүтээл юу вэ?", options: ["Библи, Мормоны Ном, С ба Г, Агуу Үнэт Сувд", "Библи, Куран, Тора, Ведас", "Зөвхөн Библи", "Зөвхөн Библи ба Мормоны Ном"], correctAnswer: "Библи, Мормоны Ном, С ба Г, Агуу Үнэт Сувд" },
                    { id: 1502, type: "TRUE_FALSE", question: "Нифай 'Христийн үгсийг наршин ид' гэж хэлсэн (2 Нифай 32:3).", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 1503, type: "MULTIPLE_CHOICE", question: "С ба Г 88:118-д бид суралцах ёстой хоёр арга замаар юу гэж заасан бэ?", options: ["Суралцах ба итгэлээр", "Суралцах ба аялах", "Итгэл ба азаар", "Мөнгө ба хүчээр"], correctAnswer: "Суралцах ба итгэлээр" },
                    { id: 1504, type: "MULTIPLE_CHOICE", question: "2 Тимот 3:16-д судрын тухай юу гэж хэлсэн бэ?", options: ["Бүх судар Бурханы онгодоор өгөгдсөн", "Судар бол хүний бүтээл", "Зарим судар л үнэн", "Судар хэрэггүй"], correctAnswer: "Бүх судар Бурханы онгодоор өгөгдсөн" },
                    { id: 1505, type: "TRUE_FALSE", question: "Өдөр бүр судар уншсанаар бид Тэнгэрлэг Эцэгт ойрхон болно.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Нэгж 6: Номлолын Ажил ба Үйлчлэл",
        description: "Сайн мэдээг хуваалцах ба Есүс Христ шиг бусдад үйлчлэх.",
        color: "bg-[#00c9a7]",
        levels: [
            {
                id: "mission-1",
                title: "Сайн мэдээг хуваалцах",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "55%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 1601, type: "MULTIPLE_CHOICE", question: "Залуучууд хэдэн наснаас бүтэн цагийн номлолд үйлчилж болох вэ?", options: ["18", "16", "21", "25"], correctAnswer: "18" },
                    { id: 1602, type: "MULTIPLE_CHOICE", question: "Охид хэдэн наснаас бүтэн цагийн номлолд үйлчилж болох вэ?", options: ["19", "18", "21", "16"], correctAnswer: "19" },
                    { id: 1603, type: "TRUE_FALSE", question: "Сүмийн гишүүн бүр номлогч юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 1604, type: "MULTIPLE_CHOICE", question: "Матай 28:19-д Есүс юу гэж хэлсэн бэ?", options: ["Тиймээс та нар яваад бүх үндэстнийг номлогтун", "Гэртээ байж суралц", "Зөвхөн гэр бүлдээ заа", "Чимээгүй залбир"], correctAnswer: "Тиймээс та нар яваад бүх үндэстнийг номлогтун" },
                    { id: 1605, type: "MULTIPLE_CHOICE", question: "Залуучуудын ердийн номлол хэр удаан үргэлжилдэг вэ?", options: ["24 сар", "12 сар", "6 сар", "36 сар"], correctAnswer: "24 сар" }
                ]
            },
            {
                id: "mission-2",
                title: "Бусдад үйлчлэх",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 1701, type: "MULTIPLE_CHOICE", question: "Мозая 2:17-д Бенжамин хаан бусдад үйлчлэх нь хэнд үйлчлэхтэй адил гэж хэлсэн бэ?", options: ["Бурханд", "Хаанд", "Өөртөө", "Хэнд ч биш"], correctAnswer: "Бурханд" },
                    { id: 1702, type: "TRUE_FALSE", question: "Есүс хамгийн агуу зарлиг бол Бурханыг хайрлах ба хөршөө хайрлах юм гэж заасан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 1703, type: "MULTIPLE_CHOICE", question: "Ямар сургаалт зүйрлэл нийгмийн ялгаваргүй бусдад тусалж байхыг заадаг вэ?", options: ["Сайн Самари хүн", "Тэнэмэл хүү", "Тариачин", "Арван Онгон охид"], correctAnswer: "Сайн Самари хүн" },
                    { id: 1704, type: "MULTIPLE_CHOICE", question: "Сүмийн хүмүүнлэгийн хөтөлбөрийг юу гэж нэрлэдэг вэ?", options: ["Хожмын Үеийн Гэгээнтнүүдийн Буяны Байгууллага", "LDS Тусламж", "Сүмийн Сан", "Самари Үйлчилгээ"], correctAnswer: "Хожмын Үеийн Гэгээнтнүүдийн Буяны Байгууллага" },
                    { id: 1705, type: "TRUE_FALSE", question: "Мацгийн өргөл нь ядуу, эмзэг хүмүүст тусалдаг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "mission-3",
                title: "Христийнхтэй адил чанарууд",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "50%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 1801, type: "MULTIPLE_CHOICE", question: "Моронай 7:47-д 'Христийн цэвэр хайр' гэж юуг хэлдэг вэ?", options: ["Энэрэл", "Итгэл", "Найдвар", "Дуулгавартай байдал"], correctAnswer: "Энэрэл" },
                    { id: 1802, type: "TRUE_FALSE", question: "Христийн чанаруудад итгэл, найдвар, энэрэл, ёс суртахуун зэрэг орно.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 1803, type: "MULTIPLE_CHOICE", question: "Уулан дээрх номлолд Есүс 'Дөлгөөн хүмүүс ерөөлтэй еэ, учир нь тэд...' гэж хэлсэн", options: ["Газрыг өвлөнө", "Бурханыг харна", "Алт олно", "Мөнхөд амьдарна"], correctAnswer: "Газрыг өвлөнө" },
                    { id: 1804, type: "MULTIPLE_CHOICE", question: "Миний Сайн Мэдээг Номло номын аль бүлэг Христийн чанаруудад төвлөрдөг вэ?", options: ["Бүлэг 6", "Бүлэг 1", "Бүлэг 3", "Бүлэг 10"], correctAnswer: "Бүлэг 6" },
                    { id: 1805, type: "TRUE_FALSE", question: "Тэвчээр бол бидний хөгжүүлэх ёстой Христийн чанаруудын нэг юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Нэгж 7: Хоёр Дахь Ирэлт ба Эцсийн Өдрүүд",
        description: "Аврагчийн эргэн ирэлт ба Мянганы хаанчлалд бэлтгэх.",
        color: "bg-[#845ef7]",
        levels: [
            {
                id: "second-1",
                title: "Цаг үеийн тэмдгүүд",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 1901, type: "MULTIPLE_CHOICE", question: "Судруудад дурдагдсан Хоёр Дахь Ирэлтийн тэмдгүүдийн аль нь вэ?", options: ["Дайн ба дайны цуурхал", "Дэлхийн энх тайван", "Бүгд баялаг болох", "Байгалийн гамшиг байхгүй"], correctAnswer: "Дайн ба дайны цуурхал" },
                    { id: 1902, type: "TRUE_FALSE", question: "Хоёр Дахь Ирэлтийн өмнө бүх үндэстэнд сайн мэдээг номлох ёстой.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 1903, type: "MULTIPLE_CHOICE", question: "Иосеф Смит—Матай 1:37-д ямар сургаалт зүйрлэл хэрэглэсэн бэ?", options: ["Инжрийн модны зүйрлэл", "Тариачны зүйрлэл", "Талантуудын зүйрлэл", "Алдагдсан зоосны зүйрлэл"], correctAnswer: "Инжрийн модны зүйрлэл" },
                    { id: 1904, type: "MULTIPLE_CHOICE", question: "Матай 24:36-д Хоёр Дахь Ирэлтийн яг тухайн өдөр, цагийг хэн мэддэг вэ?", options: ["Зөвхөн Эцэг", "Бүгд", "Бошиглогчид", "Тэнгэр элч нар"], correctAnswer: "Зөвхөн Эцэг" },
                    { id: 1905, type: "TRUE_FALSE", question: "Дэлхий даяар ариун сүмүүд баригдаж байгаа нь цаг үеийн тэмдэг юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "second-2",
                title: "Түүний ирэлтэд бэлтгэх",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 2001, type: "MULTIPLE_CHOICE", question: "Арван Онгон Охидын зүйрлэлд тав мэргэн охид тэнэг охидод байгаагүй юутай байсан бэ?", options: ["Нэмэлт тос", "Нэмэлт мөнгө", "Нэмэлт хоол", "Нэмэлт хувцас"], correctAnswer: "Нэмэлт тос" },
                    { id: 2002, type: "TRUE_FALSE", question: "Аврагч хэдийд ч ирж болно гэсэн мэт өдөр бүр амьдрах ёстой.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2003, type: "MULTIPLE_CHOICE", question: "Арван Онгон Охидын зүйрлэл дэх тос юуг төлөөлдөг вэ?", options: ["Хувийн бэлтгэл ба итгэлтэй байдал", "Жинхэнэ тос", "Мөнгө", "Биеийн хүч"], correctAnswer: "Хувийн бэлтгэл ба итгэлтэй байдал" },
                    { id: 2004, type: "MULTIPLE_CHOICE", question: "Цаг хугацааны бэлтгэлд юу хийхийг уриалдаг вэ?", options: ["Хүнсний нөөц ба яаралтай тусламжийн хэрэгсэл", "Зөвхөн бэлэн мөнгө", "Юу ч хэрэггүй", "Амьд үлдэх бункер"], correctAnswer: "Хүнсний нөөц ба яаралтай тусламжийн хэрэгсэл" },
                    { id: 2005, type: "TRUE_FALSE", question: "Зарлигуудыг дагах нь Хоёр Дахь Ирэлтэд сүнслэг бэлтгэлийн нэг хэсэг юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "second-3",
                title: "Мянганы хаанчлал",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "55%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 2101, type: "MULTIPLE_CHOICE", question: "Мянганы хаанчлал хэр удаан үргэлжлэх вэ?", options: ["1,000 жил", "100 жил", "500 жил", "Мөнхөд"], correctAnswer: "1,000 жил" },
                    { id: 2102, type: "TRUE_FALSE", question: "Мянганы хаанчлалын үеэр Сатан хүлээгдэх болно.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2103, type: "MULTIPLE_CHOICE", question: "Мянганы хаанчлалын үеэр дэлхий дээр хэн хувиараа хаанчлах вэ?", options: ["Есүс Христ", "Хаан", "Зөвхөн бошиглогч", "Тэнгэр элч"], correctAnswer: "Есүс Христ" },
                    { id: 2104, type: "MULTIPLE_CHOICE", question: "Мянганы хаанчлалын үеэр ямар чухал ажил үргэлжлэх вэ?", options: ["Нас барагсдын төлөөх ариун сүмийн ажил", "Сансрын хөлөг барих", "Шинэ улс үүсгэх", "Юу ч биш, амрах үе"], correctAnswer: "Нас барагсдын төлөөх ариун сүмийн ажил" },
                    { id: 2105, type: "TRUE_FALSE", question: "Итгэлийн зүйлс 10-ын дагуу, дэлхий диваажингийн алдраа хүлээн авна.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Нэгж 8: Сүмийн Түүх ба Пионерууд",
        description: "Өрнө рүү хийсэн аялал ба Сионыг байгуулсан нь.",
        color: "bg-[#ff9600]",
        levels: [
            {
                id: "history-1",
                title: "Өрнө рүү нүүсэн нь",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 2201, type: "MULTIPLE_CHOICE", question: "Анхны пионеруудын бүлэг хэдэн онд Солт Лэйк хөндийд орж ирсэн бэ?", options: ["1847", "1830", "1820", "1850"], correctAnswer: "1847" },
                    { id: 2202, type: "MULTIPLE_CHOICE", question: "Пионеруудыг Солт Лэйк хөндий рүү хэн удирдаж ирсэн бэ?", options: ["Бригам Янг", "Иосеф Смит", "Жон Тайлор", "Вилфорд Вудрэфф"], correctAnswer: "Бригам Янг" },
                    { id: 2203, type: "TRUE_FALSE", question: "Пионерууд шинэ гэртээ хүрэхийн тулд 1000 гаруй миль зам туулсан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2204, type: "MULTIPLE_CHOICE", question: "Пионеруудын замын нэр юу байсан бэ?", options: ["Мормоны зам", "Орегоны зам", "Санта Фе зам", "Торгоны зам"], correctAnswer: "Мормоны зам" },
                    { id: 2205, type: "TRUE_FALSE", question: "Олон пионерууд тэргэнцэр ашиглан ачаа бараагаа тал хээрээр чирсэн.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "history-2",
                title: "Сионыг байгуулах нь",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "40%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 2301, type: "MULTIPLE_CHOICE", question: "Аль ариун сүмийг барихад 40 жил зарцуулсан бэ?", options: ["Солт Лэйк ариун сүм", "Киртланд ариун сүм", "Наву ариун сүм", "Манти ариун сүм"], correctAnswer: "Солт Лэйк ариун сүм" },
                    { id: 2302, type: "TRUE_FALSE", question: "Халамжийн Нийгэмлэг Навуд зохион байгуулагдсан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2303, type: "MULTIPLE_CHOICE", question: "Халамжийн Нийгэмлэгийн анхны ерөнхийлөгч хэн байсан бэ?", options: ["Эмма Смит", "Элиза Р. Снөү", "Люси Мак Смит", "Зина Д. Х. Янг"], correctAnswer: "Эмма Смит" },
                    { id: 2304, type: "MULTIPLE_CHOICE", question: "Солт Лэйк хотын аль барилга акустикаараа алдартай vэ?", options: ["Табернакл", "Конференц төв", "Beehive House", "Lion House"], correctAnswer: "Табернакл" },
                    { id: 2305, type: "TRUE_FALSE", question: "Сүм 1830 оны 4-р сарын 6-нд зохион байгуулагдсан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "history-3",
                title: "Дэлхий даяарх өсөлт",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "60%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 2401, type: "MULTIPLE_CHOICE", question: "Сүмийн анхны олон улсын номлол хаана байсан бэ?", options: ["Их Британи", "Канад", "Герман", "Япон"], correctAnswer: "Их Британи" },
                    { id: 2402, type: "TRUE_FALSE", question: "Сүм дэлхийн бараг бүх улсад гишүүдтэй.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2403, type: "MULTIPLE_CHOICE", question: "Сүм хэдэн онд 10 сая гишүүнтэй болсон бэ?", options: ["1997", "1980", "2010", "2020"], correctAnswer: "1997" },
                    { id: 2404, type: "MULTIPLE_CHOICE", question: "'Би бол Мормон' аяныг ямар онцлох нэрээр сольсон бэ?", options: ["Есүс Христийн Сүм", "Хожмын үеийн гэгээнтнүүд", "Сэргээлт", "Христэд итгэх итгэл"], correctAnswer: "Есүс Христийн Сүм" },
                    { id: 2405, type: "TRUE_FALSE", question: "Европ дахь анхны ариун сүм Швейцарьт баригдсан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Нэгж 9: Сайн Мэдээгээр Амьдрах",
        description: "Сайн мэдээний зарчмуудыг өдөр тутмын амьдралдаа хэрэгжүүлэх.",
        color: "bg-[#1cb0f6]",
        levels: [
            {
                id: "living-1",
                title: "Мэргэн ухааны үг",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "55%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 2501, type: "MULTIPLE_CHOICE", question: "Сургаал ба Гэрээний аль хэсэгт Мэргэн ухааны үг байдаг вэ?", options: ["Хэсэг 89", "Хэсэг 1", "Хэсэг 76", "Хэсэг 121"], correctAnswer: "Хэсэг 89" },
                    { id: 2502, type: "TRUE_FALSE", question: "Мэргэн ухааны үг нь эрүүл өвс ургамал, үр тариа хэрэглэхийг дэмждэг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2503, type: "MULTIPLE_CHOICE", question: "Мэргэн ухааны үгэнд ямар бодисыг тусгайлан хориглосон бэ?", options: ["Согтууруулах ундаа", "Ус", "Сүү", "Жүүс"], correctAnswer: "Согтууруулах ундаа" },
                    { id: 2504, type: "MULTIPLE_CHOICE", question: "Мэргэн ухааны үгийг дагадаг хүмүүс юу олно гэж Их Эзэн амласан бэ?", options: ["Мэргэн ухаан ба мэдлэгийн агуу эрдэнэс", "Баялаг", "Алдар нэр", "Супер хүч"], correctAnswer: "Мэргэн ухаан ба мэдлэгийн агуу эрдэнэс" },
                    { id: 2505, type: "TRUE_FALSE", question: "Мэргэн ухааны үг нь 'амлалт бүхий зарчим' болгон өгөгдсөн.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "living-2",
                title: "Аравны нэг ба Мацгийн өргөл",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 2601, type: "MULTIPLE_CHOICE", question: "Бидний орлогын хэдэн хувь нь аравны нэг vэ?", options: ["10%", "5%", "20%", "1%"], correctAnswer: "10%" },
                    { id: 2602, type: "TRUE_FALSE", question: "Аравны нэгийн хөрөнгийг ариун сүм, цуглааны байр барихад зарцуулдаг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2603, type: "MULTIPLE_CHOICE", question: "Бид ихэвчлэн хэр давтамжтай мацаг барьж, мацгийн өргөл өгдөг вэ?", options: ["Сард нэг удаа", "Жилд нэг удаа", "Ням гараг бүр", "Хэзээ ч үгүй"], correctAnswer: "Сард нэг удаа" },
                    { id: 2604, type: "MULTIPLE_CHOICE", question: "Зөв мацаг гэж юу vэ?", options: ["Хоёр хоол алгасаж хоол ундгүй байх", "Зөвхөн талх идэх", "Нэг хоол алгасах", "Чихэр идэхгүй байх"], correctAnswer: "Хоёр хоол алгасаж хоол ундгүй байх" },
                    { id: 2605, type: "TRUE_FALSE", question: "Аравны нэгийн хууль Бошиглогч Иосеф Смитээр дамжуулан илчлэгдсэн.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "living-3",
                title: "Хувийн залбирал ба Судлал",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "50%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 2701, type: "MULTIPLE_CHOICE", question: "Залбирахдаа Тэнгэрлэг Эцэгт хэрхэн хандах ёстой вэ?", options: ["Хүндэтгэл ба хайраар", "Энгийн найз шиг", "Зөвхөн албан ёсны цолоор", "Хашхирч"], correctAnswer: "Хүндэтгэл ба хайраар" },
                    { id: 2702, type: "TRUE_FALSE", question: "Бид өглөө, орой бүр залбирах ёстой.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2703, type: "MULTIPLE_CHOICE", question: "Нифай биднийг Христийн үгсийг яах ёстой гэж хэлсэн бэ?", options: ["Наршин идэх", "Нэг удаа унших", "Үл тоомсорлох", "Амсах"], correctAnswer: "Наршин идэх" },
                    { id: 2704, type: "MULTIPLE_CHOICE", question: "Христийн үгсийг хаанаас олж болох вэ?", options: ["Судрууд болон бошиглогчдоос", "Зөвхөн хуучин номноос", "Хаанаас ч үгүй", "Зөвхөн өөрийн бодлоос"], correctAnswer: "Судрууд болон бошиглогчдоос" },
                    { id: 2705, type: "TRUE_FALSE", question: "Чин сэтгэлийн залбирал нь бидэнд хувийн илчлэлт авахад тусалдаг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Нэгж 10: Үйлчлэл ба Энэрэл",
        description: "Бусдад үйлчилснээр Христийн цэвэр хайрыг хөгжүүлэх нь.",
        color: "bg-[#ce82ff]",
        levels: [
            {
                id: "service-1",
                title: "Үйлчлэлийн сүнс",
                totalQuestions: 5,
                iconType: "star",
                position: { top: "50px", left: "50%" },
                status: "LOCKED",
                xpReward: 10,
                questions: [
                    { id: 2801, type: "MULTIPLE_CHOICE", question: "Үйлчлэлийн хамгийн агуу жишээ хэн бэ?", options: ["Есүс Христ", "Бригам Янг", "Иосеф Смит", "Нифай"], correctAnswer: "Есүс Христ" },
                    { id: 2802, type: "TRUE_FALSE", question: "Бусдад үйлчлэх нь Бурханыг хайрлах хайраа харуулах нэг арга зам юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2803, type: "MULTIPLE_CHOICE", question: "Сүүлчийн зоогийн үеэр Есүс төлөөлөгчдөдөө ямар байдлаар үйлчилсэн бэ?", options: ["Хөлийг нь угаасан", "Алтан зоос өгсөн", "Байшин барьж өгсөн", "Стейк хийж өгсөн"], correctAnswer: "Хөлийг нь угаасан" },
                    { id: 2804, type: "MULTIPLE_CHOICE", question: "Христийн үйлчлэлийн үндсэн сэдэл юу вэ?", options: ["Бурхан ба хүмүүсийг хайрлах хайр", "Бусдад харагдах", "Шагнал авах", "Алдартай болох"], correctAnswer: "Бурхан ба хүмүүсийг хайрлах хайр" },
                    { id: 2805, type: "TRUE_FALSE", question: "Жижигхэн сайхан сэтгэлийн үйлдлүүд ч үйлчлэлд тооцогдоно.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "service-2",
                title: "Христийн цэвэр хайр",
                totalQuestions: 5,
                iconType: "book",
                position: { top: "160px", left: "45%" },
                status: "LOCKED",
                xpReward: 15,
                questions: [
                    { id: 2901, type: "MULTIPLE_CHOICE", question: "Моронайн хэлснээр энэрэл гэж юу вэ?", options: ["Христийн цэвэр хайр", "Мөнгө өгөх", "Сайхан ааш гаргах", "Сүмд явах"], correctAnswer: "Христийн цэвэр хайр" },
                    { id: 2902, type: "TRUE_FALSE", question: "Энэрэл хэзээ ч барагдашгүй.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 2903, type: "MULTIPLE_CHOICE", question: "Энэрлийн нэг шинж чанар нь юу вэ?", options: ["Энэ нь эелдэг бөгөөд өөрийнхийгөө эрж хайдаггүй", "Энэ нь бардам", "Энэ нь амархан уурладаг", "Энэ нь атаархдаг"], correctAnswer: "Энэ нь эелдэг бөгөөд өөрийнхийгөө эрж хайдаггүй" },
                    { id: 2904, type: "MULTIPLE_CHOICE", question: "Бид юугаар дүүрэхийн тулд залбирах ёстой vэ?", options: ["Энэхүү хайраар (энэрэл)", "Хоол", "Зөвхөн мэдлэг", "Хүч"], correctAnswer: "Энэхүү хайраар (энэрэл)" },
                    { id: 2905, type: "TRUE_FALSE", question: "Энэрэл бол Бурханы бүх бэлгүүдээс хамгийн агуу нь юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            },
            {
                id: "service-3",
                title: "Ургацын хууль",
                totalQuestions: 5,
                iconType: "trophy",
                position: { top: "270px", left: "55%" },
                status: "LOCKED",
                xpReward: 20,
                questions: [
                    { id: 3001, type: "MULTIPLE_CHOICE", question: "Бид юуг хурааж авдаг вэ?", options: ["Юу тарьсан түүнийгээ", "Хүссэн бүхнээ", "Юу ч биш", "Зөвхөн буудай"], correctAnswer: "Юу тарьсан түүнийгээ" },
                    { id: 3002, type: "TRUE_FALSE", question: "Хэрэв бид сайн үр таривал сайн үр жимс хураах болно.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3003, type: "MULTIPLE_CHOICE", question: "Галат 6:9-д 'Сайныг үйлдэхдээ...' гэж юу гэж хэлсэн бэ?", options: ["Цөхрөхгүй байцгаая", "Унтацгаая", "Идэцгээе", "Гүйцгээе"], correctAnswer: "Цөхрөхгүй байцгаая" },
                    { id: 3004, type: "MULTIPLE_CHOICE", question: "Итгэлтэй амьдралын эцсийн шагнал юу вэ?", options: ["Мөнх Амьдрал", "Том байшин", "Алтан медаль", "Шинэ машин"], correctAnswer: "Мөнх Амьдрал" },
                    { id: 3005, type: "TRUE_FALSE", question: "Их Эзэн хүн бүрийг үйлсийнх нь дагуу шагнах болно.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Нэгж 11: Сүмийн Зохион Байгуулалт",
        description: "Халиун, гадас болон дэлхий даяарх Сүм хэрхэн зохион байгуулагддагийг ойлгох.",
        color: "bg-[#58cc02]",
        levels: [
            {
                id: "org-1", title: "Гадас ба Халиун", totalQuestions: 3, iconType: "star", position: { top: "50px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3101, type: "MULTIPLE_CHOICE", question: "Хэд хэдэн халиуны нэгдлийг юу гэж нэрлэдэг вэ?", options: ["Гадас", "Салбар", "Бүлэг", "Бүс"], correctAnswer: "Гадас" },
                    { id: 3102, type: "TRUE_FALSE", question: "Халиун бол гишүүдийн орон нутгийн цуглаан юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3103, type: "MULTIPLE_CHOICE", question: "Халиуныг хэн удирддаг вэ?", options: ["Бишоп", "Гадасны ерөнхийлөгч", "Номлолын ерөнхийлөгч", "Ахлагч"], correctAnswer: "Бишоп" }
                ]
            },
            {
                id: "org-2", title: "Бишопууд", totalQuestions: 3, iconType: "book", position: { top: "140px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3201, type: "MULTIPLE_CHOICE", question: "Бишоп хэдэн зөвлөхтэй вэ?", options: ["2", "1", "3", "12"], correctAnswer: "2" },
                    { id: 3202, type: "TRUE_FALSE", question: "Бишоп бол халиуны тэргүүлэх дээд прист юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3203, type: "MULTIPLE_CHOICE", question: "Халиуны 'эцэг' гэж хэнийг хэлдэг вэ?", options: ["Бишоп", "Бичээч", "Дикон", "Багш"], correctAnswer: "Бишоп" }
                ]
            },
            {
                id: "org-3", title: "Дуудлага", totalQuestions: 3, iconType: "star", position: { top: "230px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3301, type: "TRUE_FALSE", question: "'Дуудлага' гэдэг нь Сүмд үйлчлэх томилолт юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3302, type: "MULTIPLE_CHOICE", question: "Халиунд дуудлагыг хэн өгдөг вэ?", options: ["Бишопын зөвлөл", "Зөвхөн Бошиглогч", "Хүүхдийн хэсгийнхэн", "Хөршүүд"], correctAnswer: "Бишопын зөвлөл" },
                    { id: 3303, type: "MULTIPLE_CHOICE", question: "Дуудлагад үйлчлэх нь гол төлөв...", options: ["Сайн дурынх", "Цалинтай", "Албадан", "Нэр төр хөөцөлдсөн"], correctAnswer: "Сайн дурынх" }
                ]
            },
            {
                id: "org-4", title: "Дэмжин батлах", totalQuestions: 3, iconType: "book", position: { top: "320px", left: "50%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3401, type: "MULTIPLE_CHOICE", question: "Гишүүд шинэ дуудлагыг хэрхэн дэмждэг вэ?", options: ["Баруун гараа өргөж", "Алга ташиж", "Хашхирч", "Санал хурааж"], correctAnswer: "Баруун гараа өргөж" },
                    { id: 3402, type: "TRUE_FALSE", question: "Дэмжин батлах нь тухайн хүнийг дэмжиж, туслах амлалт юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3403, type: "MULTIPLE_CHOICE", question: "Дэмжин батлагдсаны дараа гишүүнийг ихэвчлэн...", options: ["Онцгойлон адисалдаг", "Төгсгөдөг", "Тушаал дэвшүүлдэг", "Тэтгэвэрт гаргадаг"], correctAnswer: "Онцгойлон адисалдаг" }
                ]
            },
            {
                id: "org-5", title: "Чуулгууд", totalQuestions: 3, iconType: "star", position: { top: "410px", left: "40%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3501, type: "MULTIPLE_CHOICE", question: "Санваартнуудын зохион байгуулалттай хэсгийг юу гэдэг вэ?", options: ["Чуулга", "Анги", "Лиг", "Баг"], correctAnswer: "Чуулга" },
                    { id: 3502, type: "TRUE_FALSE", question: "Дикон, Багш, Пристүүд өөрсдийн чуулгатай байдаг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3503, type: "MULTIPLE_CHOICE", question: "Диконы чуулгыг хэн удирддаг вэ?", options: ["Чуулгын ерөнхийлөгч", "Бишоп", "Ахлагч", "Дээд прист"], correctAnswer: "Чуулгын ерөнхийлөгч" }
                ]
            },
            {
                id: "org-6", title: "Халамжийн Нийгэмлэг", totalQuestions: 3, iconType: "book", position: { top: "500px", left: "60%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3601, type: "TRUE_FALSE", question: "Халамжийн Нийгэмлэг нь Сүмийн эмэгтэйчүүдэд зориулагдсан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3602, type: "MULTIPLE_CHOICE", question: "Халамжийн Нийгэмлэгийн уриа юу вэ?", options: ["Энэрэл хэзээ ч барагдашгүй", "Бэлэн бай", "Сион нэгдүгээрт", "Бие биенээ хайрла"], correctAnswer: "Энэрэл хэзээ ч барагдашгүй" },
                    { id: 3603, type: "MULTIPLE_CHOICE", question: "Халамжийн Нийгэмлэг анх аль хотод байгуулагдсан бэ?", options: ["Наву", "Киртланд", "Солт Лэйк", "Миссури"], correctAnswer: "Наву" }
                ]
            },
            {
                id: "org-7", title: "Залуучуудын хөтөлбөр", totalQuestions: 3, iconType: "star", position: { top: "590px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3701, type: "MULTIPLE_CHOICE", question: "Залуу эмэгтэйчүүд, залуу эрэгтэйчүүдийн хөтөлбөр ямар насныханд зориулагдсан бэ?", options: ["11-18", "5-10", "18-30", "0-3"], correctAnswer: "11-18" },
                    { id: 3702, type: "TRUE_FALSE", question: "Зорилго нь залуучуудад Христэд ирэхэд нь туслах явдал юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3703, type: "MULTIPLE_CHOICE", question: "Залуучуудын сэдэв хэр давтамжтай өөрчлөгддөг вэ?", options: ["Жил бүр", "Жил болгон", "Сар бүр", "Хэзээ ч үгүй"], correctAnswer: "Жил бүр" }
                ]
            },
            {
                id: "org-8", title: "Хүүхдийн хэсэг", totalQuestions: 3, iconType: "book", position: { top: "680px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 3801, type: "MULTIPLE_CHOICE", question: "Хүүхдийн хэсэг хэдэн нас хүртэлх хүүхдүүдэд зориулагдсан бэ?", options: ["11", "5", "8", "14"], correctAnswer: "11" },
                    { id: 3802, type: "TRUE_FALSE", question: "Хүүхдүүд Хүүхдийн хэсэгт 'Би Бурханы хүүхэд' дууг дуулдаг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3803, type: "MULTIPLE_CHOICE", question: "Хүүхдийн хэсгийн өнгөт сэдэв юутай холбоотой вэ?", options: ["Зөвийг Сонго (CTR)", "СҮХҮГ", "Сион", "Итгэл найдвар"], correctAnswer: "Зөвийг Сонго (CTR)" }
                ]
            },
            {
                id: "org-9", title: "Ерөнхий Чуулган", totalQuestions: 3, iconType: "star", position: { top: "770px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 3901, type: "MULTIPLE_CHOICE", question: "Ерөнхий чуулган жилд хэдэн удаа болдог вэ?", options: ["Хоёр", "Нэг", "Дөрөв", "Сар бүр"], correctAnswer: "Хоёр" },
                    { id: 3902, type: "TRUE_FALSE", question: "Чуулганы үеэр бид Бошиглогч болон Төлөөлөгчдийн үгийг сонсдог.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 3903, type: "MULTIPLE_CHOICE", question: "Чуулган ихэвчлэн аль саруудад болдог вэ?", options: ["4 ба 10-р сар", "1 ба 6-р сар", "3 ба 9-р сар", "5 ба 12-р сар"], correctAnswer: "4 ба 10-р сар" }
                ]
            },
            {
                id: "org-10", title: "Бошиглогч", totalQuestions: 3, iconType: "trophy", position: { top: "860px", left: "50%" }, status: "LOCKED", xpReward: 20, questions: [
                    { id: 4001, type: "MULTIPLE_CHOICE", question: "Дэлхий дээрх бүх Сүмийг хэн удирддаг вэ?", options: ["Бошиглогч", "Бишоп", "Ахлагч", "Дикон"], correctAnswer: "Бошиглогч" },
                    { id: 4002, type: "TRUE_FALSE", question: "Бошиглогч бол Сүмийн ерөнхийлөгч юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4003, type: "MULTIPLE_CHOICE", question: "Бошиглогчийг ... Чуулга дэмждэг.", options: ["Арван хоёр Төлөөлөгчийн", "Далангийн", "Ахлагчдын", "Диконуудын"], correctAnswer: "Арван хоёр Төлөөлөгчийн" }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Нэгж 12: Гэр Бүл ба Гэр Орон",
        description: "Сайн мэдээний зарчмуудаар гэр бүлээ хүчирхэгжүүлэх нь.",
        color: "bg-[#ce82ff]",
        levels: [
            {
                id: "fam-1", title: "Гэр бүлийн тунхаглал", totalQuestions: 3, iconType: "star", position: { top: "50px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4101, type: "MULTIPLE_CHOICE", question: "Гэр бүлийн тухай албан ёсны баримт бичгийг юу гэж нэрлэдэг вэ?", options: ["Гэр бүлийн тунхаглал", "Гэр бүлийн хууль", "Гэр бүлийн ном", "Гэр бүлийн удирдамж"], correctAnswer: "Гэр бүлийн тунхаглал" },
                    { id: 4102, type: "TRUE_FALSE", question: "Гэрлэлт бол Бурханаас томилогдсон зүйл юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4103, type: "MULTIPLE_CHOICE", question: "Сайн мэдээг хамгийн түрүүнд хаана заах ёстой вэ?", options: ["Гэртээ", "Сургууль дээр", "Дэлгүүрт", "Паркад"], correctAnswer: "Гэртээ" }
                ]
            },
            {
                id: "fam-2", title: "Ариун Сүмийн Гэрлэлт", totalQuestions: 3, iconType: "book", position: { top: "140px", left: "45%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4201, type: "TRUE_FALSE", question: "Ариун сүмийн гэрлэлт нь энэ амьдрал болон мөнхөд зориулагдсан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4202, type: "MULTIPLE_CHOICE", question: "Гэр бүлийг мөнхөд нэгтгэдэг ёслол юу вэ?", options: ["Лацдан холболт", "Баптисм", "Төгсөлт", "Төрсөн өдөр"], correctAnswer: "Лацдан холболт" },
                    { id: 4203, type: "MULTIPLE_CHOICE", question: "Лацдан холболт хаана болдог вэ?", options: ["Ариун Сүмд", "Цуглааны байранд", "Паркад", "Гэртээ"], correctAnswer: "Ариун Сүмд" }
                ]
            },
            {
                id: "fam-3", title: "Эцэг эх байх", totalQuestions: 3, iconType: "star", position: { top: "230px", left: "55%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4301, type: "MULTIPLE_CHOICE", question: "Эцэг эхчүүд хүүхдээ ... өсгөх ариун үүрэгтэй.", options: ["Хайр ба зөв шударга байдалд", "Айдас дотор", "Баян тансагт", "Уур хилэн дотор"], correctAnswer: "Хайр ба зөв шударга байдалд" },
                    { id: 4302, type: "TRUE_FALSE", question: "Хүүхдүүд бол Их Эзэний өв юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4303, type: "MULTIPLE_CHOICE", question: "Эцэг эхчүүд бие биедээ хэрхэн туслах ёстой вэ?", options: ["Тэгш эрхтэй хамтрагчийн хувьд", "Засгийн газраар", "Хэн ч биш", "Танихгүй хүмүүсээр"], correctAnswer: "Тэгш эрхтэй хамтрагчийн хувьд" }
                ]
            },
            {
                id: "fam-4", title: "Гэр бүлийн үдэш", totalQuestions: 3, iconType: "book", position: { top: "320px", left: "50%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4401, type: "MULTIPLE_CHOICE", question: "Долоо хоног бүр болдог гэр бүлийн цуглааныг юу гэдэг vэ?", options: ["Гэр бүлийн үдэш", "Гэр бүлийн яриа", "Гэр бүлийн тоглоом", "Гэр бүлийн үдэшлэг"], correctAnswer: "Гэр бүлийн үдэш" },
                    { id: 4402, type: "TRUE_FALSE", question: "Сүм Гэр бүлийн үдшийг Даваа гарагийн орой хийхийг зөвлөдөг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4403, type: "MULTIPLE_CHOICE", question: "Гэр бүлийн үдэшт ихэвчлэн юу багтдаг вэ?", options: ["Хичээл, залбирал ба үйл ажиллагаа", "Унтах", "Зөвхөн зурагт үзэх", "Маргалдах"], correctAnswer: "Хичээл, залбирал ба үйл ажиллагаа" }
                ]
            },
            {
                id: "fam-5", title: "Гэр бүлийн залбирал", totalQuestions: 3, iconType: "star", position: { top: "410px", left: "45%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4501, type: "MULTIPLE_CHOICE", question: "Гэр бүлээрээ хэр давтамжтай залбирах ёстой вэ?", options: ["Өдөр бүр (Өглөө, орой)", "Жилд нэг удаа", "Төрсөн өдрөөр", "Хэзээ ч үгүй"], correctAnswer: "Өдөр бүр (Өглөө, орой)" },
                    { id: 4502, type: "TRUE_FALSE", question: "Гэр бүлийн залбирал нь амар амгалан, эв нэгдлийг авчирдаг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4503, type: "MULTIPLE_CHOICE", question: "Гэр бүлийн залбирлыг хэн удирдах ёстой вэ?", options: ["Гэр бүлийн гишүүн бүр ээлжлэн", "Зөвхөн аав", "Зөвхөн ээж", "Зөвхөн хүүхдүүд"], correctAnswer: "Гэр бүлийн гишүүн бүр ээлжлэн" }
                ]
            },
            {
                id: "fam-6", title: "Эцэг эхээ хүндэтгэх", totalQuestions: 3, iconType: "book", position: { top: "500px", left: "55%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4601, type: "MULTIPLE_CHOICE", question: "Тав дахь тушаалд: '... хүндэтгэ' гэсэн байдаг.", options: ["Эцэг эхээ", "Хөршөө", "Өөрийгөө", "Найзыгаа"], correctAnswer: "Эцэг эхээ" },
                    { id: 4602, type: "TRUE_FALSE", question: "Эцэг эхийнхээ үгэнд орох нь хайраа харуулах нэг арга юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4603, type: "MULTIPLE_CHOICE", question: "Эцэг эхээ хүндэтгэх гэдэг нь юу гэсэн үг вэ?", options: ["Хүндэтгэл ба хайр үзүүлэх", "Үл тоомсорлох", "Тэдэнтэй маргах", "Тэднээс нуугдах"], correctAnswer: "Хүндэтгэл ба хайр үзүүлэх" }
                ]
            },
            {
                id: "fam-7", title: "Гэртээ энэрэнгүй байх", totalQuestions: 3, iconType: "star", position: { top: "590px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4701, type: "TRUE_FALSE", question: "Энэрэл гэрээс эхлэх ёстой.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4702, type: "MULTIPLE_CHOICE", question: "Ах дүү нартаа сайхан үг хэлэх нь ... нэг хэлбэр юм.", options: ["Энэрлийн", "Амин хувиа хичээх", "Бардамналын", "Уйтгарын"], correctAnswer: "Энэрлийн" },
                    { id: 4703, type: "MULTIPLE_CHOICE", question: "Есүс бидэнд бие биенээ Өөр шигээ ... заасан.", options: ["Хайрлахыг", "Сануулахыг", "Үл тоохыг", "Орхихыг"], correctAnswer: "Хайрлахыг" }
                ]
            },
            {
                id: "fam-8", title: "Өөртөө итгэлтэй байдал", totalQuestions: 3, iconType: "book", position: { top: "680px", left: "45%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 4801, type: "MULTIPLE_CHOICE", question: "Гэр бүлүүд ... байхын тулд хамтдаа ажиллах ёстой.", options: ["Өөртөө итгэлтэй (бие даасан)", "Баян", "Алдартай", "Хамааралтай"], correctAnswer: "Өөртөө итгэлтэй (бие даасан)" },
                    { id: 4802, type: "TRUE_FALSE", question: "Мөнгө хэмнэж сурах нь өөртөө итгэлтэй байдлын нэг хэсэг юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4803, type: "MULTIPLE_CHOICE", question: "Өөртөө итгэлтэй байх гэдэг нь өөрийн ... анхаарал тавих гэсэн үг.", options: ["Хэрэгцээнд", "Зөвхөн хүсэлд", "Хөршийн тэжээвэр амьтанд", "Видео тоглоомд"], correctAnswer: "Хэрэгцээнд" }
                ]
            },
            {
                id: "fam-9", title: "Өвөг дээдэс", totalQuestions: 3, iconType: "star", position: { top: "770px", left: "55%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 4901, type: "MULTIPLE_CHOICE", question: "Өвөг дээдэс гэж хэнийг хэлдэг вэ?", options: ["Биднээс өмнө амьдарч байсан гэр бүлийн гишүүд", "Хажуу хаалганы хөрш", "Бидний тэжээвэр амьтад", "Бидний найзууд"], correctAnswer: "Биднээс өмнө амьдарч байсан гэр бүлийн гишүүд" },
                    { id: 4902, type: "TRUE_FALSE", question: "Гэр бүлийн түүхийг сурч мэдэх нь биднийг язгуур үндэстэй маань холбодог.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 4903, type: "MULTIPLE_CHOICE", question: "Гэр бүлийн түүх нь бидэнд ... зөрийн зориулж нэр олоход тусалдаг.", options: ["Ариун сүмийн ажилд", "Ном бичихэд", "Кино хийхэд", "Тоглоом тоглоход"], correctAnswer: "Ариун сүмийн ажилд" }
                ]
            },
            {
                id: "fam-10", title: "Мөнхийн баяр баясгалан", totalQuestions: 3, iconType: "trophy", position: { top: "860px", left: "50%" }, status: "LOCKED", xpReward: 20, questions: [
                    { id: 5001, type: "TRUE_FALSE", question: "Гэр бүлүүдэд зориулсан Бурханы төлөвлөгөө нь бидний мөнхийн баяр баясгалангийн төлөө юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5002, type: "MULTIPLE_CHOICE", question: "Авралын төлөвлөгөөний зорилго нь ... Бурханд эргэж очих юм.", options: ["Гэр бүлээрээ", "Хуучин байрандаа", "Сар руу", "Ой руу"], correctAnswer: "Гэр бүлээрээ" },
                    { id: 5003, type: "MULTIPLE_CHOICE", question: "Гэр бүлүүд ... хамт байж чадна.", options: ["Мөнхөд", "Нэг жил", "Долоо хоног", "Хэзээ ч үгүй"], correctAnswer: "Мөнхөд" }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "Нэгж 13: Сайн Мэдээг Судлах Хэрэгслүүд",
        description: "Насан туршдаа суралцахад зориулсан хэрэгслээр өөрийгөө зэвсэглэх.",
        color: "bg-[#ff9600]",
        levels: [
            {
                id: "study-1", title: "Ариун Библи", totalQuestions: 3, iconType: "star", position: { top: "50px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5101, type: "MULTIPLE_CHOICE", question: "Библид Хуучин ба Шинэ ... багтдаг.", options: ["Гэрээ", "Бүлэг", "Шүлэг", "Түүх"], correctAnswer: "Гэрээ" },
                    { id: 5102, type: "TRUE_FALSE", question: "Библи бол Бурханы үг юм.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5103, type: "MULTIPLE_CHOICE", question: "Шинэ Гэрээнд ... амьдралын тухай өгүүлдэг.", options: ["Есүс Христийн", "Мосегийн", "Адамын", "Ноагийн"], correctAnswer: "Есүс Христийн" }
                ]
            },
            {
                id: "study-2", title: "Мормоны Ном", totalQuestions: 3, iconType: "book", position: { top: "140px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5201, type: "MULTIPLE_CHOICE", question: "Мормоны Ном бол ... өөр нэг гэрээ юм.", options: ["Есүс Христийн", "АНУ-ын", "Сарны", "Цэцэрлэгийн"], correctAnswer: "Есүс Христийн" },
                    { id: 5202, type: "TRUE_FALSE", question: "Үүнийг Иосеф Смит орчуулсан.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5203, type: "MULTIPLE_CHOICE", question: "Цэдгүүдийг хөтөлсөн гол бошиглогч хэн бэ?", options: ["Мормон", "Нифай", "Алма", "Аммон"], correctAnswer: "Мормон" }
                ]
            },
            {
                id: "study-3", title: "Судлах хэрэгслүүд", totalQuestions: 3, iconType: "star", position: { top: "230px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5301, type: "MULTIPLE_CHOICE", question: "Хуудасны доод талд байдаг жижиг тэмдэглэлүүд юу вэ?", options: ["Зүүлт тайлбар", "Гарчиг", "Нэр", "Зураг"], correctAnswer: "Зүүлт тайлбар" },
                    { id: 5302, type: "TRUE_FALSE", question: "Сэдэвчилсэн удирдамж нь судруудыг сэдвээр нь олоход тусалдаг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5303, type: "MULTIPLE_CHOICE", question: "Үгсийн утгыг хаанаас олж болох вэ?", options: ["Библийн толь бичиг", "Үлгэрийн ном", "Сэтгүүл", "Мэдээ"], correctAnswer: "Библийн толь бичиг" }
                ]
            },
            {
                id: "study-4", title: "Өдөр тутмын зуршил", totalQuestions: 3, iconType: "book", position: { top: "320px", left: "50%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5401, type: "MULTIPLE_CHOICE", question: "Бид судруудыг хэр давтамжтай судлах ёстой вэ?", options: ["Өдөр бүр", "Долоо хоног бүр", "Жил бүр", "Хэзээ ч үгүй"], correctAnswer: "Өдөр бүр" },
                    { id: 5402, type: "TRUE_FALSE", question: "Судлахад зориулж тодорхой цаг гаргах нь тустай.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5403, type: "MULTIPLE_CHOICE", question: "Судлахаасаа өмнө залбирах нь ... урьдаг.", options: ["Ариун Сүнсийг", "Нойр хүрэхийг", "Өлсөхийг", "Дуу чимээг"], correctAnswer: "Ариун Сүнсийг" }
                ]
            },
            {
                id: "study-5", title: "Сайн мэдээний номын сан", totalQuestions: 3, iconType: "star", position: { top: "410px", left: "40%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5501, type: "MULTIPLE_CHOICE", question: "Сүмийн суралцахад зориулсан албан ёсны аппликейшн юу вэ?", options: ["Сайн мэдээний номын сан", "Олон нийтийн сүлжээ", "Тоглоомын төв", "Мэдээний апп"], correctAnswer: "Сайн мэдээний номын сан" },
                    { id: 5502, type: "TRUE_FALSE", question: "Аппликейшн дээр тэмдэглэл хөтөлж, тодруулж болдог.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5503, type: "MULTIPLE_CHOICE", question: "Аппликейшнд юу багтдаг вэ?", options: ["Судрууд, гарын авлага, хөгжим", "Зөвхөн тоглоом", "Юу ч байхгүй", "Зөвхөн зураг"], correctAnswer: "Судрууд, гарын авлага, хөгжим" }
                ]
            },
            {
                id: "study-6", title: "Үнэнийг хэрэгжүүлэх", totalQuestions: 3, iconType: "book", position: { top: "500px", left: "60%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5601, type: "MULTIPLE_CHOICE", question: "Нифай судруудыг ... 'зүйрлэн' үзээрэй гэж хэлсэн.", options: ["Өөртөө", "Танихгүй хүнд", "Хэнд ч биш", "Амьтдад"], correctAnswer: "Өөртөө" },
                    { id: 5602, type: "TRUE_FALSE", question: "Судрууд бидэнд амьдралын асуудлуудад хариулт өгдөг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5603, type: "MULTIPLE_CHOICE", question: "Суралцсан зүйлээ ашиглахад ямар зарчим тусалдаг вэ?", options: ["Хэрэгжүүлэх", "Мартах", "Үл тоомсорлох", "Эргэлзэх"], correctAnswer: "Хэрэгжүүлэх" }
                ]
            },
            {
                id: "study-7", title: "Тэмдэглэл хөтлөх", totalQuestions: 3, iconType: "star", position: { top: "590px", left: "50%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5701, type: "MULTIPLE_CHOICE", question: "Сүнслэг мэдрэмжээ бичиж тэмдэглэхийг юу гэдэг вэ?", options: ["Өдрийн тэмдэглэл", "Хүнсний жагсаалт", "Мессеж", "Тасалбар"], correctAnswer: "Өдрийн тэмдэглэл" },
                    { id: 5702, type: "TRUE_FALSE", question: "Бошиглогчид өдрийн тэмдэглэл хөтлөхийг дэмждэг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5703, type: "MULTIPLE_CHOICE", question: "Тэмдэглэл хөтлөх нь Бурханы ... санахад тусалдаг.", options: ["Нигүүлсэл ба адислалуудыг", "Уур хилэнг", "Зөвхөн дүрмийг", "Зай хол байдлыг"], correctAnswer: "Нигүүлсэл ба адислалуудыг" }
                ]
            },
            {
                id: "study-8", title: "Бусдад заах", totalQuestions: 3, iconType: "book", position: { top: "680px", left: "40%" }, status: "LOCKED", xpReward: 15, questions: [
                    { id: 5801, type: "MULTIPLE_CHOICE", question: "Суралцах хамгийн сайн аргуудын нэг юу вэ?", options: ["Бусдад заах", "Унтах", "Гүйх", "Юу ч хийхгүй байх"], correctAnswer: "Бусдад заах" },
                    { id: 5802, type: "TRUE_FALSE", question: "Гэрчлэлээ хуваалцах нь түүнийг хүчирхэгжүүлдэг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5803, type: "MULTIPLE_CHOICE", question: "Бид сурсан зүйлээ хэнтэй хуваалцах ёстой вэ?", options: ["Гэр бүл, найзуудтайгаа", "Хэнтэй ч биш", "Зөвхөн дайсантайгаа", "Зөвхөн танихгүй хүмүүстэй"], correctAnswer: "Гэр бүл, найзуудтайгаа" }
                ]
            },
            {
                id: "study-9", title: "Насан туршийн суралцагч", totalQuestions: 3, iconType: "star", position: { top: "770px", left: "60%" }, status: "LOCKED", xpReward: 10, questions: [
                    { id: 5901, type: "TRUE_FALSE", question: "Сайн мэдээг судлах нь бидний амьдралын туршид үргэлжлэх ёстой.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 5902, type: "MULTIPLE_CHOICE", question: "Бид суралцах ба ... суралцахыг эрэлхийлэх ёстой.", options: ["Итгэлээр", "Азаар", "Мөнгөөр", "Нойроор"], correctAnswer: "Итгэлээр" },
                    { id: 5903, type: "MULTIPLE_CHOICE", question: "Судалснаар бид хэний дуу хоолойг сонсож сурах ёстой вэ?", options: ["Их Эзэний", "Ертөнцийн", "Олон түмний", "Радиогийн"], correctAnswer: "Их Эзэний" }
                ]
            },
            {
                id: "study-10", title: "Эцсийн зорилго", totalQuestions: 3, iconType: "trophy", position: { top: "860px", left: "50%" }, status: "LOCKED", xpReward: 20, questions: [
                    { id: 6001, type: "MULTIPLE_CHOICE", question: "Бүх судалгааны зорилго нь ... илүү адилхан болох явдал юм.", options: ["Есүс Христтэй", "Алдартай хүнтэй", "Баян хүнтэй", "Зөвхөн өөртэйгөө"], correctAnswer: "Есүс Христтэй" },
                    { id: 6002, type: "TRUE_FALSE", question: "Судрууд биднийг мөнх амьдрал руу хөтөлдөг.", options: ["Үнэн", "Худал"], correctAnswer: "Үнэн" },
                    { id: 6003, type: "MULTIPLE_CHOICE", question: "Судлал нь сууриа ... дээр барихад тусалдаг.", options: ["Хад (Христ) дээр", "Элсэн дээр", "Усан дээр", "Агаар дээр"], correctAnswer: "Хад (Христ) дээр" }
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
