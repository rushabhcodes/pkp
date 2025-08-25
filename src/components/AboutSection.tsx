import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800 relative">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 mb-4 uppercase tracking-wider">About Us</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Programmers ka Parivar is a vibrant community dedicated to bringing together developers from all backgrounds and skill levels for learning, collaboration, and growth.
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Featured/Spotlight Card - Spans 2 columns and 2 rows */}
          <div className="col-span-12 lg:col-span-6 row-span-1 group relative mb-6 md:mb-0">
            <div className="absolute inset-0.5 bg-gradient-to-tr from-cyan-600 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-100 group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-50 flex items-center justify-center rounded-md mb-2 border-2 border-purple-300">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-black text-gray-800 font-mono">Our Mission</CardTitle>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 mt-2"></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base md:text-lg mb-4">
                  We're building an inclusive tech ecosystem where programmers of all backgrounds collaborate, learn, and grow together.
                </p>
                <p className="text-gray-600">
                  Our community spans across different technologies, experience levels, and geographical locations, united by our passion for code and innovation.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded border border-purple-200 font-mono text-xs uppercase tracking-wide">Community</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded border border-purple-200 font-mono text-xs uppercase tracking-wide">Developers</span>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          {/* Values Card */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 group relative mb-4 md:mb-0">
            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-purple-50 flex items-center justify-center rounded-md mb-3 border-2 border-purple-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-black text-gray-800 font-mono">Our Values</CardTitle>
                <div className="h-1 w-12 bg-purple-500 mt-2"></div>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">&#9642;</span>
                    <span>Inclusive collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">&#9642;</span>
                    <span>Knowledge accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 flex-shrink-0">&#9642;</span>
                    <span>Continuous learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Community Support Card */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 group relative mb-4 md:mb-0">
            <div className="absolute inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-purple-50 flex items-center justify-center rounded-md mb-3 border-2 border-purple-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-black text-gray-800 font-mono">Collaboration & Networking</CardTitle>
                <div className="h-1 w-12 bg-purple-500 mt-2"></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Connect with fellow developers, join project teams, and expand your professional network through our vibrant community events.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Knowledge Sharing Card */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-3 group relative mb-4 md:mb-0">
            <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-purple-50 flex items-center justify-center rounded-md mb-2 border-2 border-purple-300">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-black text-gray-800 font-mono">Learning Resources</CardTitle>
                <div className="h-1 w-8 bg-purple-500 mt-2"></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Curated tutorials, articles, and learning paths for all skill levels.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Projects Card */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-3 group relative mb-4 md:mb-0">
            <div className="absolute inset-0.5 bg-gradient-to-r from-green-500 to-green-300 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-purple-50 flex items-center justify-center rounded-md mb-2 border-2 border-purple-300">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-black text-gray-800 font-mono">Open Source</CardTitle>
                <div className="h-1 w-8 bg-purple-500 mt-2"></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Collaborative projects that advance skills and create public value.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Languages/Technologies Card */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-3 group relative mb-4 md:mb-0">
            <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-purple-50 flex items-center justify-center rounded-md mb-2 border-2 border-purple-300">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-black text-gray-800 font-mono">Tech Focus</CardTitle>
                <div className="h-1 w-8 bg-purple-500 mt-2"></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Web, mobile, AI/ML, cloud, and emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Global Reach Card */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-3 group relative mb-4 md:mb-0">
            <div className="absolute inset-0.5 bg-gradient-to-r from-rose-500 to-rose-300 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-purple-50 flex items-center justify-center rounded-md mb-2 border-2 border-purple-300">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-black text-gray-800 font-mono">Global Community</CardTitle>
                <div className="h-1 w-8 bg-purple-500 mt-2"></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Members across 30+ countries sharing diverse perspectives.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Stats Card */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 group relative overflow-hidden">
            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-100 group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
            <Card className="relative h-full border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(139,92,246,1)] hover:border-purple-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-purple-50 flex items-center justify-center rounded-md mb-3 border-2 border-purple-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-black text-gray-800 font-mono">Community Impact</CardTitle>
                <div className="h-1 w-12 bg-purple-500 mt-2 mb-2"></div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-purple-600 mb-1">2K+</div>
                    <div className="text-gray-500 text-sm">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-purple-600 mb-1">10+</div>
                    <div className="text-gray-500 text-sm">Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-purple-600 mb-1">90+</div>
                    <div className="text-gray-500 text-sm">Projects</div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-cyan-500/30 opacity-50"></div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-purple-500/30 opacity-50"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
