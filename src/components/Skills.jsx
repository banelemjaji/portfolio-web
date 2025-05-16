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
  const theme = 'light';

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-[#0C1821]">
      <div className="container mx-auto max-w-4xl">

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-100 mb-6">
        <span className="text-[#89FFAA]">Skills</span>
        </h2>

        <p className="text-center text-slate-300 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-relaxed">
          I find the lack of clean code disturbing. These are languages, frameworks, and tools I have used or am currently learning. I’m always exploring.
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-6 gap-y-12 justify-center" aria-label="Skills Grid">
          {skillsToShow.map((skillName) => {
            const iconData = skillIcons[skillName];

            if (!iconData) {
              console.warn(`Icon data for "${skillName}" not found in skillIcons object.`);
              return (
                 <div key={skillName} className="relative flex flex-col items-center group text-xs text-red-500">
                    Icon missing: {skillName}
                 </div>
              );
            }

            let svgToRender = iconData[theme] || iconData.light;

            if (!svgToRender) {
                 console.warn(`Suitable SVG for "${skillName}" (theme: ${theme}) not found.`);
                 return (
                    <div key={skillName} className="relative flex flex-col items-center group text-xs text-red-500">
                       SVG missing: {skillName}
                    </div>
                 );
            }

            const sizedSvg = addPropsToSvg(svgToRender, {
                className: "w-10 h-10 sm:w-12 sm:h-12 text-[#89FFAA]"
            });

            return (
              <div key={skillName} className="relative flex flex-col items-center group">
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
                  {sizedSvg}
                </div>

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
              </div> 
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
