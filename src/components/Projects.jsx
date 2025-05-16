import React from 'react';

const projectsData = [
  {
    title: "Car Rental App",
    description: "A user-friendly web platform for renting cars online. It allows customers to quickly find available vehicles, book them, and manage their rental details in one place.",
    technologies: ["React","TailwindCSS", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/banelemjaji/car-rental",
    liveLink: "https://car-rental-frontend-g4rb.onrender.com", 
    imageUrl: "/images/car-rental1.png" 
  },
  {
    title: "File Organizer",
    description: "A modern, user-friendly desktop application for automatically organizing files into categorized folders.",
    technologies: ["Python", "Tkinter"],
    githubLink: "https://github.com/banelemjaji/file-organizer",
    liveLink: null,
    imageUrl: "/images/file-organizer.png"
  },
  {
    title: "FitQuest Design",
    description: "FitQuest is a mobile application designed to help users track their fitness activities and achieve their goals. It allows users to record workouts, monitor their progress (steps, distance, time, calories), and set personalized goals.",
    technologies: ["Figma"],
    githubLink: null,
    liveLink: "https://www.figma.com/design/PZEQwbDvK3KAzBcilPLeOZ/FitQuest?node-id=0-1&t=crN0zJJVQ4SQAWfY-1",
    imageUrl: "/images/fitness1.png"
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-[#0C1821]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-100 mb-6">
          <span className="text-[#89FFAA]">Projects</span>
        </h2>
        <p className="text-center text-slate-300 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-relaxed">
          Beyond the theory, this is where the code meets the road. Here are some projects where I've rolled up my sleeves, tackled challenges, and brought ideas to life. Take a look around!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" aria-label="Projects Grid">
          {projectsData.map((project, index) => (
            <div key={index} className="flex flex-col items-center w-full mb-16 last:mb-0">
              <div className="w-full aspect-video bg-slate-200 dark:bg-[#0C1821] flex items-center justify-center overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg"
                  loading="lazy"
                  style={{ maxHeight: '340px' }}
                />
              </div>
              <div className="w-full max-w-2xl mx-auto mt-8 flex flex-col gap-2 md:min-h-[260px] flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2 text-left">{project.title}</h3>
                <p className="text-slate-300 mb-5 text-sm md:text-base leading-relaxed min-h-[40px] text-left flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies && project.technologies.map((tech, i) => (
                      <span key={i} className="bg-[#172A3A] text-[#89FFAA] px-3 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 bg-[#89FFAA] text-[#181e29] font-semibold rounded hover:bg-[#10b981] transition-colors text-xs md:text-sm shadow"
                      >
                        Visit Site
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 border border-[#89FFAA] text-[#89FFAA] font-semibold rounded hover:bg-[#89FFAA]/10 transition-colors text-xs md:text-sm"
                      >
                        View Source
                      </a>
                    )}
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

export default Projects;
