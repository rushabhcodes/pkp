export default function Footer() {
  return (
    <footer className="bg-[#0a0a18] text-gray-400 pt-16 pb-8 relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), 
                           linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Diagonal Separator */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -mt-16">
          <div className="absolute inset-0 bg-[#0a0a18] transform -skew-y-2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Main column */}
            <div className="md:col-span-6 bg-[#12121e] p-6 rounded-lg border-2 border-cyan-600/20 shadow-[6px_6px_0px_0px_rgba(6,182,212,0.2)]">
              <h3 className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 uppercase tracking-wider">Programmers ka Parivar</h3>
              <div className="h-1 w-16 bg-cyan-500 mb-6"></div>
              <p className="mb-6 text-gray-300 font-medium">
                Building a supportive community of developers, one line of code at a time.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="relative group">
                  <div className="absolute inset-0 bg-cyan-500 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative h-10 w-10 bg-[#0a0a18] flex items-center justify-center rounded-md border border-cyan-500/30 hover:border-cyan-400 transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                </a>
                
                <a href="#" className="relative group">
                  <div className="absolute inset-0 bg-purple-500 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative h-10 w-10 bg-[#0a0a18] flex items-center justify-center rounded-md border border-purple-500/30 hover:border-purple-400 transition-colors duration-300">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                
                <a href="https://discord.gg/UwmUS9xKsF" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="absolute inset-0 bg-cyan-500 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative h-10 w-10 bg-[#0a0a18] flex items-center justify-center rounded-md border border-cyan-500/30 hover:border-cyan-400 transition-colors duration-300">
                    <span className="sr-only">Discord</span>
                    <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.608 1.2495-1.8447-.2762-3.6677-.2762-5.4878 0-.1634-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/programmers_ka_pariwar/" target="_blank" rel="noopener noreferrer" className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative h-10 w-10 bg-[#0a0a18] flex items-center justify-center rounded-md border border-pink-500/30 hover:border-pink-400 transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Navigation column */}
            <div className="md:col-span-3 mt-10 md:mt-0">
              <h3 className="text-xl font-bold font-mono text-white mb-6 uppercase tracking-wider border-l-4 border-purple-500 pl-4">Navigation</h3>
              <ul className="space-y-4 ml-4">
                <li>
                  <a href="#" className="inline-flex group">
                    <span className="w-2 h-2 mt-1.5 mr-3 bg-purple-600 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="inline-flex group">
                    <span className="w-2 h-2 mt-1.5 mr-3 bg-purple-600 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">About</span>
                  </a>
                </li>
                <li>
                  <a href="#events" className="inline-flex group">
                    <span className="w-2 h-2 mt-1.5 mr-3 bg-purple-600 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">Events</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" className="inline-flex group">
                    <span className="w-2 h-2 mt-1.5 mr-3 bg-purple-600 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">FAQ</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact column */}
            <div className="md:col-span-3 mt-10 md:mt-0">
              <h3 className="text-xl font-bold font-mono text-white mb-6 uppercase tracking-wider border-l-4 border-cyan-500 pl-4">Contact</h3>
              <div className="ml-4 space-y-4">
                <p className="flex items-start">
                  <span className="w-2 h-2 mt-1.5 mr-3 bg-cyan-600"></span>
                  <span className="text-gray-300">contact@pkp.org</span>
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 mt-1.5 mr-3 bg-cyan-600"></span>
                  <span className="text-gray-300">Discord: PKP Community</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-16 pt-8 text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <p className="font-mono text-sm">© {new Date().getFullYear()} <span className="text-cyan-400 font-bold">Programmers ka Parivar</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
