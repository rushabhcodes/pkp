import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { getAllEvents } from "../data/eventsData";


export default function EventsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get all events from our centralized data source
  const events = getAllEvents();

  const categories = [...new Set(events.map(event => event.category))].filter(Boolean) as string[];
  
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleEventClick = (eventSlug: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    // Small timeout to ensure the scroll happens before navigation
    setTimeout(() => {
      navigate(`/events/${eventSlug}`);
    }, 10);
  };

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Events</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Join our upcoming hackathons, workshops, and tech events to learn, connect, and showcase your skills.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row gap-6 justify-between">
                <div className="flex-1">
                  <Input
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-md"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={selectedCategory === null ? "default" : "neutral"}
                    onClick={() => setSelectedCategory(null)}
                    className="rounded-full"
                  >
                    All
                  </Button>
                  {categories.map(category => (
                    <Button 
                      key={category}
                      variant={selectedCategory === category ? "default" : "neutral"}
                      onClick={() => setSelectedCategory(category)}
                      className="rounded-full"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                    <Card key={event.id} className="overflow-hidden transition-shadow hover:shadow-lg border border-gray-200">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            {event.category && (
                              <Badge variant="neutral" className="bg-indigo-50 text-indigo-800 border-indigo-100">
                                {event.category}
                              </Badge>
                            )}
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="bg-gray-50 px-3 py-1 rounded-full text-sm font-medium text-gray-800 border border-gray-200">
                                  {event.location}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Event Location</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-500 mb-3">
                          <svg className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </div>
                        <p className="line-clamp-2 text-gray-700">{event.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button 
                          variant="default"
                          onClick={(e) => handleEventClick(event.slug, e)}
                        >
                          View Details
                        </Button>
                        {event.details?.applicationDeadline && (
                          <div className="text-sm text-gray-500">
                            Apply by: <span className="font-medium">{event.details.applicationDeadline}</span>
                          </div>
                        )}
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 py-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No events found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
