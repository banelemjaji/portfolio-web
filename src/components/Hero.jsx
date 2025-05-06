import profilePic from '../assets/images/profile.png';
import resumePdf from '../assets/pdf/Banele_Mjaji_CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Hero() {

  return (
    // Use arbitrary background color
    <section id="home" className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-[#0C1821] pb-0 px-4 md:px-10 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-around gap-10 max-w-6xl">

        {/* Content */}
        <div className="text-center md:text-left flex-1 max-w-2xl">
          {/* Use slate-200 and arbitrary accent color */}
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-200 mb-2">
            Hi, I'm Banele Mjaji
          </h1>
          <h2 className="text-xl md:text-2xl font-normal mb-4">
            <span className="text-[#89FFAA] font-medium">Full Stack Developer</span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4">
            {/* Use slate-200 for text */}
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              I build full-stack web applications and mobile apps, taking ideas from whiteboard sketches to deployed reality.
            </p>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              I genuinely enjoy the puzzle of software development figuring out how to make things work efficiently and effectively.
            </p>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              My goal is always to create something genuinely useful, you know, making the world a better place...through clean code and optimal algorithms, naturally.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-3 flex-wrap mt-8">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-1.5 border border-[#89FFAA] rounded text-[#89FFAA] text-sm font-medium hover:bg-[#89FFAA]/10 focus:outline-none focus:ring-1 focus:ring-[#89FFAA]"
            >
              Resume
            </a>
            <a
              href="https://github.com/banelemjaji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center px-3 py-1.5 border border-[#89FFAA] rounded text-[#89FFAA] hover:bg-[#89FFAA]/10 focus:outline-none focus:ring-1 focus:ring-[#89FFAA]"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/banelemjaji/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center px-3 py-1.5 border border-[#89FFAA] rounded text-[#89FFAA] hover:bg-[#89FFAA]/10 focus:outline-none focus:ring-1 focus:ring-[#89FFAA]"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
          <img
            src={profilePic}
            alt="Banele Mjaji - Profile Picture"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 bg-[#172A3A]/90 px-2 py-1 rounded-full">
            <span className="w-2.5 h-2.5 bg-[#05ff3f] rounded-full animate-pulse"></span>
            <span className="text-xs text-slate-200 font-medium">Available for work</span>
          </div>
        </div>
        {/* --- END OF IMAGE AND STATUS INDICATOR SECTION --- */}

      </div>
    </section>
  );
}

export default Hero;
