import React from 'react';
import Hero from '../components/Hero'; // Import Hero component

function HomePage() {
    return (
        // Removed container/padding here as sections will likely manage their own
        <div>
            <Hero />

            {/* Placeholder divs for other sections */}
            <div id="projects" className="min-h-screen container mx-auto p-4 bg-opacity-10 bg-green-300 rounded mt-4 ">
                <h2 className="text-3xl font-bold text-white text-center pt-16">Projects Section Area...</h2>
            </div>
            <div id="skills" className="min-h-screen container mx-auto p-4 bg-opacity-10 bg-yellow-300 rounded mt-4 ">
                 <h2 className="text-3xl font-bold text-white text-center pt-16">Skills Section Area...</h2>
            </div>
            <div id="contact" className="min-h-screen container mx-auto p-4 bg-opacity-10 bg-red-300 rounded mt-4 ">
                 <h2 className="text-3xl font-bold text-white text-center pt-16">Contact Section Area...</h2>
            </div>
        </div>
    );
}

export default HomePage;