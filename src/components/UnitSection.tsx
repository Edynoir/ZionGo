import { Star, Check, Lock } from 'lucide-react';
import clsx from 'clsx';
import type { Unit, Level } from '../types/curriculum';

interface UnitSectionProps {
    unit: Unit;
}

import { Link } from 'react-router-dom';

const LevelButton = ({ level, color }: { level: Level; color: string }) => {
    const isLocked = level.status === 'LOCKED';
    const isCompleted = level.status === 'COMPLETED';

    return (
        <Link to={isLocked ? '#' : `/lesson/${level.id}`} className="relative flex flex-col items-center mb-8 group">
            <button
                className={clsx(
                    "w-16 h-16 rounded-full flex items-center justify-center border-b-4 transition-all active:border-b-0 active:translate-y-1",
                    isLocked
                        ? "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed"
                        : clsx(color, "text-white border-black/20")
                )}
                disabled={isLocked}
            >
                {isCompleted ? <Check size={32} strokeWidth={3} /> : (
                    isLocked ? <Lock size={24} /> : <Star size={28} fill="currentColor" />
                )}
            </button>

            {/* Level Title Label */}
            {!isLocked && (
                <div className="absolute top-20 bg-white border-2 border-gray-200 rounded-xl px-3 py-2 text-center pointer-events-none z-10 shadow-sm w-32 group-hover:scale-105 transition-transform">
                    <span className="text-sm font-bold text-gray-700 block">{level.title}</span>
                </div>
            )}
        </Link>
    );
};

export const UnitSection = ({ unit }: UnitSectionProps) => {
    return (
        <div className="w-full mb-10">
            <div className={clsx("p-4 rounded-xl flex items-center justify-between text-white mb-8", unit.color)}>
                <div>
                    <h2 className="text-2xl font-bold">{unit.title}</h2>
                    <p className="opacity-90">{unit.description}</p>
                </div>
                <div className="bg-black/10 p-2 rounded-lg">
                    <BookOpen size={24} />
                </div>
            </div>

            <div className="flex flex-col items-center">
                {unit.levels.map((level) => (
                    <LevelButton key={level.id} level={level} color={unit.color} />
                ))}
            </div>
        </div>
    );
};

import { BookOpen } from 'lucide-react';
