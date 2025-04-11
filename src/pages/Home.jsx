import React from 'react';

function HomePage() {
  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-10rem)]"> {/* Example min height */}
      <h1 className="text-3xl font-bold text-white my-4">Home Page Content</h1>
      <p>This is where the Hero, Projects, Skills, and Contact sections will eventually live.</p>
      {/* Add IDs later for scrolling */}
      <div id="home" className="h-[50vh] bg-opacity-10 bg-blue-300 rounded mt-4 p-4">Hero Section Area...</div>
      <div id="projects" className="h-[50vh] bg-opacity-10 bg-green-300 rounded mt-4 p-4">Projects Section Area...</div>
      <div id="skills" className="h-[50vh] bg-opacity-10 bg-yellow-300 rounded mt-4 p-4">Skills Section Area...</div>
      <div id="contact" className="h-[50vh] bg-opacity-10 bg-red-300 rounded mt-4 p-4">Contact Section Area...</div>
    </div>
  );
}

export default HomePage;