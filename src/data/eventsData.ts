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
  registrationLink?: string;
  registrationPlatform?: string;
  details?: {
    organizer?: string;
    prizes?: string;
    schedule?: {
      date: string;
      time: string;
      activity: string;
    }[];
    sponsors?: (
      | string
      | {
          name: string;
          logo: string;
          alt: string;
          website?: string;
        }
    )[];
    applicationDeadline?: string;
  };
}

export const events: EventType[] = [
  {
    id: 1,
    title: 'PKP Delhi Hackathon 2025',
    slug: 'pkp-delhi-2025',
    date: 'October 11-12, 2025',
    location: 'Online',
    description:
      'Join us for the PKP Delhi Hackathon 2025, a 24-hour virtual coding event where teams compete to build innovative solutions to real-world problems.',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Hackathon',
    featured: true,
    registrationLink: 'https://devfolio.co/pkp-delhi-2025',
    registrationPlatform: 'Devfolio',
    details: {
      organizer: 'PKP Delhi Chapter',
      prizes:
        '₹15,000 in cash prizes, mentorship opportunities, and exclusive swag kits revealed soon',
      schedule: [
        {
          date: 'September 01, 2025',
          time: '12:00 AM',
          activity: 'Registration Begins',
        },
        {
          date: 'October 05, 2025',
          time: '11:59 PM',
          activity: 'Registration Closes',
        },
        {
          date: 'October 11, 2025',
          time: '10:00 PM - 10:30 AM',
          activity: 'Inaugural Ceremony',
        },
        {
          date: 'October 11, 2025',
          time: '10:30 AM',
          activity: 'Problem Statements Released & Hacking Begins',
        },
        {
          date: 'October 11, 2025',
          time: '3:00 PM - 7:00 PM',
          activity: 'Mentoring Sessions',
        },
        {
          date: 'October 12, 2025',
          time: '10:00 AM - 2:00 PM',
          activity: 'Judging Round and Closing Ceremony',
        },
        {
          date: 'October 12, 2025',
          time: '7:00 PM',
          activity: 'Results Announcement',
        },
      ],
      sponsors: [
        {
          name: 'Devfolio',
          logo: 'https://file.notion.so/f/f/5bc094c8-987c-4274-938f-8a9d3fad1a04/cc5173fd-2a6a-434e-9d48-1883d77bfc9f/_Colored.png?table=block&id=d55db242-49ff-4e05-8fae-865dc9b77873&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&expirationTimestamp=1756231200000&signature=J4tZu2fDWCEmV3HLboy__ldlrGD9xIpyBTTcLRafIhQ&downloadName=_Colored.png',
          alt: 'DEVFOLIO LOGO',
          website: 'https://devfolio.co'
        },
         {
          name: 'ETH India',
          logo: 'https://file.notion.so/f/f/5bc094c8-987c-4274-938f-8a9d3fad1a04/4cf44e1b-7c65-42d7-81e8-dcd506fc2842/Untitled.png?table=block&id=f0624a9f-0c26-457b-bfc4-7a9bc1716670&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&expirationTimestamp=1756231200000&signature=KCVZokUKllCgl6cEUv3VSojp4Pa32g0dyovAaXBu6SU&downloadName=Untitled.png',
          alt: 'ETHINDIA LOGO',
          website: 'https://ethindia.co'
        }
      ],
      applicationDeadline: 'October 5, 2025',
    },
  },
  {
    id: 2,
    title: 'PKP Jaipur Hackathon 2025',
    slug: 'pkp-jaipur-2025',
    date: 'October 18-19, 2025',
    location: 'Online',
    description:
      'PKP Jaipur Hackathon brings together developers, designers, and innovators for a weekend of coding, creativity, and problem-solving.',
    image:
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0',
    category: 'Hackathon',
    featured: true,
    registrationLink: 'https://devfolio.co/pkp-jaipur-2025',
    registrationPlatform: 'Devfolio',
    details: {
      organizer: 'PKP Jaipur Chapter',
      prizes:
        '₹15,000 in prize pool, startup incubation opportunities, and tech gadgets revelaed soon',
      schedule: [
        {
          date: 'September 01, 2025',
          time: '12:00 AM',
          activity: 'Registration Begins',
        },
        {
          date: 'October 12, 2025',
          time: '11:59 PM',
          activity: 'Registration Closes',
        },
        {
          date: 'October 18, 2025',
          time: '10:00 PM - 10:30 AM',
          activity: 'Inaugural Ceremony',
        },
        {
          date: 'October 18, 2025',
          time: '10:30 AM',
          activity: 'Problem Statements Released & Hacking Begins',
        },
        {
          date: 'October 18, 2025',
          time: '3:00 PM - 7:00 PM',
          activity: 'Mentoring Sessions',
        },
        {
          date: 'October 19, 2025',
          time: '10:00 AM - 2:00 PM',
          activity: 'Judging Round and Closing Ceremony',
        },
        {
          date: 'October 19, 2025',
          time: '7:00 PM',
          activity: 'Results Announcement',
        },
      ],
      sponsors: [
        {
          name: 'Devfolio',
          logo: 'https://file.notion.so/f/f/5bc094c8-987c-4274-938f-8a9d3fad1a04/cc5173fd-2a6a-434e-9d48-1883d77bfc9f/_Colored.png?table=block&id=d55db242-49ff-4e05-8fae-865dc9b77873&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&expirationTimestamp=1756231200000&signature=J4tZu2fDWCEmV3HLboy__ldlrGD9xIpyBTTcLRafIhQ&downloadName=_Colored.png',
          alt: 'DEVFOLIO LOGO',
          website: 'https://devfolio.co'
        },
        {
          name: 'ETH India',
          logo: 'https://file.notion.so/f/f/5bc094c8-987c-4274-938f-8a9d3fad1a04/4cf44e1b-7c65-42d7-81e8-dcd506fc2842/Untitled.png?table=block&id=f0624a9f-0c26-457b-bfc4-7a9bc1716670&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&expirationTimestamp=1756231200000&signature=KCVZokUKllCgl6cEUv3VSojp4Pa32g0dyovAaXBu6SU&downloadName=Untitled.png',
          alt: 'ETHINDIA LOGO',
          website: 'https://ethindia.co'
        }
      ],
      applicationDeadline: 'October 12, 2025',
    },
  },
  {
    id: 3,
    title: 'PKP Mumbai Hackathon 2025',
    slug: 'pkp-mumbai-2025',
    date: 'December 6-7, 2025',
    location: 'Online',
    description:
      "A weekend of innovation, learning, and collaboration at Mumbai's premier hackathon event.",
    image:
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Hackathon',
    featured: true,
    registrationLink: ' https://unstop.com/hackathons/pkp-mumbai-hackathon-2025-programmers-ka-parivar-1547177',
    registrationPlatform: 'Unstop',
    details: {
      organizer: 'PKP Mumbai Chapter',
      prizes:
        '₹30,000 in cash prizes, internship opportunities, and exclusive swag kits',
      schedule: [
        {
          date: 'August 26, 2025',
          time: '12:00 AM',
          activity: 'Registration Begins',
        },
        {
          date: 'December 01, 2025',
          time: '11:59 PM',
          activity: 'Registration Closes',
        },
        {
          date: 'December 06, 2025',
          time: '10:00 PM - 10:30 AM',
          activity: 'Inaugural Ceremony',
        },
        {
          date: 'December 06, 2025',
          time: '10:30 AM',
          activity: 'Problem Statements Released & Hacking Begins',
        },
        {
          date: 'December 06, 2025',
          time: '3:00 PM - 7:00 PM',
          activity: 'Mentoring Sessions',
        },
        {
          date: 'December 07, 2025',
          time: '10:00 AM - 2:00 PM',
          activity: 'Judging Round and Closing Ceremony',
        },
        {
          date: 'December 07, 2025',
          time: '7:00 PM',
          activity: 'Results Announcement',
        },
      ],
      sponsors: [
        {
          name: 'Devfolio',
          logo: 'https://file.notion.so/f/f/5bc094c8-987c-4274-938f-8a9d3fad1a04/cc5173fd-2a6a-434e-9d48-1883d77bfc9f/_Colored.png?table=block&id=d55db242-49ff-4e05-8fae-865dc9b77873&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&expirationTimestamp=1756231200000&signature=J4tZu2fDWCEmV3HLboy__ldlrGD9xIpyBTTcLRafIhQ&downloadName=_Colored.png',
          alt: 'DEVFOLIO LOGO',
          website: 'https://devfolio.co'
        },
        {
          name: 'Appwrite',
          logo: 'https://appwrite.io/images-ee/press/logo-hero.svg',
          alt: 'APPWRITE LOGO',
          website: 'https://appwrite.io'
        },
        {
          name: 'Devtonius',
          logo: '',
          alt: 'DEVTONIUS LOGO'
        }
      ],
      applicationDeadline: 'December 1, 2025',
    },
  },
  // {
  //   id: 4,
  //   title: 'Web Development Workshop',
  //   slug: 'web-dev-workshop',
  //   date: 'December 5, 2025',
  //   location: 'Online',
  //   description:
  //     'A comprehensive workshop on modern web development techniques, frameworks, and best practices.',
  //   image:
  //     'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //   category: 'Workshop',
  // },
  // {
  //   id: 5,
  //   title: 'Tech Meetup 2026',
  //   slug: 'tech-meetup-2026',
  //   date: 'January 15, 2026',
  //   location: 'Bangalore',
  //   description:
  //     'Connect with like-minded tech enthusiasts, share ideas, and explore collaboration opportunities.',
  //   image:
  //     'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //   category: 'Networking',
  // },
  // {
  //   id: 6,
  //   title: 'PKP Tech Conference',
  //   slug: 'pkp-tech-conference',
  //   date: 'February 10-12, 2026',
  //   location: 'Delhi',
  //   description:
  //     'A three-day conference featuring industry leaders, technical workshops, and networking opportunities.',
  //   image:
  //     'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //   category: 'Conference',
  // },
];

// Helper functions
export const getFeaturedEvents = (): EventType[] => {
  return events.filter((event) => event.featured);
};

export const getEventBySlug = (slug: string): EventType | undefined => {
  return events.find((event) => event.slug === slug);
};

export const getAllEvents = (): EventType[] => {
  return events;
};
