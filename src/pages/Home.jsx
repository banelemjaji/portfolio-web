// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SkillsSection from '../components/Skills';
import Contact from '../components/Contact';

function HomePage() {
    return (
        <div>
            <Hero />
            <Projects /> 
            <SkillsSection />
            <Contact />
        </div>
    );
}

export default HomePage;
