import { useState } from 'react';
import { useUserStore } from '../../store/useUserStore';
import { Mail, Lock, Loader } from 'lucide-react';

interface AuthModalProps {
    onClose?: () => void;
}

export const AuthModal = ({ onClose }: AuthModalProps) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { loginEmail, signupEmail, loginGoogle, error, clearError } = useUserStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        clearError();
        try {
            if (isLogin) {
                await loginEmail(email, password);
            } else {
                await signupEmail(email, password);
            }
            if (onClose) onClose();
        } catch (err) {
            // Error handled by store but we catch here to stop loading
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogle = async () => {
        setIsLoading(true);
        try {
            await loginGoogle();
            if (onClose) onClose();
        } catch {
            // Error handled
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md bg-[var(--bg-card)] p-6 rounded-2xl border-2 border-[var(--border-color)] shadow-xl relative animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold text-center mb-6 text-[var(--text-primary)]">
                {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>

            {error && (
                <div className="bg-rose-100 border border-rose-300 text-rose-600 p-3 rounded-lg mb-4 text-sm font-bold">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-200 rounded-xl focus:border-[#58cc02] outline-none font-bold text-gray-600 focus:text-gray-800 transition-colors"
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-200 rounded-xl focus:border-[#58cc02] outline-none font-bold text-gray-600 focus:text-gray-800 transition-colors"
                            required
                            minLength={6}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#58cc02] hover:bg-[#46a302] text-white font-bold py-3 rounded-xl shadow-[0_4px_0_#46a302] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                    {isLoading ? <Loader className="animate-spin" /> : (isLogin ? 'Log In' : 'Sign Up')}
                </button>
            </form>

            <div className="flex items-center gap-4 my-6">
                <div className="h-0.5 bg-gray-200 flex-1" />
                <span className="text-gray-400 font-bold text-sm uppercase">Or</span>
                <div className="h-0.5 bg-gray-200 flex-1" />
            </div>

            <button
                onClick={handleGoogle}
                disabled={isLoading}
                className="w-full bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-xl shadow-[0_4px_0_#e5e7eb] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
            >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Google
            </button>

            <p className="text-center mt-6 text-gray-400 font-bold">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                    onClick={() => { setIsLogin(!isLogin); clearError(); }}
                    className="ml-2 text-[#1cb0f6] hover:underline uppercase tracking-wide"
                >
                    {isLogin ? 'Sign Up' : 'Log In'}
                </button>
            </p>
        </div>
    );
};
