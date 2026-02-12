import { Link, useLocation } from 'react-router-dom';
import { Home, Trophy, Store, User, MoreHorizontal, BookOpen } from 'lucide-react';
import clsx from 'clsx';

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
    return (
        <div className="hidden md:flex flex-col w-20 lg:w-64 h-screen border-r-2 border-[var(--border-color)] p-4 fixed left-0 top-0 bg-[var(--bg-card)] z-50 transition-colors">
            <div className="mb-8 px-2">
                <h1 className="text-2xl font-bold text-green-500 hidden lg:block tracking-tighter">ZionGo</h1>
                <BookOpen className="lg:hidden text-green-500" size={32} />
            </div>

            <nav className="flex-1">
                <SidebarItem icon={Home} label="Learn" href="/" />
                <SidebarItem icon={Trophy} label="Leaderboard" href="/leaderboard" />
                <SidebarItem icon={Store} label="Shop" href="/shop" />
                <SidebarItem icon={User} label="Profile" href="/profile" />
                <SidebarItem icon={MoreHorizontal} label="More" href="/more" />
            </nav>
        </div>
    );
};

export const MobileNav = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[var(--bg-card)] border-t-2 border-[var(--border-color)] flex justify-around items-center px-4 z-50 transition-colors">
            <Link to="/" className="text-sky-500"><Home size={28} strokeWidth={2.5} /></Link>
            <Link to="/leaderboard" className="text-gray-400"><Trophy size={28} strokeWidth={2.5} /></Link>
            <Link to="/shop" className="text-gray-400"><Store size={28} strokeWidth={2.5} /></Link>
            <Link to="/profile" className="text-gray-400"><User size={28} strokeWidth={2.5} /></Link>
        </div>
    );
};
