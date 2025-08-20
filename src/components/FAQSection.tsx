import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  
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
      answer: "Absolutely! We welcome developers of all skill levels. Beginners can participate in mentorship programs, study groups, and contribute to beginner-friendly open source projects we maintain."
    },
    {
      question: "Do you offer mentorship programs?",
      answer: "Yes, we run quarterly mentorship cohorts where experienced developers are paired with those looking to grow their skills. Applications open at the beginning of each quarter."
    },
    {
      question: "How can my company sponsor or partner with Programmers ka Parivar?",
      answer: "We're always looking for partnerships that benefit our community! Please reach out to us at partnerships@pkp.org to discuss sponsorship opportunities, event collaborations, or other partnerships."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section id="faq" className="py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Abstract geometric shapes for background */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl font-black font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 uppercase tracking-wider">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-cyan-500 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto mt-6 bg-[#131325] p-4 border-r-4 border-purple-500 shadow-[4px_4px_0px_0px_rgba(139,92,246,0.3)]">
            <p className="text-gray-300 text-lg font-medium">
              Got questions? We've got answers.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group relative ${openIndex === index ? 'mb-10' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-500/20 to-cyan-700/20' : 'from-purple-500/20 to-purple-700/20'} rounded-xl blur opacity-30 ${openIndex === index ? 'opacity-70' : ''} transition duration-500`}></div>
              <div className={`relative bg-[#131325] border-2 ${index % 2 === 0 ? 'border-cyan-500/30' : 'border-purple-500/30'} rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-[6px_6px_0px_0px_rgba(6,182,212,0.4)]' : 'shadow-[4px_4px_0px_0px_rgba(6,182,212,0.2)]'}`}>
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-bold font-mono text-white">{faq.question}</span>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-300 ${openIndex === index ? 'bg-cyan-900/50' : 'bg-transparent'}`}>
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-cyan-400' : 'text-gray-400'}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50"></div>
                  <div className="p-6">
                    <p className="text-gray-300 bg-[#0f0f1e] p-4 rounded-lg border-l-2 border-cyan-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
