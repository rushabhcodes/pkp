import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <div className={`${scrolled ? 'bg-[#0a0a18]/90' : 'bg-[#0a0a18]/70'} backdrop-blur-lg py-3 px-3 sm:px-6 transition-all duration-300 
        border-2 border-cyan-600/30 w-full max-w-6xl
        shadow-[6px_6px_0px_0px_rgba(6,182,212,0.2)]
        ${scrolled ? 'rounded-lg' : 'rounded-xl'}`}>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 mx-1">
            <span className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PKP</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="relative flex items-center space-x-1 bg-[#12121e] p-1 rounded-md border border-gray-800">
              {/* Island-style navigation with indicator */}
              <div className={`absolute h-8 transition-all duration-300 -z-10
                ${activeSection === 'home' ? 'left-[5px] w-[60px] bg-gradient-to-r from-cyan-600/20 to-cyan-600/10' : ''}
                ${activeSection === 'about' ? 'left-[73px] w-[70px] bg-gradient-to-r from-purple-600/20 to-purple-600/10' : ''}
                ${activeSection === 'events' ? 'left-[151px] w-[75px] bg-gradient-to-r from-cyan-600/20 to-purple-600/10' : ''}
                ${activeSection === 'faq' ? 'left-[234px] w-[60px] bg-gradient-to-r from-purple-600/20 to-cyan-600/10' : ''}
                rounded-md border border-gray-700/50 shadow-[3px_3px_0px_0px_rgba(6,182,212,0.2)]
              `}></div>
              
              <a href="#" 
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'home' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setActiveSection('home')}>
                HOME
              </a>
              <a href="#about" 
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'about' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setActiveSection('about')}>
                ABOUT
              </a>
              <a href="#events" 
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'events' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setActiveSection('events')}>
                EVENTS
              </a>
              <a href="#faq" 
                className={`px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-300 
                ${activeSection === 'faq' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setActiveSection('faq')}>
                FAQ
              </a>
            </div>
          </div>
          
          {/* Join Community Button */}
          <div className="hidden md:block ml-6">
            <a href="https://discord.gg/UwmUS9xKsF" target="_blank" rel="noopener noreferrer" 
              className="bg-[#12121e] text-white font-mono font-medium px-5 py-1.5 rounded-md 
              border-2 border-cyan-500/30
              shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]
              transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(6,182,212,0.4)] 
              hover:translate-x-[-2px] hover:translate-y-[-2px]
              relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600/10 to-purple-600/10"></span>
              <span className="relative z-10">JOIN COMMUNITY</span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 
              border border-cyan-500/30 bg-[#12121e] 
              shadow-[3px_3px_0px_0px_rgba(6,182,212,0.2)]
              hover:shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]
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
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#0a0a18] rounded-md 
          border-2 border-cyan-600/30
          shadow-[6px_6px_0px_0px_rgba(6,182,212,0.2)]
          backdrop-blur-lg z-50 transition-all duration-300 transform origin-top">
          <div className="p-4 space-y-3">
            <a href="#" 
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border 
              ${activeSection === 'home' 
                ? 'bg-[#12121e] text-cyan-400 border-cyan-500/30 shadow-[3px_3px_0px_0px_rgba(6,182,212,0.2)]' 
                : 'text-gray-300 border-gray-800/50 hover:border-cyan-500/20 hover:shadow-[2px_2px_0px_0px_rgba(6,182,212,0.1)]'}`}
              onClick={() => {setActiveSection('home'); setMobileMenuOpen(false);}}>
              HOME
            </a>
            <a href="#about" 
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border
              ${activeSection === 'about' 
                ? 'bg-[#12121e] text-purple-400 border-purple-500/30 shadow-[3px_3px_0px_0px_rgba(147,51,234,0.2)]' 
                : 'text-gray-300 border-gray-800/50 hover:border-purple-500/20 hover:shadow-[2px_2px_0px_0px_rgba(147,51,234,0.1)]'}`}
              onClick={() => {setActiveSection('about'); setMobileMenuOpen(false);}}>
              ABOUT
            </a>
            <a href="#events" 
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border
              ${activeSection === 'events' 
                ? 'bg-[#12121e] text-cyan-400 border-cyan-500/30 shadow-[3px_3px_0px_0px_rgba(6,182,212,0.2)]' 
                : 'text-gray-300 border-gray-800/50 hover:border-cyan-500/20 hover:shadow-[2px_2px_0px_0px_rgba(6,182,212,0.1)]'}`}
              onClick={() => {setActiveSection('events'); setMobileMenuOpen(false);}}>
              EVENTS
            </a>
            <a href="#faq" 
              className={`block px-4 py-3 text-center font-mono font-medium tracking-wider transition-all duration-300 border
              ${activeSection === 'faq' 
                ? 'bg-[#12121e] text-purple-400 border-purple-500/30 shadow-[3px_3px_0px_0px_rgba(147,51,234,0.2)]' 
                : 'text-gray-300 border-gray-800/50 hover:border-purple-500/20 hover:shadow-[2px_2px_0px_0px_rgba(147,51,234,0.1)]'}`}
              onClick={() => {setActiveSection('faq'); setMobileMenuOpen(false);}}>
              FAQ
            </a>
          </div>
          <div className="p-4 border-t border-gray-800">
            <a href="https://discord.gg/UwmUS9xKsF" target="_blank" rel="noopener noreferrer" 
              className="block w-full text-center bg-[#12121e] text-white font-mono font-medium py-3 px-4
              border-2 border-cyan-500/30
              shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]
              transition-all duration-300 hover:shadow-[5px_5px_0px_0px_rgba(6,182,212,0.4)]
              hover:translate-x-[-1px] hover:translate-y-[-1px]
              relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10"></div>
              <span className="relative z-10">JOIN COMMUNITY</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
