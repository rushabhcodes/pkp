import { Button } from "./ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "./ui/card";
import { Badge } from "./ui/badge";
import Marquee from "./ui/marquee";
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

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-white relative">
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brutalist heading with glitch effect */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-center mb-3">
              <Badge variant="neutral" className="bg-indigo-100 text-indigo-700 border-indigo-300 px-3 py-1 text-xs font-mono">
                Community • Learning • Collaboration
              </Badge>
            </div>
            <div className="relative inline-block">
              <h1
                className="text-5xl md:text-6xl font-bold font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 
                            animate-pulse relative z-10"
              >
                Programmers ka Parivar
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-xl opacity-20 -z-10"></div>
            </div>
          </div>

         <Card className="border-indigo-500/50 shadow-[5px_5px_0px_0px_rgba(79,70,229,0.3)]">
  <CardHeader>
    <CardTitle className="text-indigo-600 font-mono">TECH COMMUNITY</CardTitle>
    <CardDescription className="text-gray-500">For developers, by developers</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-xl md:text-2xl font-semibold mb-4">
      Where code meets community. Learn, share, and grow together.
    </p>
    <Marquee items={["React", "TypeScript", "Node.js", "Python", "Java", "Flutter", "Rust", "Go", "AWS", "DevOps", "AI/ML", "Web3"]} />
  </CardContent>
</Card>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button asChild>
                  <a  
                  href="https://discord.gg/UwmUS9xKsF"
                  target="_blank"
                  rel="noopener noreferrer"
                    >
                  Join Community
                  </a>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white border border-indigo-200">
                <div className="flex justify-between space-x-4">
                  <div>
                    <h4 className="text-sm font-semibold">Join our Discord</h4>
                    <p className="text-sm text-gray-600">
                      Connect with 10,000+ developers, join discussions, get help with your projects, and attend virtual events.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Button variant={"neutral"} asChild>
              <a href="#events">
                Explore Events
              </a>
            </Button>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="noShadow" 
                  size="icon" 
                  className="mt-6 animate-bounce bg-indigo-100 border-indigo-300 text-indigo-600 rounded-full h-10 w-10 p-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white border border-indigo-500/30 text-gray-800">
                <p>Scroll Down</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
