import React from 'react';
import ProjectCard from './ProjectCard'; 
// --- Project Data ---
// IMPORTANT: Replace placeholder imageUrls with actual paths to your images
// e.g., import barberShopImg from '../assets/images/barbershop_app.jpg';
// and use barberShopImg in the object below.
const projectsData = [
  {
    title: "BarberShop App",
    description: "A booking app for appointment bookings and management.",
    technologies: ["Java", "Firebase", "Android"],
    githubLink: "https://github.com/banelemjaji/barbershop_project",
    liveLink: "https://barbershop-demo.example.com", // Replace with actual live link or null
    imageUrl: null // Replace with actual image import or URL
  },
  {
    title: "File Organizer",
    description: "Automatically organize files based on their content.",
    technologies: ["Python", "Automation"],
    githubLink: "https://github.com/banelemjaji/file-organizer",
    liveLink: null, // No live link
    imageUrl: null // Replace with actual image import or URL
  },
  {
    title: "Bus App | In-Progress",
    description: "A bus tracking app built using Flutter with real-time updates.",
    technologies: ["Flutter", "Dart", "Firebase"], // Added Firebase assumption
    githubLink: "https://github.com/banelemjaji/bus_app",
    liveLink: null, // No live link
    imageUrl: null // Replace with actual image import or URL
  },
  // Add more projects here if you have them
];
// --- End Project Data ---

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
