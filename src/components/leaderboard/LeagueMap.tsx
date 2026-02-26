import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Pyramid, Tent, Castle, Leaf, Sparkles, Star, User } from 'lucide-react';
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

export const LeagueMap = ({ users = [] }: { users?: any[] }) => {
    const { xp, user, nickname, language } = useUserStore();
    const { t } = useTranslation(language);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);

    // Calculate avatar position based on 500x850 coordinate system
    const calculatePos = (targetXp: number) => {
        let currentCityIndex = 0;
        for (let i = CITIES.length - 1; i >= 0; i--) {
            if (targetXp >= CITIES[i].xp) {
                currentCityIndex = i;
                break;
            }
        }

        const currentCity = CITIES[currentCityIndex];
        const nextCity = CITIES[currentCityIndex + 1];

        if (!nextCity) return { x: currentCity.x * 5, y: currentCity.y * 150 + 40 };

        const segmentProgress = (targetXp - currentCity.xp) / (nextCity.xp - currentCity.xp);
        const interpolatedX = (currentCity.x + (nextCity.x - currentCity.x) * segmentProgress) * 5;
        const interpolatedY = (currentCity.y + (nextCity.y - currentCity.y) * segmentProgress) * 150 + 40;

        return { x: interpolatedX, y: interpolatedY };
    };

    const avatarPos = calculatePos(xp);

    // Group users by XP to handle overlapping avatars
    const userGroupsMap = new Map<number, any[]>();
    users.forEach(u => {
        if (u.uid === user?.uid) return; // Skip current user (rendered separately)
        if (!userGroupsMap.has(u.xp)) {
            userGroupsMap.set(u.xp, []);
        }
        userGroupsMap.get(u.xp)?.push(u);
    });
    const groupedUsers = Array.from(userGroupsMap.values());

    return (
        <div className="relative w-full max-w-lg mx-auto py-12 px-4 select-none">
            {/* SVG Background Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 850" preserveAspectRatio="none" style={{ minHeight: '900px' }}>
                <defs>
                    {/* Vibrant Path Gradients */}
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="25%" stopColor="#ef4444" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="75%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="activeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                    <filter id="shadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
                    </filter>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    {/* Pattern for a subtle parchment texture */}
                    <pattern id="parchment" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <rect width="100" height="100" fill="transparent" />
                        <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.05" />
                        <circle cx="60" cy="40" r="1.5" fill="currentColor" opacity="0.03" />
                    </pattern>
                </defs>

                {/* Background Texture/Parchment Feel with Vibrant Base */}
                <rect width="100%" height="100%" fill="url(#parchment)" className="text-orange-900/10 dark:text-orange-50/10" />
                <rect width="100%" height="100%" className="fill-orange-50/50 dark:fill-slate-900/80" />

                {/* Stylized Terrain and Islands */}
                <g className="transition-opacity duration-1000">
                    {/* Left Landmass (Mountains/Hills) */}
                    <motion.path
                        d="M -100 0 L -20 0 Q 80 150 20 350 T 150 650 T -50 950 L -100 950 Z"
                        fill="#fef3c7"
                        className="dark:fill-orange-950/60 opacity-60 dark:opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        filter="url(#shadow)"
                    />

                    {/* Right Landmass (Islands) */}
                    <motion.path
                        d="M 500 50 Q 320 180 480 320 T 420 550 T 550 850 L 550 50 Z"
                        fill="#dcfce7"
                        className="dark:fill-emerald-950/40 opacity-60 dark:opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        filter="url(#shadow)"
                    />

                    {/* Decorative Mountains (Stylized Triangles) */}
                    {[
                        { x: 10, y: 120, s: 0.8 }, { x: 45, y: 450, s: 1.2 },
                        { x: 85, y: 280, s: 0.7 }, { x: 75, y: 720, s: 1 }
                    ].map((m, i) => (
                        <g key={`mtn-${i}`} transform={`translate(${m.x * 4}, ${m.y}) scale(${m.s})`} className="opacity-10 dark:opacity-5">
                            <path d="M 0 40 L 30 0 L 60 40 Z" fill="currentColor" className="text-orange-900" />
                        </g>
                    ))}

                    {/* Animated Clouds (Fun Element) */}
                    {[
                        { y: 80, d: 25, delay: 0 },
                        { y: 350, d: 35, delay: 5 },
                        { y: 650, d: 30, delay: 2 }
                    ].map((cloud, i) => (
                        <motion.g
                            key={`cloud-${i}`}
                            initial={{ x: -100 }}
                            animate={{ x: 600 }}
                            transition={{ duration: cloud.d, repeat: Infinity, ease: "linear", delay: cloud.delay }}
                            className="opacity-40 dark:opacity-10"
                        >
                            <path
                                d="M 25 10 Q 30 0 40 10 Q 55 5 60 20 Q 75 25 60 40 L 20 40 Q 5 35 10 20 Q 15 10 25 10"
                                fill="white"
                                className="dark:fill-gray-400"
                            />
                        </motion.g>
                    ))}

                    {/* Animated Wave Lines (Water Texture) */}
                    {[...Array(8)].map((_, i) => {
                        const d1 = `M ${50 + (i % 3) * 120} ${150 + i * 100} Q ${75 + (i % 3) * 120} ${160 + i * 100} ${100 + (i % 3) * 120} ${150 + i * 100} T ${150 + (i % 3) * 120} ${150 + i * 100}`;
                        return (
                            <motion.path
                                key={`wave-${i}`}
                                d={d1}
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                className="text-blue-300 dark:text-blue-900/30"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4 + (i % 2), repeat: Infinity, ease: "easeInOut" }}
                            />
                        );
                    })}
                </g>

                {/* Interactive Path Highlights */}
                <path
                    d={`M ${CITIES[0].x * 5} 40 
                       ${CITIES.slice(1).map((c, i) => {
                        const prev = CITIES[i];
                        const cp1y = (prev.y * 150 + 40 + c.y * 150 + 40) / 2;
                        return `C ${prev.x * 5} ${cp1y}, ${c.x * 5} ${cp1y}, ${c.x * 5} ${c.y * 150 + 40}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="opacity-10 dark:opacity-5"
                />

                {/* Main Journey Path (Progress dots) */}
                <path
                    d={`M ${CITIES[0].x * 5} 40 
                       ${CITIES.slice(1).map((c, i) => {
                        const prev = CITIES[i];
                        const cp1y = (prev.y * 150 + 40 + c.y * 150 + 40) / 2;
                        return `C ${prev.x * 5} ${cp1y}, ${c.x * 5} ${cp1y}, ${c.x * 5} ${c.y * 150 + 40}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="1 24"
                    className="opacity-70"
                    filter="url(#glow)"
                />

                {/* Active Path Journey Effect */}
                <path
                    d={`M ${CITIES[0].x * 5} 40 
                       ${CITIES.slice(1).map((c, i) => {
                        const prev = CITIES[i];
                        const cp1y = (prev.y * 150 + 40 + c.y * 150 + 40) / 2;
                        return `C ${prev.x * 5} ${cp1y}, ${c.x * 5} ${cp1y}, ${c.x * 5} ${c.y * 150 + 40}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="url(#activeGradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="10 30"
                    className="animate-[dash_6s_linear_infinite] opacity-90"
                    filter="url(#glow)"
                />
            </svg>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes dash {
                    to { stroke-dashoffset: -400; }
                }
            ` }} />

            {/* City Nodes */}
            <div className="relative" style={{ height: '850px' }}>
                {CITIES.map((city, idx) => {
                    const isUnlocked = xp >= city.xp;
                    const Icon = city.icon;

                    return (
                        <motion.div
                            key={city.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, type: "spring" }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                            style={{ left: `${city.x}%`, top: `${city.y * 150 + 40}px` }}
                        >
                            <motion.button
                                onClick={() => setSelectedCity(city)}
                                whileHover={{ scale: 1.15, y: -8 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-4 ${isUnlocked
                                    ? 'bg-white dark:bg-slate-800'
                                    : 'bg-gray-200 dark:bg-slate-800 border-gray-300 dark:border-slate-700 grayscale opacity-70'
                                    }`}
                                style={{
                                    borderColor: isUnlocked ? city.color : undefined,
                                    boxShadow: isUnlocked ? `0 10px 25px -5px ${city.color}60, 0 8px 10px -6px ${city.color}40` : '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                }}
                            >
                                <Icon
                                    size={28}
                                    style={{ color: isUnlocked ? city.color : '#9ca3af' }}
                                    className={isUnlocked ? 'filter drop-shadow-md' : ''}
                                />
                                {isUnlocked && (
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-sm flex items-center justify-center"
                                    >
                                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    </motion.div>
                                )}
                            </motion.button>
                            <span className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-black text-xs tracking-wider uppercase ${isUnlocked ? 'text-[var(--text-primary)]' : 'text-gray-400'
                                }`}
                                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                            >
                                {t(city.nameKey as any)}
                            </span>
                            {/* Unlock glow */}
                            {isUnlocked && (
                                <div className="absolute inset-0 -z-10 bg-white/20 dark:bg-white/5 blur-xl rounded-full" />
                            )}
                        </motion.div>
                    );
                })}

                {/* Other Users */}
                {groupedUsers.map((group) => {
                    const pos = calculatePos(group[0].xp);

                    return group.map((u, idx) => {
                        // Spread avatars if they are at the identical XP spot
                        const offset = group.length > 1 ? (Math.sin(idx * 2.4) * 15) : 0;
                        const offsetY = group.length > 1 ? (Math.cos(idx * 2.4) * 10) : 0;

                        return (
                            <motion.div
                                key={u.uid}
                                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1, left: `${(pos.x + offset) / 5}%`, top: `${pos.y + offsetY}px` }}
                                transition={{ delay: 0.1 * idx, type: "spring", stiffness: 60 }}
                            >
                                <div className="relative group">
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 shadow-xl overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-black text-sm">
                                        {u.photoURL ? (
                                            <img src={u.photoURL} alt={u.displayName} className="w-full h-full object-cover grayscale-[20%]" />
                                        ) : (
                                            (u.nickname || u.displayName || '?').charAt(0).toUpperCase()
                                        )}
                                    </div>
                                    {/* Tooltip on hover (mostly for desktop/testing as mobile won't easily hover pointer-events-none) */}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 transition-opacity">
                                        {u.nickname || u.displayName?.split(' ')[0] || 'User'}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    });
                })}

                {/* Player Avatar */}
                <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
                    initial={false}
                    animate={{ left: `${avatarPos.x / 5}%`, top: `${avatarPos.y}px` }}
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
