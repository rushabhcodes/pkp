import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
    <section id="events" className="py-24 bg-white text-gray-800 relative">
      {/* White Sphere Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ 
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
          `,
          backgroundSize: '32px 32px, 32px 32px, 100% 100%',
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl font-black font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 uppercase tracking-wider">Upcoming Events</h2>
            <div className="h-1 w-24 bg-indigo-500 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto mt-6 bg-white p-4 border-l-4 border-indigo-500 shadow-[4px_4px_0px_0px_rgba(79,70,229,0.3)]">
            <p className="text-gray-700 text-lg">
              Join us for exciting events, workshops, and meetups throughout the year.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map(event => (
            <div key={event.id} className="group relative">
              <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse"></div>
              <Card className="relative overflow-hidden border-indigo-500/30 shadow-[6px_6px_0px_0px_rgba(79,70,229,0.3)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(79,70,229,0.4)] hover:border-indigo-400 transition-all duration-300">
                <div className="h-48 overflow-hidden border-b-2 border-indigo-500/50">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="p-0">
                  <div className="flex flex-col sm:flex-row gap-3 justify-between items-start p-6 pb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-50 flex items-center justify-center rounded-md border border-indigo-500/30 mr-2">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <Badge variant="neutral" className="bg-indigo-50 text-indigo-600 border-indigo-200 font-mono">{event.date}</Badge>
                    </div>
                    <div className="flex items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="w-8 h-8 bg-purple-50 flex items-center justify-center rounded-md border border-purple-300/30 mr-2">
                              <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-white border border-purple-500/30 text-gray-800">
                            <p>Event Location</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <Badge variant="neutral" className="bg-purple-50 text-purple-700 border-purple-300 font-mono">{event.location}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardTitle className="text-xl font-black text-gray-800 mb-3 font-mono">{event.title}</CardTitle>
                  <div className="h-1 w-12 bg-indigo-500 mb-4"></div>
                  <p className="text-gray-700 mb-5">{event.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button>Register Now</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="neutral" size="lg">
                View All Events
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white border border-indigo-200">
              <div className="flex justify-between space-x-4">
                <div>
                  <h4 className="text-sm font-semibold">Event Calendar</h4>
                  <p className="text-sm text-gray-600">
                    View our complete event calendar with 20+ upcoming events including workshops, hackathons, and meetups.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
}
