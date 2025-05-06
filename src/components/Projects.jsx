import React from 'react';
import ProjectCard from './ProjectCard'; 

const projectsData = [
  {
    title: "Car Rental App",
    description: "A modern car rental platform that allows users to browse available vehicles, make reservations, and manage their bookings online. The application is designed for a seamless and intuitive experience, streamlining the entire car rental process for both customers and administrators.",
    technologies: ["React","TailwindCSS", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/banelemjaji/car-rental",
    liveLink: "https://car-rental-frontend-g4rb.onrender.com", 
    imageUrl: "src/assets/images/car-rental.png" 
  },
  {
    title: "File Organizer",
    description: "A modern, user-friendly desktop application for automatically organizing files into categorized folders.",
    technologies: ["Python", "Tkinter"],
    githubLink: "https://github.com/banelemjaji/file-organizer",
    liveLink: null,
    imageUrl: "src/assets/images/file-organizer.png"
  },
  
];

function Projects() {
  return (
    // Section container with ID for scrolling, padding, and background
    <section id="projects" className="py-20 px-4 md:px-10 bg-[#0C1821]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-100 mb-6"> {/* Reduced bottom margin */}
            <span className="text-[#89FFAA]">Projects</span>
        </h2>

        {/* --- UPDATED DESCRIPTION PARAGRAPH & FONT SIZE --- */}
        <p className="text-center text-slate-300 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-relaxed"> {/* Changed text size */}
          Beyond the theory, this is where the code meets the road. Here are some projects where I've rolled up my sleeves, tackled challenges, and brought ideas to life. Take a look around!
        </p>
        {/* --- END DESCRIPTION PARAGRAPH --- */}

        {/* Accessible Two-column Grid for Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" aria-label="Project Cards Grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
