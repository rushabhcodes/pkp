import { useNavigate } from "react-router-dom";
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
import { getFeaturedEvents } from "../data/eventsData";

export default function EventsSection() {
  const navigate = useNavigate();
  
  const handleEventClick = (eventSlug: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    // Scroll to top before navigating to prevent the feeling of being "stuck" at the bottom
    window.scrollTo(0, 0);
    // Small timeout to ensure the scroll happens before navigation
    setTimeout(() => {
      navigate(`/events/${eventSlug}`);
    }, 10);
  };
  
  const events = getFeaturedEvents();

  return (
    <section id="events" className="py-24 bg-white text-gray-800 relative">
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
            <h2 className="text-4xl font-black font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 uppercase tracking-wider">Featured Hackathons</h2>
            <div className="h-1 w-24 bg-indigo-500 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto mt-6 bg-white p-4 border-l-4 border-indigo-500 shadow-[4px_4px_0px_0px_rgba(79,70,229,0.3)]">
            <p className="text-gray-700 text-lg">
              Join our upcoming hackathons hosted on Devfolio and showcase your skills to the community.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {events.map(event => (
            <div key={event.id} className="group relative">
              <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse"></div>
              <Card className="relative overflow-hidden border-indigo-500/30 shadow-[6px_6px_0px_0px_rgba(79,70,229,0.3)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(79,70,229,0.4)] hover:border-indigo-400 transition-all duration-300">
                <div className="h-48 overflow-hidden border-b-2 border-indigo-500/50 relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-3 text-white font-semibold text-lg">
                      {event.slug.replace(/^pkp-([^-]+)-.*$/, (_, loc) => loc.charAt(0).toUpperCase() + loc.slice(1))}
                    </div>
                  </div>
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
                  
                  {event.details?.prizes && (
                    <div className="bg-indigo-50 p-3 rounded-md border border-indigo-200 mb-4">
                      <p className="text-indigo-800 font-medium flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.details.prizes}
                      </p>
                    </div>
                  )}
                  
                  {event.details?.applicationDeadline && (
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Apply by: <span className="font-medium ml-1">{event.details.applicationDeadline}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                  <Button 
                    onClick={(e) => handleEventClick(event.slug, e)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="neutral" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`https://devfolio.co/${event.slug}`, '_blank');
                    }}
                  >
                    Register on Devfolio
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button 
                variant="neutral" 
                size="lg" 
                onClick={() => navigate('/events')}
              >
                View All Events
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white border border-indigo-200">
              <div className="flex justify-between space-x-4">
                <div>
                  <h4 className="text-sm font-semibold">Event Calendar</h4>
                  <p className="text-sm text-gray-600">
                    View our complete event calendar with more workshops, hackathons, and tech meetups.
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
