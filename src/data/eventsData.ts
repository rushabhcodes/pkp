export interface EventType {
  id: number;
  title: string;
  slug: string;
  date: string;
  location: string;
  description: string;
  image: string;
  featured?: boolean;
  category?: string;
  details?: {
    organizer?: string;
    prizes?: string;
    schedule?: {
      date: string;
      time: string;
      activity: string;
    }[];
    sponsors?: string[];
    applicationDeadline?: string;
  };
}

export const events: EventType[] = [
  {
    id: 1,
    title: "PKP Delhi Hackathon 2025",
    slug: "pkp-delhi-2025",
    date: "October 11-12, 2025",
    location: "Online",
    description: "Join us for the PKP Delhi Hackathon 2025, a 36-hour virtual coding event where teams compete to build innovative solutions to real-world problems.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Hackathon",
    featured: true,
    details: {
      organizer: "PKP Delhi Chapter",
      prizes: "₹100,000 in cash prizes, mentorship opportunities, and exclusive swag kits",
      schedule: [
        {
          date: "October 11, 2025",
          time: "9:00 AM - 10:30 AM",
          activity: "Opening Ceremony & Team Formation"
        },
        {
          date: "October 11, 2025",
          time: "11:00 AM - 1:00 PM",
          activity: "Workshops & Problem Statement Reveal"
        },
        {
          date: "October 11-12, 2025",
          time: "1:00 PM - 8:00 AM",
          activity: "Hacking Period with Mentor Sessions"
        },
        {
          date: "October 12, 2025",
          time: "2:00 PM - 4:30 PM",
          activity: "Project Presentations & Judging"
        }
      ],
      sponsors: ["DevCorp India", "CloudStack", "CodeFuture", "TechMinds"],
      applicationDeadline: "October 5, 2025"
    }
  },
  {
    id: 2,
    title: "PKP Jaipur Hackathon 2025",
    slug: "pkp-jaipur-2025",
    date: "October 18-19, 2025",
    location: "Online",
    description: "PKP Jaipur Hackathon brings together developers, designers, and innovators for a weekend of coding, creativity, and problem-solving.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    category: "Hackathon",
    featured: true,
    details: {
      organizer: "PKP Jaipur Chapter",
      prizes: "₹150,000 prize pool, startup incubation opportunities, and tech gadgets",
      schedule: [
        {
          date: "October 18, 2025",
          time: "8:30 AM - 10:00 AM",
          activity: "Registration & Kickoff Event"
        },
        {
          date: "October 18, 2025",
          time: "10:30 AM - 12:30 PM",
          activity: "Tech Talks & Challenge Introduction"
        },
        {
          date: "October 18-19, 2025",
          time: "1:00 PM - 10:00 AM",
          activity: "Coding Marathon with Expert Support"
        },
        {
          date: "October 19, 2025",
          time: "2:30 PM - 5:00 PM",
          activity: "Demo Sessions & Evaluation"
        }
      ],
      sponsors: ["InnovateHub", "DigitalSolutions", "NextGenAI", "StartupBoost"],
      applicationDeadline: "October 12, 2025"
    }
  },
  {
    id: 3,
    title: "PKP Mumbai Hackathon 2025",
    slug: "pkp-mumbai-2025",
    date: "November 15-16, 2025",
    location: "Mumbai",
    description: "A weekend of innovation, learning, and collaboration at Mumbai's premier hackathon event.",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Hackathon",
    details: {
      organizer: "PKP Mumbai Chapter",
      prizes: "₹200,000 in cash prizes and internship opportunities",
      applicationDeadline: "November 8, 2025"
    }
  },
  {
    id: 4,
    title: "Web Development Workshop",
    slug: "web-dev-workshop",
    date: "December 5, 2025",
    location: "Online",
    description: "A comprehensive workshop on modern web development techniques, frameworks, and best practices.",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Workshop"
  },
  {
    id: 5,
    title: "Tech Meetup 2026",
    slug: "tech-meetup-2026",
    date: "January 15, 2026",
    location: "Bangalore",
    description: "Connect with like-minded tech enthusiasts, share ideas, and explore collaboration opportunities.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Networking"
  },
  {
    id: 6,
    title: "PKP Tech Conference",
    slug: "pkp-tech-conference",
    date: "February 10-12, 2026",
    location: "Delhi",
    description: "A three-day conference featuring industry leaders, technical workshops, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Conference"
  }
];

// Helper functions
export const getFeaturedEvents = (): EventType[] => {
  return events.filter(event => event.featured);
};

export const getEventBySlug = (slug: string): EventType | undefined => {
  return events.find(event => event.slug === slug);
};

export const getAllEvents = (): EventType[] => {
  return events;
};
