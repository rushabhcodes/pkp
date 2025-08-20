export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Code Camp 2025",
      date: "September 15-18, 2025",
      location: "Virtual & Bangalore",
      description: "A 4-day immersive coding experience with workshops, hackathons, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "React Deep Dive",
      date: "October 5, 2025",
      location: "Online",
      description: "Master advanced React concepts with our expert instructors in this full-day workshop.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Tech Career Fair",
      date: "November 12, 2025",
      location: "Mumbai",
      description: "Connect with top tech companies and find your next opportunity in this exclusive hiring event.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="events" className="py-24 bg-[#131325] text-white relative">
      {/* Background pattern for brutalist effect */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), 
                           linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl font-black font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 uppercase tracking-wider">Upcoming Events</h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto mt-6 bg-[#1a1a2e] p-4 border-l-4 border-cyan-500 shadow-[4px_4px_0px_0px_rgba(6,182,212,0.3)]">
            <p className="text-gray-300 text-lg">
              Join us for exciting events, workshops, and meetups throughout the year.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map(event => (
            <div key={event.id} className="group relative">
              <div className="absolute inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-[#1a1a2e] border-2 border-purple-500/30 rounded-xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(139,92,246,0.3)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(139,92,246,0.4)] transition-all duration-300">
                <div className="h-48 overflow-hidden border-b-4 border-purple-600/50">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row gap-3 justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0a0a18] flex items-center justify-center rounded-md border border-cyan-500/30 mr-2">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm text-cyan-400 font-bold font-mono bg-[#131325] px-3 py-1 rounded-md border border-cyan-500/30">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0a0a18] flex items-center justify-center rounded-md border border-purple-500/30 mr-2">
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-purple-300 font-mono">{event.location}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 font-mono">{event.title}</h3>
                  <div className="h-1 w-12 bg-cyan-500 mb-4"></div>
                  <p className="text-gray-300 mb-5">{event.description}</p>
                  <button className="px-6 py-3 bg-purple-600 text-white font-bold uppercase text-sm tracking-wider rounded border-2 border-purple-500
                                   transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.5)]">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-transparent text-white font-black uppercase tracking-wider text-lg rounded-lg border-2 border-gray-600
                          transform transition-all duration-300 hover:-translate-y-1 hover:translate-x-1
                          hover:shadow-[8px_8px_0px_0px_rgba(75,85,99,0.4)] shadow-[4px_4px_0px_0px_rgba(75,85,99,0.2)]">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
