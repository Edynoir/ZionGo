import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Learn } from './pages/Learn';
import { Lesson } from './pages/Lesson';
import { Leaderboard } from './pages/Leaderboard';
import { Shop } from './pages/Shop';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Learn />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="shop" element={<Shop />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/lesson/:lessonId" element={<Lesson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
