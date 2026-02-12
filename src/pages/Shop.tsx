import { Heart, Zap, Shield } from 'lucide-react';
import { useUserStore } from '../store/useUserStore';
import clsx from 'clsx';

const ShopItem = ({ icon: Icon, title, description, cost, color }: any) => (
    <button className="flex items-center gap-4 w-full p-4 border-2 border-t-0 first:border-t-2 border-[var(--border-color)] hover:bg-[var(--bg-card)]/50 bg-[var(--bg-card)] transition-colors text-left group">
        <div className={clsx("p-2 rounded-xl text-white", color)}>
            <Icon size={24} />
        </div>
        <div className="flex-1">
            <h3 className="font-bold text-[var(--text-primary)]">{title}</h3>
            <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        </div>
        <div className="font-bold text-[#1cb0f6] bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
            {cost}
        </div>
    </button>
);

export const Shop = () => {
    const { gems } = useUserStore();

    return (
        <div className="flex flex-col items-center py-8">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">Shop</h1>
                <div className="text-[#1cb0f6] font-bold text-xl flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-[#1cb0f6] rounded-full" />
                    {gems} Gems
                </div>
            </div>

            <div className="max-w-lg w-full rounded-2xl overflow-hidden border-2 border-[var(--border-color)]">
                <ShopItem
                    icon={Heart}
                    title="Refill Hearts"
                    description="Get full health so you can worry less about making mistakes."
                    cost={350}
                    color="bg-rose-500"
                />
                <ShopItem
                    icon={Shield}
                    title="Streak Freeze"
                    description="Streak Freeze allows your streak to remain in place for one full day of inactivity."
                    cost={200}
                    color="bg-blue-500"
                />
                <ShopItem
                    icon={Zap}
                    title="Double or Nothing"
                    description="Attempt to double your 50 gem wager by maintaining a 7 day streak."
                    cost={50}
                    color="bg-yellow-500"
                />
            </div>
        </div>
    );
};
