import { useState } from 'react';
import { Star, Shield, Zap } from 'lucide-react';
import { AuthModal } from '../components/auth/AuthModal';
import mainLogo from '../assets/main.svg';

export const Landing = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);

    return (
        <div className="min-h-screen bg-[#131F24] text-white font-[var(--font-body)]">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
                <div className="flex items-center gap-3">
                    <img src={mainLogo} alt="ZionGo" className="h-16 md:h-20 w-auto object-contain" />
                </div>
                <button
                    onClick={() => setShowAuthModal(true)}
                    className="text-white font-bold uppercase tracking-widest hover:text-gray-300 transition-colors"
                >
                    Login
                </button>
            </nav>

            {/* Hero Section */}
            <main className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 max-w-6xl mx-auto text-center lg:text-left">
                <div className="max-w-xl space-y-6">
                    <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                        The free, fun, and effective way to learn LDS topics!
                    </h2>
                    <p className="text-lg text-gray-400">
                        Learn about the Restoration, Scriptures, and Church History with bite-sized lessons. Earn points, maintain streaks, and track your progress.
                    </p>

                    <div className="flex flex-col gap-4 pt-4">
                        <button
                            onClick={() => setShowAuthModal(true)}
                            className="w-full sm:w-auto bg-[#58cc02] text-white border-b-4 border-[#46a302] active:border-b-0 active:translate-y-1 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#46a302] transition-all uppercase tracking-widest"
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Visual / Ads Placeholder */}
                <div className="relative w-full max-w-md">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                    <div className="relative bg-[#202F36] border-2 border-[#37464f] rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <Star className="text-yellow-500" size={32} />
                            <div>
                                <h3 className="font-bold text-xl">Gamified Learning</h3>
                                <p className="text-gray-400 text-sm">Earn XP and Gems as you learn.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Shield className="text-blue-500" size={32} />
                            <div>
                                <h3 className="font-bold text-xl">Track Progress</h3>
                                <p className="text-gray-400 text-sm">Don't lose your daily streak!</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Zap className="text-orange-500" size={32} />
                            <div>
                                <h3 className="font-bold text-xl">Stay Motivated</h3>
                                <p className="text-gray-400 text-sm">Compete on the leaderboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer / About */}
            <footer className="border-t border-[#37464f] py-12 mt-12 bg-[#131F24]">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-xl font-bold mb-4">About ZionGo</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ZionGo is a community-driven project designed to help members and investigators learn about the Church of Jesus Christ of Latter-day Saints in an engaging way. Not an official product of the Church.
                    </p>
                </div>
            </footer>

            {showAuthModal && (
                <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="absolute inset-0" onClick={() => setShowAuthModal(false)} />
                    <div className="z-10 w-full max-w-md">
                        <AuthModal onClose={() => setShowAuthModal(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};
