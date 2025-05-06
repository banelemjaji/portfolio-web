import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const placeholderImage = (title) => `https://placehold.co/600x400/0C1821/89FFAA?text=${encodeURIComponent(title)}`;
const grainDataUri = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";


function ProjectCard({ title, description, technologies, githubLink, liveLink, imageUrl }) {
  // Use provided imageUrl or fallback to placeholder
  const displayImageUrl = imageUrl || placeholderImage(title);

  return (
    <div className="bg-[#172A3A] rounded-lg overflow-hidden border border-white/10 flex flex-col">
      {/* Project Image with fixed aspect ratio for minimal, uniform look */}
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <img
          src={displayImageUrl}
          alt={`${title} screenshot`}
        className="w-full h-48 object-cover relative z-10" // Added relative z-10 to ensure image is above grain if needed
          onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage(title); }}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow relative z-10"> {/* Added relative z-10 to ensure content is above grain */}
        {/* Project Title */}
        <h3 className="text-lg font-semibold text-slate-100 mb-2">{title}</h3>

        <p className="text-sm text-slate-300 mb-4 flex-grow">
          {description}
        </p>

        {/* Technologies Used */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#172A3A] border border-[#89FFAA]/30 text-[#89FFAA] text-xs px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub Link`}
              className="inline-flex items-center gap-2 px-3 py-1 border border-[#89FFAA] rounded text-[#89FFAA] text-xs font-medium hover:bg-[#89FFAA]/10 focus:outline-none focus:ring-1 focus:ring-[#89FFAA] w-fit"
            >
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              View Source
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} Live Link`}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#89FFAA] rounded text-[#0C1821] text-xs font-medium hover:bg-[#6fdc8c] focus:outline-none focus:ring-1 focus:ring-[#89FFAA] w-fit"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="h-4 w-4" />
              Live Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
