import profilePic from '../assets/images/profile.png';
import resumePdf from '../assets/pdf/Banele_Mjaji_CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Hero() {

  return (
    // Use arbitrary background color
    <section id="home" className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-[#0C1821] py-16 px-4 md:px-10 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-around gap-10 max-w-6xl">

        {/* Content */}
        <div className="text-center md:text-left flex-1 max-w-2xl">
          {/* Use slate-200 and arbitrary accent color */}
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-200 mb-2">
            Hi there! I'm <span className="text-[#89FFAA]">Banele Mjaji</span>,
          </h1>
          {/* Use slate-400 and arbitrary accent color */}
          <h2 className="text-2xl md:text-3xl font-normal text-slate-400 mb-4 min-h-[2.5em]">
            a <span className="text-[#89FFAA] font-medium">Full Stack Developer</span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4">
            {/* Use slate-200 for text */}
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              I build full-stack web applications and mobile apps, taking ideas from whiteboard sketches to deployed reality.
            </p>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              I genuinely enjoy the puzzle of software development figuring out how to make things work efficiently and effectively.
            </p>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              My goal is always to create something genuinely useful, you know, making the world a better place...through clean code and optimal algorithms, naturally.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap mt-8">
            {/* Use arbitrary accent and background colors */}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#89FFAA] rounded bg-transparent text-[#89FFAA] font-medium transition-all duration-300 ease-in-out hover:bg-[#89FFAA] hover:text-[#0C1821] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:ring-offset-2 focus:ring-offset-[#0C1821]"
            >
              Resume
            </a>
            <a
              href="https://github.com/banelemjaji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#89FFAA] rounded bg-transparent text-[#89FFAA] transition-all duration-300 ease-in-out hover:bg-[#89FFAA] hover:text-[#0C1821] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:ring-offset-2 focus:ring-offset-[#0C1821]"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/banelemjaji/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#89FFAA] rounded bg-transparent text-[#89FFAA] transition-all duration-300 ease-in-out hover:bg-[#89FFAA] hover:text-[#0C1821] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#89FFAA] focus:ring-offset-2 focus:ring-offset-[#0C1821]"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src={profilePic}
            alt="Banele Mjaji - Profile Picture"
            className="w-full h-full rounded-full object-cover border-4 md:border-[5px] border-[#89FFAA] shadow-lg shadow-[#89FFAA]/20" // Removed transition and hover classes
          />
          {/* --- ADJUSTED STATUS INDICATOR SIZE --- */}
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 bg-[#0C1821]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 shadow-md"> {/* Increased py */}
            {/* Green pulsing dot - Increased size */}
            <span className="w-3 h-3 bg-[#05ff3f] rounded-full animate-pulse"></span>
            {/* Text - Increased size */}
            <span className="text-sm text-slate-200 font-medium">Available for work</span>
          </div>
        </div>
        {/* --- END OF IMAGE AND STATUS INDICATOR SECTION --- */}

      </div>
    </section>
  );
}

export default Hero;
