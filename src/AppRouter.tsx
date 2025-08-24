import { Routes, Route } from 'react-router-dom';
import App from './App';
import EventDetailPage from './components/EventDetailPage';
import EventsPage from './components/EventsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function AppRouter() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventSlug" element={<EventDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
