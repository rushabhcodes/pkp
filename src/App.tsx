import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <FAQSection />
    </>
  );
}

export default App;
