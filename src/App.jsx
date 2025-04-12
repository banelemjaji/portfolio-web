// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar.jsx'; // Import Navbar component
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home.jsx';         // Import page components
import BlogListPage from './pages/BlogListPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    // Apply background and default text color directly
    <div className="bg-[#0C1821] min-h-screen text-slate-200 font-['Poppins',_sans-serif] flex flex-col">
      <Navbar />
      {/* Adjust pt based on final navbar height if needed */}
      {/* Increased padding top to account for spaced navbar */}
      <main className="flex-grow pt-24 md:pt-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;