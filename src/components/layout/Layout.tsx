import { Outlet } from 'react-router-dom';
import { Sidebar, MobileNav } from './Sidebar';
import { useUserStore } from '../../store/useUserStore';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-body)] md:pl-20 lg:pl-64 pb-20 md:pb-0 transition-colors">
            <Sidebar />
            <main className="max-w-5xl mx-auto pt-6 px-4 md:px-8">
                <Outlet />
            </main>
            <MobileNav />
        </div>
    );
};
