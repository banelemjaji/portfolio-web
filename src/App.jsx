import React from 'react';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[#0C1821] min-h-screen text-slate-200 font-['Poppins',_sans-serif] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;