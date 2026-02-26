import { Package, Shield, Zap } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';
import clsx from 'clsx';

const InventoryItem = ({ icon: Icon, title, description, color }: any) => (
    <div className="flex items-center gap-4 w-full p-4 border-2 border-[var(--border-color)] bg-[var(--bg-card)] rounded-2xl mb-3">
        <div className={clsx("p-3 rounded-xl text-white", color)}>
            <Icon size={24} />
        </div>
        <div className="flex-1">
            <h3 className="font-bold text-[var(--text-primary)]">{title}</h3>
            <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        </div>
    </div>
);

export const Inventory = () => {
    const { inventory, language } = useUserStore();
    const { t } = useTranslation(language);

    const hasItems = inventory && inventory.length > 0;

    return (
        <div className="flex flex-col items-center py-8">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{t('inventory.title')}</h1>
                <p className="text-[var(--text-secondary)]">{t('inventory.items')}</p>
            </div>

            <div className="max-w-lg w-full px-4">
                {!hasItems ? (
                    <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] border-dashed p-12 rounded-3xl flex flex-col items-center text-center">
                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-400 mb-4">
                            <Package size={32} />
                        </div>
                        <p className="text-[var(--text-secondary)]">
                            {t('inventory.noItems')}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {inventory.includes('STREAK_FREEZE') && (
                            <InventoryItem
                                icon={Shield}
                                title={t('inventory.streakFreeze')}
                                description={t('inventory.streakFreezeDesc')}
                                color="bg-blue-500"
                            />
                        )}
                        {inventory.includes('DOUBLE_WAGER') && (
                            <InventoryItem
                                icon={Zap}
                                title={t('inventory.doubleWager')}
                                description={t('inventory.doubleWagerDesc')}
                                color="bg-yellow-500"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
