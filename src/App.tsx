import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
