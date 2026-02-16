import { Flame, Star, Heart, Gem } from 'lucide-react';
import { useUserStore } from '../../store/useUserStore';
import clsx from 'clsx';

export const TopHeader = () => {
    const { hearts, xp, streak, gems } = useUserStore();

    return (
        <header className="sticky top-0 z-40 bg-[var(--bg-body)] border-b-2 border-[var(--border-color)] h-16 flex items-center justify-between px-4 md:px-8 transition-colors">
            <div className="flex items-center gap-6 max-w-5xl mx-auto w-full">
                {/* Streak */}
                <div className="flex items-center gap-2 group cursor-default">
                    <Flame
                        className={clsx(
                            "w-6 h-6 transition-colors",
                            streak > 0 ? "text-orange-500 fill-orange-500" : "text-gray-300"
                        )}
                    />
                    <span className={clsx("font-bold text-lg", streak > 0 ? "text-orange-500" : "text-gray-400")}>
                        {streak}
                    </span>
                </div>

                {/* gems/XP - Using Star for XP/gems as per common patterns or just Gems */}
                <div className="flex items-center gap-2 group cursor-default">
                    <Gem className="w-6 h-6 text-sky-400 fill-sky-400" />
                    <span className="font-bold text-lg text-sky-400">{gems}</span>
                </div>

                {/* XP */}
                <div className="flex items-center gap-2 group cursor-default">
                    <Star className="w-6 h-6 text-[#ffc800] fill-[#ffc800]" />
                    <span className="font-bold text-lg text-[#ffc800]">{xp}</span>
                </div>

                {/* Hearts */}
                <div className="flex items-center gap-2 group cursor-default ml-auto">
                    <Heart
                        className={clsx(
                            "w-6 h-6 transition-colors",
                            hearts > 0 ? "text-rose-500 fill-rose-500" : "text-gray-300"
                        )}
                    />
                    <span className={clsx("font-bold text-lg", hearts > 0 ? "text-rose-500" : "text-gray-400")}>
                        {hearts}
                    </span>
                </div>
            </div>
        </header>
    );
};
