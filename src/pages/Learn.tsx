import { UnitSection } from '../components/UnitSection';
import { useUserStore } from '../store/useUserStore';
import { useContentStore } from '../store/useContentStore';
import { Flame, BellRing } from 'lucide-react';
import { useTranslation } from '../utils/i18n';

export const Learn = () => {
    const { language, lastLessonDate, streak } = useUserStore();
    const { units } = useContentStore();
    useTranslation(language);
    const unitList = units[language];

    const today = new Date().toISOString().split('T')[0];
    const hasCompletedToday = lastLessonDate === today;

    return (
        <div className="flex flex-col items-center py-8 pb-32 px-4">
            {!hasCompletedToday && (
                <div className="max-w-xl w-full mb-8 bg-gradient-to-r from-orange-400 to-rose-500 rounded-3xl p-6 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden group">
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <BellRing size={20} className="animate-bounce" />
                                <h3 className="font-bold text-lg uppercase tracking-wider">Keep it going!</h3>
                            </div>
                            <p className="text-white/90 font-medium">
                                You haven't completed your daily lesson yet. Protect your <span className="font-black text-xl">{streak}</span> day streak!
                            </p>
                        </div>
                        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                            <Flame size={40} className="text-white fill-white" />
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute -left-4 -top-4 w-16 h-16 bg-black/10 rounded-full blur-xl" />
                </div>
            )}

            {unitList.map((unit, index) => (
                <UnitSection key={unit.id} unit={unit} unitIndex={index} />
            ))}
        </div>
    );
};
