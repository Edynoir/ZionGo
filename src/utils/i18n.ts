// Translation/i18n utilities

export type Language = 'en' | 'mn';

type TranslationKeys = {
    // Navigation
    'nav.learn': string;
    'nav.mastery': string;
    'nav.leaderboard': string;
    'nav.shop': string;
    'nav.profile': string;
    'nav.more': string;

    // Settings
    'settings.title': string;
    'settings.subtitle': string;
    'settings.darkMode': string;
    'settings.darkModeDesc': string;
    'settings.notifications': string;
    'settings.notificationsDesc': string;
    'settings.fontSize': string;
    'settings.fontSizeDesc': string;
    'settings.language': string;
    'settings.languageDesc': string;
    'settings.small': string;
    'settings.medium': string;
    'settings.large': string;
    'settings.english': string;
    'settings.mongolian': string;
    'settings.unsavedChanges': string;
    'settings.unsavedChangesDesc': string;
    'settings.saveSuccess': string;
    'settings.cancel': string;
    'settings.save': string;

    // Profile
    'profile.statistics': string;
    'profile.dayStreak': string;
    'profile.totalXP': string;
    'profile.getStarted': string;
    'profile.signOut': string;
    'profile.joined': string;

    // Shop
    'shop.title': string;
    'shop.gems': string;
    'shop.refillHearts': string;
    'shop.refillHeartsDesc': string;
    'shop.streakFreeze': string;
    'shop.streakFreezeDesc': string;
    'shop.doubleNothing': string;
    'shop.doubleNothingDesc': string;

    // Leaderboard
    'leaderboard.title': string;
    'leaderboard.subtitle': string;
    'leaderboard.noUsers': string;
    'leaderboard.anonymous': string;

    // Doctrinal Mastery
    'mastery.title': string;
    'mastery.allVolumes': string;
    'mastery.oldTestament': string;
    'mastery.newTestament': string;
    'mastery.bookOfMormon': string;
    'mastery.doctrineCovenants': string;
    'mastery.study': string;
    'mastery.flashcards': string;
    'mastery.quiz': string;
    'mastery.clickToFlip': string;
    'mastery.reference': string;
    'mastery.scripture': string;
    'mastery.showFront': string;
    'mastery.showBack': string;
    'mastery.quizComplete': string;
    'mastery.score': string;
    'mastery.of': string;
    'mastery.playAgain': string;
    'mastery.identifyReference': string;
    'mastery.question': string;
    'mastery.cardCount': string;
    'mastery.noFlashcards': string;
    'mastery.notEnoughQuiz': string;

    // Common
    'common.loading': string;
    'common.check': string;
    'common.continue': string;
    'common.correct': string;
    'common.incorrect': string;
    'common.correctAnswer': string;
};

const translations: Record<Language, TranslationKeys> = {
    en: {
        // Navigation
        'nav.learn': 'Learn',
        'nav.mastery': 'Mastery',
        'nav.leaderboard': 'Leaderboard',
        'nav.shop': 'Shop',
        'nav.profile': 'Profile',
        'nav.more': 'More',

        // Settings
        'settings.title': 'Settings',
        'settings.subtitle': 'Customize your learning experience',
        'settings.darkMode': 'Dark Mode',
        'settings.darkModeDesc': 'Toggle dark theme',
        'settings.notifications': 'Notifications',
        'settings.notificationsDesc': 'Get learning reminders',
        'settings.fontSize': 'Font Size',
        'settings.fontSizeDesc': 'Adjust text size',
        'settings.language': 'Language',
        'settings.languageDesc': 'Select your preferred language',
        'settings.small': 'small',
        'settings.medium': 'medium',
        'settings.large': 'large',
        'settings.english': 'English',
        'settings.mongolian': 'Mongolian',
        'settings.unsavedChanges': 'Unsaved Changes',
        'settings.unsavedChangesDesc': 'You have unsaved changes. Click "Save Settings" to apply them.',
        'settings.saveSuccess': 'Settings saved successfully!',
        'settings.cancel': 'Cancel',
        'settings.save': 'Save Settings',

        // Profile
        'profile.statistics': 'Statistics',
        'profile.dayStreak': 'Day Streak',
        'profile.totalXP': 'Total XP',
        'profile.getStarted': 'Get Started',
        'profile.signOut': 'Sign Out',
        'profile.joined': 'Joined February 2026',

        // Shop
        'shop.title': 'Shop',
        'shop.gems': 'Gems',
        'shop.refillHearts': 'Refill Hearts',
        'shop.refillHeartsDesc': 'Get full health so you can worry less about making mistakes.',
        'shop.streakFreeze': 'Streak Freeze',
        'shop.streakFreezeDesc': 'Streak Freeze allows your streak to remain in place for one full day of inactivity.',
        'shop.doubleNothing': 'Double or Nothing',
        'shop.doubleNothingDesc': 'Attempt to double your 50 gem wager by maintaining a 7 day streak.',

        // Leaderboard
        'leaderboard.title': 'Amethyst League',
        'leaderboard.subtitle': 'Top 10 advance to the next league',
        'leaderboard.noUsers': 'No users found yet. Be the first!',
        'leaderboard.anonymous': 'Anonymous User',

        // Doctrinal Mastery
        'mastery.title': 'Doctrinal Mastery',
        'mastery.allVolumes': 'All Volumes',
        'mastery.oldTestament': 'Old Testament',
        'mastery.newTestament': 'New Testament',
        'mastery.bookOfMormon': 'Book of Mormon',
        'mastery.doctrineCovenants': 'Doctrine & Covenants',
        'mastery.study': 'Study',
        'mastery.flashcards': 'Flashcards',
        'mastery.quiz': 'Quiz',
        'mastery.clickToFlip': '(Click to flip)',
        'mastery.reference': 'Reference',
        'mastery.scripture': 'Scripture',
        'mastery.showFront': 'Show Front',
        'mastery.showBack': 'Show Back',
        'mastery.quizComplete': 'Quiz Complete!',
        'mastery.score': 'You scored',
        'mastery.of': 'out of',
        'mastery.playAgain': 'Play Again',
        'mastery.identifyReference': 'Identify the Reference',
        'mastery.question': 'Question',
        'mastery.cardCount': 'Card',
        'mastery.noFlashcards': 'No flashcards selected.',
        'mastery.notEnoughQuiz': 'Not enough data for quiz (need at least 4 items).',

        // Common
        'common.loading': 'Loading...',
        'common.check': 'CHECK',
        'common.continue': 'CONTINUE',
        'common.correct': 'Nicely done!',
        'common.incorrect': 'Incorrect!',
        'common.correctAnswer': 'Correct answer',
    },
    mn: {
        // Navigation
        'nav.learn': 'Сурах',
        'nav.mastery': 'Сургааль',
        'nav.leaderboard': 'Тэргүүлэгчид',
        'nav.shop': 'Дэлгүүр',
        'nav.profile': 'Профайл',
        'nav.more': 'Бусад',

        // Settings
        'settings.title': 'Тохиргоо',
        'settings.subtitle': 'Сургалтын туршлагаа тохируулах',
        'settings.darkMode': 'Харанхуй горим',
        'settings.darkModeDesc': 'Харанхуй сэдэв асаах',
        'settings.notifications': 'Мэдэгдэл',
        'settings.notificationsDesc': 'Сургалтын сануулга авах',
        'settings.fontSize': 'Үсгийн хэмжээ',
        'settings.fontSizeDesc': 'Текстийн хэмжээ тохируулах',
        'settings.language': 'Хэл',
        'settings.languageDesc': 'Хүссэн хэлээ сонгох',
        'settings.small': 'жижиг',
        'settings.medium': 'дунд',
        'settings.large': 'том',
        'settings.english': 'Англи',
        'settings.mongolian': 'Монгол',
        'settings.unsavedChanges': 'Хадгалаагүй өөрчлөлт',
        'settings.unsavedChangesDesc': 'Та хадгалаагүй өөрчлөлттэй байна. Хадгалахын тулд "Тохиргоо хадгалах" дарна уу.',
        'settings.saveSuccess': 'Тохиргоо амжилттай хадгалагдлаа!',
        'settings.cancel': 'Цуцлах',
        'settings.save': 'Тохиргоо хадгалах',

        // Profile
        'profile.statistics': 'Статистик',
        'profile.dayStreak': 'Өдрийн цуваа',
        'profile.totalXP': 'Нийт XP',
        'profile.getStarted': 'Эхлэх',
        'profile.signOut': 'Гарах',
        'profile.joined': '2026 оны 2-р сард нэгдсэн',

        // Shop
        'shop.title': 'Дэлгүүр',
        'shop.gems': 'Эрдэнийн чулуу',
        'shop.refillHearts': 'Зүрх дүүргэх',
        'shop.refillHeartsDesc': 'Бүрэн эрүүл мэндээ авч, алдаа хийхээс санаа зовохгүй байх.',
        'shop.streakFreeze': 'Цуваа хөлдөөх',
        'shop.streakFreezeDesc': 'Таны цуваа нэг өдрийн идэвхгүй байдлын үед хэвээр үлдэх боломжтой.',
        'shop.doubleNothing': 'Давхар эсвэл юу ч үгүй',
        'shop.doubleNothingDesc': '7 хоногийн цувааг хадгалж, 50 эрдэнийн чулууг давхарлах оролдлого.',

        // Leaderboard
        'leaderboard.title': 'Аметист лиг',
        'leaderboard.subtitle': 'Эхний 10 дараагийн лиг рүү шилжинэ',
        'leaderboard.noUsers': 'Одоогоор хэрэглэгч байхгүй байна. Анхны хүн болоорой!',
        'leaderboard.anonymous': 'Нэргүй хэрэглэгч',

        // Doctrinal Mastery
        'mastery.title': 'Сургаалын ном',
        'mastery.allVolumes': 'Бүх боть',
        'mastery.oldTestament': 'Хуучин гэрээ',
        'mastery.newTestament': 'Шинэ гэрээ',
        'mastery.bookOfMormon': 'Мормоны ном',
        'mastery.doctrineCovenants': 'Сургаал ба гэрээ',
        'mastery.study': 'Судлах',
        'mastery.flashcards': 'Карт',
        'mastery.quiz': 'Шалгалт',
        'mastery.clickToFlip': '(Эргүүлэхийн тулд дарна уу)',
        'mastery.reference': 'Лавлагаа',
        'mastery.scripture': 'Судар',
        'mastery.showFront': 'Урд тал харуулах',
        'mastery.showBack': 'Ар тал харуулах',
        'mastery.quizComplete': 'Шалгалт дууслаа!',
        'mastery.score': 'Та авсан оноо',
        'mastery.of': '-н',
        'mastery.playAgain': 'Дахин тоглох',
        'mastery.identifyReference': 'Лавлагааг тодорхойлох',
        'mastery.question': 'Асуулт',
        'mastery.cardCount': 'Карт',
        'mastery.noFlashcards': 'Карт сонгоогүй байна.',
        'mastery.notEnoughQuiz': 'Шалгалт авахад хангалтгүй өгөгдөл (дор хаяж 4 зүйл хэрэгтэй).',

        // Common
        'common.loading': 'Ачаалж байна...',
        'common.check': 'ШАЛГАХ',
        'common.continue': 'ҮРГЭЛЖЛҮҮЛЭХ',
        'common.correct': 'Сайн байна!',
        'common.incorrect': 'Буруу байна!',
        'common.correctAnswer': 'Зөв хариулт',
    },
};

export const useTranslation = (lang: Language) => {
    const t = (key: keyof TranslationKeys): string => {
        return translations[lang][key];
    };

    return { t };
};
