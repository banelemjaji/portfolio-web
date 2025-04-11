import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Using objects for links now to include type (scroll vs route)
    const navLinks = [
        { href: '#home', text: 'Home', type: 'scroll' },
        { href: '#projects', text: 'Projects', type: 'scroll' },
        { href: '#skills', text: 'Skills', type: 'scroll' },
        { href: '/blog', text: 'Blog', type: 'route' },
        { href: '#contact', text: 'Contact', type: 'scroll' },
    ];

    // Helper function to render links appropriately
    const renderNavLink = (link) => {
        if (link.type === 'route') {
            return (
                <Link
                    key={link.text}
                    to={link.href}
                    className="relative text-[#e2e8f0] hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#a5b4fc] after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => isMobileMenuOpen && toggleMobileMenu()} // Close mobile menu on route change
                >
                    {link.text}
                </Link>
            );
        } else { // Default to scroll link (<a> tag)
            return (
                <a
                    key={link.text}
                    href={link.href}
                    className="relative text-[#e2e8f0] hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#a5b4fc] after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => isMobileMenuOpen && toggleMobileMenu()} // Close mobile menu on click
                >
                    {link.text}
                </a>
            );
        }
    };


    return (
        // --- MODIFIED OUTER HEADER ---
        // Keeps it fixed, but transparent. Acts as positioning context.
        <header className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none"> {/* Added pointer-events-none */}

            {/* --- MODIFIED INNER CONTAINER --- */}
            {/* This div now holds the styles, container logic, rounding, and content */}
            <div className="container mx-auto bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 bg-gray-800/30 text-[#a5b4fc] rounded-xl border border-gray-100/10 shadow-lg p-3 md:px-6 pointer-events-auto flex justify-between items-center"> {/* Added pointer-events-auto */}
                

                {/* Desktop Navigation Wrapper */}
                <nav className="hidden md:flex flex-grow justify-center space-x-8">
                   {navLinks.map(renderNavLink)} {/* Use helper function */}
                </nav>

                {/* Mobile Menu Button & Spacer */}
                <div className="flex items-center space-x-2"> {/* Group button and spacer */}
                    {/* Mobile Menu Button */}
                     <div className="md:hidden flex justify-end">
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            className="text-[#e2e8f0] focus:outline-none p-1" // Added padding for easier clicking
                        >
                            {isMobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                     {/* Desktop Spacer (optional, adjust width based on logo/button size) */}
                    <div className="hidden md:block w-6 h-6"></div> {/* Simplified spacer */}
                 </div>

            </div>

             {/* Mobile Navigation Menu - Position relative to the inner container */}
             {/* Needs adjustment to appear connected to the rounded inner div */}
            <nav
                 className={`md:hidden container mx-auto mt-2 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 bg-gray-800/60 shadow-md overflow-hidden transition-max-height duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-screen border border-gray-100/10' : 'max-h-0 border-none' // Conditional border
                 }`}
                 style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }} // Control pointer events
            >
                 <ul className="flex flex-col items-center py-2">
                    {navLinks.map((link) => (
                         <li key={link.text} className="w-full">
                             {/* Render mobile links similarly, ensuring they close the menu */}
                             {link.type === 'route' ? (
                                 <Link
                                    to={link.href}
                                    onClick={toggleMobileMenu}
                                    className="block text-center py-3 px-4 text-[#e2e8f0] hover:bg-gray-700/50 hover:text-white transition-colors duration-300"
                                >
                                    {link.text}
                                </Link>
                             ) : (
                                <a
                                    href={link.href}
                                    onClick={toggleMobileMenu}
                                    className="block text-center py-3 px-4 text-[#e2e8f0] hover:bg-gray-700/50 hover:text-white transition-colors duration-300"
                                >
                                    {link.text}
                                </a>
                             )}
                         </li>
                     ))}
                 </ul>
             </nav>
        </header>
    );
}

export default Navbar;