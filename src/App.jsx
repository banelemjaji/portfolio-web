import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#1b1f38] min-h-screen text-[#c3c7e4] font-['Poppins', sans-serif]">
      <Navbar />
      <main className="pt-16"> {/* Add padding-top to offset fixed navbar */}
        {/* Other page content will go here */}
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white my-4">Portfolio Content Area</h1>
          <p>Your main sections (Hero, Projects, Skills, Contact) will be added here.</p>
          {/* Example to take up space */}
          <div className="h-[150vh] bg-opacity-10 bg-white rounded mt-4 p-4">Scroll down to see footer...</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;