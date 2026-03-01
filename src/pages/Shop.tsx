import { Heart, Zap, Shield } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';
import { useTranslation } from '../utils/i18n';
import clsx from 'clsx';

const ShopItem = ({ icon: Icon, title, description, cost, color, onBuy, canAfford, isMax, isActive }: any) => {
    let statusText = cost;
    if (isMax) statusText = 'MAX';
    else if (isActive) statusText = 'ACTIVE';

    return (
        <button
            onClick={onBuy}
            disabled={!canAfford || isMax || isActive}
            className={clsx(
                "flex items-center gap-4 w-full p-4 border-2 border-t-0 first:border-t-2 border-[var(--border-color)] transition-colors text-left group",
                (!canAfford || isMax || isActive) ? "bg-gray-100 dark:bg-gray-800/50 opacity-60 cursor-not-allowed" : "hover:bg-[var(--bg-card)]/50 bg-[var(--bg-card)] cursor-pointer"
            )}
        >
            <div className={clsx("p-2 rounded-xl text-white", color)}>
                <Icon size={24} />
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-[var(--text-primary)]">{title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
            <div className={clsx(
                "font-bold px-3 py-1 rounded-full transition-colors",
                (isMax || isActive) ? "text-gray-500 bg-gray-200 dark:bg-gray-700" : "text-[#1cb0f6] bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50"
            )}>
                {statusText}
            </div>
        </button>
    );
};

export const Shop = () => {
    const { gems, hearts, inventory, language, buyItem } = useUserStore();
    const { t } = useTranslation(language);

    const handleBuy = (cost: number, type: 'HEARTS' | 'FREEZE' | 'WAGER') => {
        if (gems >= cost) {
            buyItem(cost, type);
            // Could add toast here
        }
    };

    return (
        <div className="flex flex-col items-center py-8">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('shop.title')}</h1>
                <div className="text-[#0ea5e9] font-bold text-xl flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-[#0ea5e9] rounded-full" />
                    {gems} {t('shop.spirits')}
                </div>
            </div>

            <div className="max-w-lg w-full rounded-2xl overflow-hidden border-2 border-[var(--border-color)]">
                <ShopItem
                    icon={Heart}
                    title={t('shop.refillHearts')}
                    description={t('shop.refillHeartsDesc')}
                    cost={350}
                    color="bg-rose-500"
                    onBuy={() => handleBuy(350, 'HEARTS')}
                    canAfford={gems >= 350}
                    isMax={hearts >= 5}
                />
                <ShopItem
                    icon={Shield}
                    title={t('shop.streakFreeze')}
                    description={t('shop.streakFreezeDesc')}
                    cost={200}
                    color="bg-blue-500"
                    onBuy={() => handleBuy(200, 'FREEZE')}
                    canAfford={gems >= 200}
                    isActive={inventory?.includes('STREAK_FREEZE')}
                />
                <ShopItem
                    icon={Zap}
                    title={t('shop.doubleNothing')}
                    description={t('shop.doubleNothingDesc')}
                    cost={50}
                    color="bg-yellow-500"
                    onBuy={() => handleBuy(50, 'WAGER')}
                    canAfford={gems >= 50}
                    isActive={inventory?.includes('DOUBLE_WAGER')}
                />
            </div>
        </div>
    );
};
