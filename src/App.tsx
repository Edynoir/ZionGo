import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import { Layout } from './components/layout/Layout';
import { Learn } from './pages/Learn';
import { Lesson } from './pages/Lesson';
import { Leaderboard } from './pages/Leaderboard';
import { Shop } from './pages/Shop';
import { Profile } from './pages/Profile';
import { AdminPanel } from './pages/AdminPanel';
import { DoctrinalMastery } from './pages/DoctrinalMastery';
import { More } from './pages/More';
import { Inventory } from './pages/Inventory';
import { Landing } from './pages/Landing';
import { useUserStore } from './store/useUserStore';
import { useContentStore } from './store/useContentStore';
import { Loader } from 'lucide-react';

function AppContent() {
  const { user, loading, initAuth } = useUserStore();
  const { fetchContent } = useContentStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Hardware Back Button for Android
    const backButtonListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        navigate(-1);
      } else {
        CapacitorApp.exitApp();
      }
    });

    return () => {
      backButtonListener.then((listener) => listener.remove());
    };
  }, [navigate]);

  useEffect(() => {
    console.log('App component mounted');
    const unsub = initAuth();
    console.log('Fetching content...');
    fetchContent();
    return () => unsub();
  }, [fetchContent, initAuth]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#131F24] flex items-center justify-center text-white">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <Routes>
      {user ? (
        <>
          <Route element={<Layout />}>
            <Route path="/" element={<Learn />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/doctrinal-mastery" element={<DoctrinalMastery />} />
            <Route path="/more" element={<More />} />
          </Route>
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <Route path="*" element={<Landing />} />
      )}
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
