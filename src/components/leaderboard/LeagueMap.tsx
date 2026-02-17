import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Pyramid, Tent, Castle, Leaf, Sparkles, Star } from 'lucide-react';
import { useUserStore } from '../../store/useUserStore';
import { useTranslation } from '../../utils/i18n';
import { useState } from 'react';

interface City {
    id: string;
    nameKey: string;
    descKey: string;
    xp: number;
    icon: any;
    color: string;
    x: number; // Percent from left (0-100)
    y: number; // Vertical spacing index
}

const CITIES: City[] = [
    { id: 'egypt', nameKey: 'leaderboard.cityEgypt', descKey: 'leaderboard.egyptDesc', xp: 0, icon: Pyramid, color: '#f59e0b', x: 50, y: 0 },
    { id: 'wilderness', nameKey: 'leaderboard.cityWilderness', descKey: 'leaderboard.wildernessDesc', xp: 500, icon: Tent, color: '#d97706', x: 20, y: 1 },
    { id: 'zarahemla', nameKey: 'leaderboard.cityZarahemla', descKey: 'leaderboard.zarahemlaDesc', xp: 1500, icon: Castle, color: '#0ea5e9', x: 80, y: 2 },
    { id: 'bountiful', nameKey: 'leaderboard.cityBountiful', descKey: 'leaderboard.bountifulDesc', xp: 3000, icon: Leaf, color: '#10b981', x: 30, y: 3 },
    { id: 'enoch', nameKey: 'leaderboard.cityEnoch', descKey: 'leaderboard.enochDesc', xp: 5000, icon: Sparkles, color: '#8b5cf6', x: 70, y: 4 },
    { id: 'zion', nameKey: 'leaderboard.cityZion', descKey: 'leaderboard.zionDesc', xp: 10000, icon: Trophy, color: '#ffc800', x: 50, y: 5 },
];

export const LeagueMap = () => {
    const { xp, user, nickname, language } = useUserStore();
    const { t } = useTranslation(language);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);

    // Calculate avatar position
    const calculateAvatarPos = () => {
        let currentCityIndex = 0;
        for (let i = CITIES.length - 1; i >= 0; i--) {
            if (xp >= CITIES[i].xp) {
                currentCityIndex = i;
                break;
            }
        }

        const currentCity = CITIES[currentCityIndex];
        const nextCity = CITIES[currentCityIndex + 1];

        if (!nextCity) return { x: currentCity.x, y: currentCity.y * 150 + 40 };

        const segmentProgress = (xp - currentCity.xp) / (nextCity.xp - currentCity.xp);
        const interpolatedX = currentCity.x + (nextCity.x - currentCity.x) * segmentProgress;
        const interpolatedY = (currentCity.y + (nextCity.y - currentCity.y) * segmentProgress) * 150 + 40;

        return { x: interpolatedX, y: interpolatedY };
    };

    const avatarPos = calculateAvatarPos();

    return (
        <div className="relative w-full max-w-lg mx-auto py-12 px-4 select-none">
            {/* SVG Background Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '900px' }}>
                <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <filter id="shadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                    </filter>
                </defs>

                {/* Stylized Abstract Landmasses */}
                <g className="opacity-20 dark:opacity-10 transition-opacity duration-500">
                    <path
                        d="M -50 100 Q 150 50 100 300 T 200 600 T -50 900 Z"
                        fill="#fef3c7"
                        className="dark:fill-orange-950"
                    />
                    <path
                        d="M 400 50 Q 250 200 450 400 T 350 750 T 500 950 L 500 50 Z"
                        fill="#fef3c7"
                        className="dark:fill-orange-900"
                    />

                    {/* Subtle Wave lines */}
                    {[...Array(5)].map((_, i) => (
                        <path
                            key={`wave-${i}`}
                            d={`M ${100 + i * 50} ${200 + i * 150} Q ${125 + i * 50} ${210 + i * 150} ${150 + i * 50} ${200 + i * 150} T ${200 + i * 50} ${200 + i * 150}`}
                            stroke="#cbd5e1"
                            strokeWidth="2"
                            fill="none"
                            className="dark:stroke-gray-800"
                        />
                    ))}
                </g>

                {/* Main Journey Path */}
                <path
                    d={`M ${CITIES[0].x}% 40 
                       ${CITIES.slice(1).map((c, i) => {
                        const prev = CITIES[i];
                        const cp1y = (prev.y * 150 + 40 + c.y * 150 + 40) / 2;
                        return `C ${prev.x}% ${cp1y}, ${c.x}% ${cp1y}, ${c.x}% ${c.y * 150 + 40}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    filter="url(#shadow)"
                    className="opacity-30 dark:opacity-20"
                />

                {/* Active Path (Dash Array for "journey" effect) */}
                <path
                    d={`M ${CITIES[0].x}% 40 
                       ${CITIES.slice(1).map((c, i) => {
                        const prev = CITIES[i];
                        const cp1y = (prev.y * 150 + 40 + c.y * 150 + 40) / 2;
                        return `C ${prev.x}% ${cp1y}, ${c.x}% ${cp1y}, ${c.x}% ${c.y * 150 + 40}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="20 20"
                    className="animate-[pulse_4s_infinite]"
                />
            </svg>

            {/* City Nodes */}
            <div className="relative" style={{ height: '850px' }}>
                {CITIES.map((city) => {
                    const isUnlocked = xp >= city.xp;
                    const Icon = city.icon;

                    return (
                        <div
                            key={city.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group"
                            style={{ left: `${city.x}%`, top: `${city.y * 150 + 40}px` }}
                        >
                            <button
                                onClick={() => setSelectedCity(city)}
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 border-b-4 ${isUnlocked
                                    ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                                    : 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-950 grayscale'
                                    }`}
                            >
                                <Icon
                                    size={32}
                                    style={{ color: isUnlocked ? city.color : '#9ca3af' }}
                                    className={isUnlocked ? 'drop-shadow-sm' : ''}
                                />
                                {isUnlocked && (
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-sm" />
                                )}
                            </button>
                            <span className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-sm ${isUnlocked ? 'text-[var(--text-primary)]' : 'text-gray-400'
                                }`}>
                                {t(city.nameKey as any)}
                            </span>
                        </div>
                    );
                })}

                {/* Player Avatar */}
                <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                    initial={false}
                    animate={{ left: `${avatarPos.x}%`, top: `${avatarPos.y}px` }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full border-4 border-orange-500 shadow-2xl overflow-hidden bg-white dark:bg-gray-800">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="Me" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-orange-100 text-orange-500">
                                    <Star size={24} fill="currentColor" />
                                </div>
                            )}
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                            {nickname || user?.displayName || 'YOU'}
                        </div>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping -z-10" />
                    </div>
                </motion.div>
            </div>

            {/* City Info Modal */}
            <AnimatePresence>
                {selectedCity && (
                    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
                        <motion.div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCity(null)}
                        />
                        <motion.div
                            className="relative bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        >
                            <div className="p-6 text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center shadow-lg" style={{ backgroundColor: selectedCity.color }}>
                                    <selectedCity.icon size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                                    {t(selectedCity.nameKey as any)}
                                </h3>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-bold text-gray-500 mb-4">
                                    <Star size={14} fill="currentColor" />
                                    {selectedCity.xp} XP Required
                                </div>
                                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                                    {t(selectedCity.descKey as any)}
                                </p>
                                <button
                                    onClick={() => setSelectedCity(null)}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95"
                                >
                                    {xp >= selectedCity.xp ? 'Continue Journey' : 'Keep Learning'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
