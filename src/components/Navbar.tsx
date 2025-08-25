import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      // Only update active section based on scroll when on homepage
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'events', 'faq'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        }) || 'home';
        setActiveSection(current);
      } else {
        // Set active section based on current route
        if (location.pathname === '/') setActiveSection('home');
        else if (location.pathname === '/events' || location.pathname.startsWith('/events/')) setActiveSection('events');
      }
    };
    handleScroll(); // Call once to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, location]);

  // Smooth scroll to section and update activeSection
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    let targetId = section;
    if (section === 'home') targetId = 'hero';
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <div className={`${scrolled ? 'bg-white/90' : 'bg-white/70'} backdrop-blur-lg py-3 px-3 sm:px-6 transition-all duration-300 
        border-2 border-black w-full max-w-6xl
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        ${scrolled ? 'rounded-lg' : 'rounded-xl'}`}>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 mx-1">
            <button
              type="button"
              className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-80 transition-opacity focus:outline-none"
              aria-label="Go to Hero Section"
              onClick={() => scrollToSection('home')}
            >
              PKP
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="relative flex items-center space-x-1 bg-gray-50 p-1 rounded-md border-2 border-black">
              {/* Island-style navigation with indicator */}
              <div className={`absolute h-8 transition-all duration-300 -z-10
                ${activeSection === 'home' ? 'left-[5px] w-[60px] bg-purple-100' : ''}
                ${activeSection === 'about' ? 'left-[73px] w-[70px] bg-purple-100' : ''}
                ${activeSection === 'events' ? 'left-[151px] w-[75px] bg-purple-100' : ''}
                ${activeSection === 'faq' ? 'left-[234px] w-[60px] bg-purple-100' : ''}
                rounded-md border border-purple-300 shadow-[3px_3px_0px_0px_rgba(139,92,246,0.3)]
              `}></div>
              
              <button
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'home' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-black'}`}
                aria-current={activeSection === 'home' ? 'page' : undefined}
                onClick={() => scrollToSection('home')}
              >
                HOME
              </button>
              <button
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'about' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-black'}`}
                aria-current={activeSection === 'about' ? 'page' : undefined}
                onClick={() => scrollToSection('about')}
              >
                ABOUT
              </button>
              <button
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'events' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-black'}`}
                aria-current={activeSection === 'events' ? 'page' : undefined}
                onClick={() => scrollToSection('events')}
              >
                EVENTS
              </button>
              <button
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'faq' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-black'}`}
                aria-current={activeSection === 'faq' ? 'page' : undefined}
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </button>
            </div>
          </div>
          
          {/* Join Community Button */}
          <div className="hidden md:block ml-6">
            <a href="https://discord.gg/UwmUS9xKsF" target="_blank" rel="noopener noreferrer" 
              className="font-mono font-medium py-2 px-4 border-2 border-black bg-white rounded-md
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
              hover:translate-x-[-2px] hover:translate-y-[-2px]
              transition-all duration-300
              relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-purple-700/10"></span>
              <span className="relative z-10">JOIN COMMUNITY</span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 
              border-2 border-black bg-white 
              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.5)]
              hover:translate-x-[-1px] hover:translate-y-[-1px]
              transition-all duration-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-md 
          border-2 border-black
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          backdrop-blur-lg z-50 transition-all duration-300 transform origin-top">
          <div className="p-4 space-y-3">
            <button
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border-2 
              ${activeSection === 'home' 
                ? 'bg-purple-100 text-purple-600 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : 'text-gray-600 border-gray-300 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(139,92,246,0.5)]'}`}
              aria-current={activeSection === 'home' ? 'page' : undefined}
              onClick={() => scrollToSection('home')}
            >
              HOME
            </button>
            <button
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border-2
              ${activeSection === 'about' 
                ? 'bg-purple-100 text-purple-600 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : 'text-gray-600 border-gray-300 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(139,92,246,0.5)]'}`}
              aria-current={activeSection === 'about' ? 'page' : undefined}
              onClick={() => scrollToSection('about')}
            >
              ABOUT
            </button>
            <button
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border-2
              ${activeSection === 'events' 
                ? 'bg-purple-100 text-purple-600 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : 'text-gray-600 border-gray-300 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(139,92,246,0.5)]'}`}
              aria-current={activeSection === 'events' ? 'page' : undefined}
              onClick={() => scrollToSection('events')}
            >
              EVENTS
            </button>
            <button
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border-2
              ${activeSection === 'faq' 
                ? 'bg-purple-100 text-purple-600 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : 'text-gray-600 border-gray-300 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(139,92,246,0.5)]'}`}
              aria-current={activeSection === 'faq' ? 'page' : undefined}
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </button>
          </div>
          <div className="p-4 border-t border-gray-300">
            <a href="https://discord.gg/UwmUS9xKsF" target="_blank" rel="noopener noreferrer" 
              className="block w-full text-center bg-purple-600 text-white font-mono font-medium py-3 px-4
              border-2 border-black
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-300 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]
              hover:translate-x-[-1px] hover:translate-y-[-1px]
              relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-700/10"></div>
              <span className="relative z-10">JOIN COMMUNITY</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
