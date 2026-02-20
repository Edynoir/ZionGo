
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
                        correctAnswer: "Missouri"
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
                    {
                        id: 2105,
                        type: "TRUE_FALSE",
                        question: "According to Article of Faith 10, the earth will receive its paradisiacal glory during the Millennium.",
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
                        correctAnswer: "Миссури"
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
    }
];

export const getUnits = (lang: Language): Unit[] => {
    return lang === 'mn' ? mongolianUnits : englishUnits;
};

// For backward compatibility while refactoring
export const units = englishUnits;
