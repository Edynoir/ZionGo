import { useState } from 'react';
import { Check, Lock, BookOpen, ChevronDown, ChevronUp, Crown } from 'lucide-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import type { Unit, Level } from '../types/curriculum';
import { useUserStore } from '../store/useUserStore';

interface UnitSectionProps {
    unit: Unit;
    unitIndex: number;
}

// Duolingo-style sine wave offsets for the path
const getWaveOffset = (index: number): number => {
    // Creates a smooth sine wave pattern: center → right → center → left → center...
    const amplitude = 80; // pixels from center
    return Math.sin(index * 0.9) * amplitude;
};

const LevelButton = ({ level, color, index, isCompleted, isActive }: { level: Level; color: string; index: number; isCompleted: boolean; isActive: boolean }) => {
    const isLocked = !isCompleted && !isActive;
    const offset = getWaveOffset(index);

    return (
        <div
            className="relative flex flex-col items-center"
            style={{ transform: `translateX(${offset}px)` }}
        >
            <Link to={isLocked ? '#' : `/lesson/${level.id}`} className="relative flex flex-col items-center group">
                <button
                    className={clsx(
                        "w-[70px] h-[70px] rounded-full flex items-center justify-center border-b-[6px] transition-all active:border-b-0 active:translate-y-1 shadow-lg",
                        isLocked
                            ? "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed"
                            : isCompleted
                                ? clsx(color, "text-white border-black/20 opacity-90")
                                : clsx(color, "text-white border-black/20 ring-4 ring-yellow-300/50 animate-pulse")
                    )}
                    disabled={isLocked}
                >
                    {isCompleted ? <Check size={32} strokeWidth={3} /> : (
                        isLocked ? <Lock size={24} /> : <Crown size={28} fill="currentColor" />
                    )}
                </button>

                {/* Tooltip on hover for unlocked */}
                {!isLocked && (
                    <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl px-3 py-1.5 text-center pointer-events-none z-10 shadow-md whitespace-nowrap">
                        <span className="text-xs font-bold text-[var(--text-primary)]">{level.title}</span>
                    </div>
                )}
            </Link>
        </div>
    );
};

export const UnitSection = ({ unit, unitIndex }: UnitSectionProps) => {
    const [isExpanded, setIsExpanded] = useState(unitIndex === 0);
    const { completedLessons } = useUserStore();

    // Determine dynamic status for each level
    const getLevelStatus = (level: Level, levelIndex: number): { isCompleted: boolean; isActive: boolean } => {
        const isCompleted = completedLessons.includes(level.id);

        if (isCompleted) return { isCompleted: true, isActive: false };

        // First level of first unit is always active if not completed
        if (unitIndex === 0 && levelIndex === 0) return { isCompleted: false, isActive: true };

        // Active if previous level in this unit is completed
        if (levelIndex > 0) {
            const prevLevel = unit.levels[levelIndex - 1];
            if (completedLessons.includes(prevLevel.id)) {
                return { isCompleted: false, isActive: true };
            }
        }

        // First level of subsequent units: active if last level of previous unit is completed
        // (We don't have prev unit info here, but the parent could pass it — for now, just check if levelIndex === 0 and unitIndex > 0)
        if (levelIndex === 0 && unitIndex > 0) {
            // This will be handled by checking completedLessons from the previous unit's last level
            // For simplicity, unlock if the user has completed at least unitIndex * 3 lessons
            return { isCompleted: false, isActive: completedLessons.length >= unitIndex * 3 };
        }

        return { isCompleted: false, isActive: false };
    };

    const completedCount = unit.levels.filter(l => completedLessons.includes(l.id)).length;

    return (
        <div className="w-full max-w-md mx-auto mb-4">
            {/* Collapsible Unit Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={clsx(
                    "w-full p-4 rounded-2xl flex items-center justify-between text-white transition-all hover:brightness-110",
                    unit.color
                )}
            >
                <div className="flex items-center gap-3">
                    <div className="bg-black/10 p-2 rounded-lg">
                        <BookOpen size={24} />
                    </div>
                    <div className="text-left">
                        <h2 className="text-lg font-bold leading-tight">{unit.title}</h2>
                        <p className="opacity-80 text-sm">{completedCount}/{unit.levels.length} completed</p>
                    </div>
                </div>
                {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>

            {/* Levels - Curved Path */}
            {isExpanded && (
                <div className="flex flex-col items-center pt-8 pb-4 gap-6">
                    {unit.levels.map((level, index) => {
                        const { isCompleted, isActive } = getLevelStatus(level, index);
                        return (
                            <LevelButton
                                key={level.id}
                                level={level}
                                color={unit.color}
                                index={index}
                                isCompleted={isCompleted}
                                isActive={isActive}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
