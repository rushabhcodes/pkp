import { Routes, Route } from "react-router-dom";
import App from "./App";
import EventDetailPage from "./components/EventDetailPage";
import EventsPage from "./components/EventsPage";
import Footer from "./components/Footer";

export default function AppRouter() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventSlug" element={<EventDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
