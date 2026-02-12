import { X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/useUserStore';
import { useTranslation } from '../../utils/i18n';

interface QuizHeaderProps {
    progress: number; // 0 to 100
    title?: string;
}

export const QuizHeader = ({ progress, title }: QuizHeaderProps) => {
    const { hearts, language } = useUserStore();
    const { t } = useTranslation(language);

    return (
        <div className="flex items-center gap-4 px-4 py-6 max-w-5xl mx-auto w-full bg-[var(--bg-body)]">
            <Link to="/">
                <X className="text-gray-400 hover:text-gray-600 cursor-pointer" size={28} />
            </Link>

            {title && <span className="hidden md:block font-bold text-lg text-gray-400 uppercase tracking-widest mr-4">{title}</span>}
            {!title && <span className="hidden md:block font-bold text-lg text-gray-400 uppercase tracking-widest mr-4">{t('common.loading')}</span>}

            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-green-500 transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex items-center gap-2 text-rose-500 font-bold text-xl">
                <Heart fill="currentColor" size={28} />
                <span>{hearts}</span>
            </div>
        </div>
    );
};
