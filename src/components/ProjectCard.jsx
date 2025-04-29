import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Placeholder image URL - replace with your actual project image paths/imports
const placeholderImage = (title) => `https://placehold.co/600x400/0C1821/89FFAA?text=${encodeURIComponent(title)}`;

// SVG Noise pattern for grain effect - embedded as data URI
const grainDataUri = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";


function ProjectCard({ title, description, technologies, githubLink, imageUrl }) {
  // Use provided imageUrl or fallback to placeholder
  const displayImageUrl = imageUrl || placeholderImage(title);

  return (
    // Card container - Added 'relative' for positioning the grain overlay
    <div className="relative bg-[#172A3A] rounded-lg overflow-hidden shadow-md border border-white/10 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:shadow-[#89FFAA]/10 flex flex-col">

      {/* --- Grain Effect Overlay --- */}
      {/* Absolutely positioned div covering the card */}
      {/* Applies the SVG noise pattern as a background */}
      {/* Adjust opacity (e.g., opacity-5, opacity-10) for desired grain intensity */}
      {/* pointer-events-none ensures it doesn't interfere with interactions */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" // Low opacity for subtlety
        style={{ backgroundImage: `url("${grainDataUri}")` }}
      ></div>
      {/* --- End Grain Effect Overlay --- */}


      {/* Project Image (content is now above the grain overlay due to DOM order) */}
      <img
        src={displayImageUrl}
        alt={`${title} screenshot`}
        className="w-full h-48 object-cover relative z-10" // Added relative z-10 to ensure image is above grain if needed
        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage(title); }}
      />

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow relative z-10"> {/* Added relative z-10 to ensure content is above grain */}
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>

        {/* Project Description */}
        <p className="text-sm text-slate-300 mb-4 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Technologies Used */}
        <div className="mb-4">
          <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">Tech Stacks:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#89FFAA]/10 text-[#89FFAA] text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub Link`}
            className="inline-flex items-center justify-center gap-2 mt-auto px-4 py-1.5 border border-[#89FFAA] rounded text-[#89FFAA] text-sm font-medium transition-all duration-300 ease-in-out hover:bg-[#89FFAA] hover:text-[#0C1821] focus:outline-none focus:ring-1 focus:ring-[#89FFAA] focus:ring-offset-1 focus:ring-offset-[#172A3A] w-fit"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            View Source
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
