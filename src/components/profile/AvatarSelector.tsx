import { X } from 'lucide-react';
import { useUserStore } from '../../store/useUserStore';
import { useTranslation } from '../../utils/i18n';

interface AvatarSelectorProps {
    onClose: () => void;
}

const AVATARS = [
    { id: 'nephi', name: 'Nephi', url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Nephi&skinColor=edb98a&top=shortHair' },
    { id: 'abish', name: 'Abish', url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Abish&skinColor=edb98a&top=longHair' },
    { id: 'moroni', name: 'Moroni', url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Moroni&skinColor=edb98a&top=shortHair&accessories=round' },
    { id: 'sariah', name: 'Sariah', url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sariah&skinColor=edb98a&top=longCurly' },
    { id: 'alma', name: 'Alma', url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alma&skinColor=edb98a&top=shortFlat' },
    { id: 'enos', name: 'Enos', url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Enos&skinColor=edb98a&top=shaggy' },
];

export const AvatarSelector = ({ onClose }: AvatarSelectorProps) => {
    const { language, updateAvatar } = useUserStore();
    const { t } = useTranslation(language);

    const handleSelect = async (url: string) => {
        await updateAvatar(url);
        onClose();
    };

    return (
        <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden max-w-md w-full animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-body)]">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">{t('profile.selectAvatar')}</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <X size={24} className="text-[var(--text-secondary)]" />
                </button>
            </div>

            <div className="p-6 grid grid-cols-3 gap-4 max-h-[400px] overflow-y-auto">
                {AVATARS.map((avatar) => (
                    <button
                        key={avatar.id}
                        onClick={() => handleSelect(avatar.url)}
                        className="group flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border-2 border-transparent hover:border-blue-500"
                    >
                        <div className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-800 shadow-md overflow-hidden bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform">
                            <img src={avatar.url} alt={avatar.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-bold text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors">
                            {avatar.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};
