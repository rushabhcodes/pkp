import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';

export default function FAQSection() {

  const faqs = [
    {
      question: "How do I join Programmers ka Parivar?",
      answer: "Joining is simple! Click the 'Join Community' button at the top of this page and fill out the quick registration form. You'll get immediate access to our Discord server and community forums."
    },
    {
      question: "Are all events free to attend?",
      answer: "Most of our online events and meetups are free for community members. Premium workshops and conferences may have a fee, but we offer scholarships for students and those in need."
    },
    {
      question: "Can I contribute to the community as a beginner?",
      answer: "Absolutely! We welcome developers of all skill levels. Beginners can participate in study groups and contribute to beginner-friendly open source projects we maintain."
    },
    {
      question: "Where do events take place?",
      answer: "Events are held both online and in-person across major cities in India. Check the Events section for details and locations."
    },
    {
      question: "Is there a code of conduct?",
      answer: "Yes, we have a strict code of conduct to ensure a safe and inclusive environment for all members. Please review it before participating in any event or discussion."
    },
    {
      question: "How can my company sponsor or partner with Programmers ka Parivar?",
  answer: "We're always looking for partnerships that benefit our community! Please reach out to us at partnerships@pkp.codes to discuss sponsorship opportunities, event collaborations, or other partnerships."
    },
    {
      question: "How do I get updates about upcoming events?",
      answer: "Join our Discord server and follow us on social media to stay updated about upcoming events, workshops, and meetups."
    }
  ];
  
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(query.toLowerCase()) ||
    faq.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-white text-gray-800 relative overflow-hidden">
      {/* White Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl font-black font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 mb-4 uppercase tracking-wider">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto mt-6 bg-purple-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
            <p className="text-gray-800 text-lg font-medium">
              Got questions? We've got answers.
            </p>
            
            <form
              className="mt-4 flex gap-2"
              onSubmit={e => {
                e.preventDefault();
                setQuery(search);
              }}
            >
              <Input
                placeholder="Search FAQs..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="border-2 border-black focus-visible:ring-purple-500"
              />
              <Button
                type="submit"
                className="border-2 border-black bg-purple-500 text-white hover:bg-purple-600"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 hover:-translate-y-1 hover:translate-x-1 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 font-bold text-gray-800 hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 bg-purple-50">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">No FAQs found for your search.</div>
          )}
        </Accordion>
        
        <div className="mt-12">
          <Card className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-mono">Still have questions?</CardTitle>
              <CardDescription>Our team is just an email away</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                If you couldn't find the answer to your question, feel free to reach out to us directly.
              </p>
            </CardContent>
            <CardFooter>
              <a href="mailto:contact@pkp.codes">
                <Button className="border-2 border-black bg-purple-500 text-white hover:bg-purple-600">
                  Contact Support
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
