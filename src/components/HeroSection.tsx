export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Magenta Orb Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brutalist heading with glitch effect */}
          <div className="relative mb-6 inline-block">
            <h1 className="text-5xl md:text-6xl font-bold font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 
                          animate-pulse relative z-10">
              Programmers ka Parivar
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-20 -z-10"></div>
          </div>
          
          <div className="inline-block bg-[#111827] border-2 border-cyan-500/50 p-4 rounded-lg mb-8 shadow-[5px_5px_0px_0px_rgba(6,182,212,0.3)]">
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              Where code meets community. Learn, share, and grow together.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a href="https://discord.gg/UwmUS9xKsF" target="_blank" rel="noopener noreferrer" 
              className="group relative px-8 py-4 bg-cyan-600 text-white font-black uppercase tracking-wider text-lg rounded-lg border-2 border-cyan-500
                       transform transition-all duration-300 hover:-translate-y-1 hover:translate-x-1
                       hover:shadow-[8px_8px_0px_0px_rgba(6,182,212,0.5)] shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]">
              <span className="relative z-10">Join Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </a>
            
            <button className="px-8 py-4 bg-transparent text-white font-black uppercase tracking-wider text-lg rounded-lg border-2 border-gray-600
                              transform transition-all duration-300 hover:-translate-y-1 hover:translate-x-1
                              hover:shadow-[8px_8px_0px_0px_rgba(75,85,99,0.4)] shadow-[4px_4px_0px_0px_rgba(75,85,99,0.2)]">
              Explore Events
            </button>
          </div>
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-gray-700 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
