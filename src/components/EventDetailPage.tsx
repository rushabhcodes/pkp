import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";


import { useParams } from 'react-router-dom';
import { getEventBySlug } from "../data/eventsData";
import type { EventType } from "../data/eventsData";

export default function EventDetailPage() {
  const { eventSlug = "" } = useParams<{ eventSlug: string }>();
  const [event, setEvent] = useState<EventType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the event data from our centralized data source
    
    // Simulate an API call with a slight delay
    setTimeout(() => {
      const foundEvent = getEventBySlug(eventSlug);
      setEvent(foundEvent || null);
      setLoading(false);
    }, 500);
  }, [eventSlug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Event Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">We couldn't find the event you're looking for.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
              <div>
                <Badge variant="neutral" className="mb-4 bg-indigo-600 text-white border-indigo-800 font-bold">{event.location}</Badge>
                <h1 className="text-4xl font-black text-white mb-4">{event.title}</h1>
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">{event.date}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button 
                  variant="neutral" 
                  className="bg-white text-indigo-700 border-white hover:bg-indigo-50"
                  onClick={() => window.history.back()}
                >
                  Back to Events
                </Button>
                <Button
                  onClick={() => {
                    window.open(`https://devfolio.co/${event.slug}`, '_blank');
                  }}
                >
                  Register on Devfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Event</h2>
              <p className="text-gray-700">{event.description}</p>
              
              {event.details?.prizes && (
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 my-8">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Prizes and Rewards
                  </h3>
                  <p className="text-indigo-800">{event.details.prizes}</p>
                </div>
              )}
            </div>

            {event.details?.schedule && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h2>
                <div className="space-y-6">
                  {event.details.schedule.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <div className="w-0.5 h-full bg-indigo-200 mx-auto"></div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                          <h3 className="text-lg font-medium text-gray-900">{item.activity}</h3>
                          <div className="flex items-center text-gray-500 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {item.time}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div>
            <div className="sticky top-24">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h2>
                
                <div className="space-y-4">
                  {event.details?.organizer && (
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Organizer</div>
                      <div className="font-medium">{event.details.organizer}</div>
                    </div>
                  )}
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-medium">{event.location}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Date</div>
                    <div className="font-medium">{event.date}</div>
                  </div>
                  
                  {event.details?.applicationDeadline && (
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Application Deadline</div>
                      <div className="font-medium text-red-600">{event.details.applicationDeadline}</div>
                    </div>
                  )}
                </div>
              </div>
              
              {event.details?.sponsors && event.details.sponsors.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Sponsors</h2>
                  <div className="space-y-3">
                    {event.details.sponsors.map((sponsor, index) => (
                      <div key={index} className="bg-white p-3 rounded border border-gray-200 text-center">
                        {sponsor}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  onClick={() => {
                    window.open(`https://devfolio.co/${event.slug}`, '_blank');
                  }}
                >
                  Register Now
                </Button>
                <p className="text-sm text-gray-500 mt-2">Registration closes on {event.details?.applicationDeadline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
