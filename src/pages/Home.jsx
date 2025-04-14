// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SkillsSection from '../components/Skills';

function HomePage() {
    return (
        <div>
            <Hero />
            <Projects /> 
            <SkillsSection />
            
            
            <div id="contact" className="min-h-screen container mx-auto p-4 bg-opacity-10 bg-red-300 rounded mt-4 ">
                 <h2 className="text-3xl font-bold text-white text-center pt-16">Contact Section Area...</h2>
            </div>
        </div>
    );
}

export default HomePage;
