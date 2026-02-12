import { Link, useLocation } from 'react-router-dom';
import { Home, Trophy, Store, User, MoreHorizontal, Book } from 'lucide-react';
import clsx from 'clsx';
import { useUserStore } from '../../store/useUserStore';
import { useTranslation } from '../../utils/i18n';
import logoImg from '../../assets/logo.svg';
import logoTextImg from '../../assets/logo-text.svg';

const SidebarItem = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link
            to={href}
            className={clsx(
                "flex items-center gap-4 p-3 rounded-xl transition-colors border-2 border-transparent uppercase font-bold tracking-widest text-sm mb-2",
                isActive
                    ? "bg-blue-50 text-sky-500 border-sky-200"
                    : "text-gray-500 hover:bg-gray-100"
            )}
        >
            <Icon size={28} strokeWidth={2.5} />
            <span className="hidden lg:block">{label}</span>
        </Link>
    );
};

export const Sidebar = () => {
    const { language } = useUserStore();
    const { t } = useTranslation(language);

    return (
        <div className="hidden md:flex flex-col w-20 lg:w-64 h-screen border-r-2 border-[var(--border-color)] p-4 fixed left-0 top-0 bg-[var(--bg-card)] z-50 transition-colors">
            <a href="/" className="mb-8 px-2 flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src={logoImg} alt="ZionGo Logo" className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
                <img src={logoTextImg} alt="ZionGo" className="h-6 lg:h-8 w-auto hidden lg:block" />
            </a>

            <nav className="flex-1">
                <SidebarItem icon={Home} label={t('nav.learn')} href="/" />
                <SidebarItem icon={Book} label={t('nav.mastery')} href="/doctrinal-mastery" />
                <SidebarItem icon={Trophy} label={t('nav.leaderboard')} href="/leaderboard" />
                <SidebarItem icon={Store} label={t('nav.shop')} href="/shop" />
                <SidebarItem icon={User} label={t('nav.profile')} href="/profile" />
                <SidebarItem icon={MoreHorizontal} label={t('nav.more')} href="/more" />
            </nav>
        </div>
    );
};

export const MobileNav = () => {
    const location = useLocation();

    const navItems = [
        { icon: Home, href: "/" },
        { icon: Book, href: "/doctrinal-mastery" },
        { icon: Trophy, href: "/leaderboard" },
        { icon: Store, href: "/shop" },
        { icon: MoreHorizontal, href: "/more" }
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[var(--bg-card)] border-t-2 border-[var(--border-color)] flex justify-around items-center px-4 z-50 transition-colors">
            {navItems.map(({ icon: Icon, href }) => {
                const isActive = location.pathname === href;

                return (
                    <Link
                        key={href}
                        to={href}
                        className={isActive ? "text-sky-500" : "text-gray-400"}
                    >
                        <Icon size={28} strokeWidth={2.5} />
                    </Link>
                );
            })}
        </div>
    );
};
