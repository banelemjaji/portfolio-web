import React from 'react';
import { skillIcons, addPropsToSvg } from './SkillIcons';

const skillsToShow = [
    // Frontend
    'HTML5',
    'CSS3',
    'TailwindCSS',
    'JavaScript',
    'ReactJS',
    // Backend
    'NodeJS',
    'ExpressJS',
    'Python',
    'Java',
    'CSharp',
    'SQLite',
    'MongoDB',
    'Firebase',
    // Tools/Other
    'Git',
    'Figma',
    'Flutter',
];

function Skills() {
  // Using 'light' theme variant from your skillIcons object
  const theme = 'light';

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-[#0C1821]">
      <div className="container mx-auto max-w-4xl">

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-100 mb-6">
        <span className="text-[#89FFAA]">Skills</span>
        </h2>

        {/* Using the Star Wars description you provided */}
        <p className="text-center text-slate-300 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-relaxed">
          I find the lack of clean code disturbing. These are languages, frameworks, and tools I have used or am currently learning. I’m always exploring.
        </p>

        {/* Icon Grid - Adjusted grid columns and gap */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-6 gap-y-12 justify-center" aria-label="Skills Grid">
          {skillsToShow.map((skillName) => {
            // Attempt to find the icon data using the skillName as the key
            const iconData = skillIcons[skillName]; // Case-sensitive match

            // Graceful handling if icon data is not found
            if (!iconData) {
              console.warn(`Icon data for "${skillName}" not found in skillIcons object.`);
              // Optionally render a placeholder or nothing
              return (
                 <div key={skillName} className="relative flex flex-col items-center group text-xs text-red-500">
                    Icon missing: {skillName}
                 </div>
              );
            }

            // Select the SVG based on theme (using 'light' as default)
            let svgToRender = iconData[theme] || iconData.light; // Assuming 'light' exists

            if (!svgToRender) {
                 console.warn(`Suitable SVG for "${skillName}" (theme: ${theme}) not found.`);
                 // Optionally render a placeholder or nothing
                 return (
                    <div key={skillName} className="relative flex flex-col items-center group text-xs text-red-500">
                       SVG missing: {skillName}
                    </div>
                 );
            }

            // Apply size class using the helper function
            const sizedSvg = addPropsToSvg(svgToRender, {
                className: "w-10 h-10 sm:w-12 sm:h-12 text-[#89FFAA]" // Icon size and color (applied via fill/stroke in SVG usually)
            });

            return (
              // Outer wrapper for positioning and group hover state
              <div key={skillName} className="relative flex flex-col items-center group">
                {/* Icon Box (Using a slightly lighter dark bg) */}
                <div
                  className="
                    bg-[#172A3A] rounded-lg p-3 sm:p-4 border border-white/10 shadow-md
                    flex items-center justify-center aspect-square
                    transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#89FFAA]/10 group-hover:border-[#89FFAA]/50
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#89FFAA]
                  "
                  tabIndex={0}
                  aria-label={skillName}
                >
                  {/* Icon */}
                  {sizedSvg}
                </div>

                {/* Skill Name - Appears on hover */}
                <span
                  className="
                    absolute -bottom-7 left-1/2 -translate-x-1/2 /* Adjusted bottom position */
                    text-xs text-slate-300 mt-2 text-center whitespace-nowrap
                    opacity-0 group-hover:opacity-100 /* Fade in/out on parent group hover */
                    transition-opacity duration-300 ease-in-out pointer-events-none /* Prevent text blocking hover */
                  "
                >
                  {skillName}
                </span>
              </div> // End Outer Wrapper
            );
          })}
        </div> {/* End Grid */}

      </div> {/* End Container */}
    </section> /* End Section */
  );
}

export default Skills;
