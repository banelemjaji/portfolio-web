// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { href: '#home', text: 'Home', type: 'scroll' },
        { href: '#projects', text: 'Projects', type: 'scroll' },
        { href: '#skills', text: 'Skills', type: 'scroll' },
        { href: '#contact', text: 'Contact', type: 'scroll' },
        { href: '/blog', text: 'Blog', type: 'route' },
    ];

     const renderNavLink = (link, isMobile = false) => {
        // Define base classes and apply colors directly
        const baseClasses = "relative transition-colors duration-300";
        // Use arbitrary values for text colors and accent hover/underline
        const desktopClasses = `${baseClasses} text-slate-200 hover:text-[#89FFAA] focus:text-[#89FFAA]`;
        const mobileClasses = `${baseClasses} block text-center py-3 px-4 text-slate-200 hover:bg-white/10 hover:text-[#89FFAA] focus:text-[#89FFAA] focus:outline-none`;

        const classes = isMobile ? mobileClasses : desktopClasses;

        const handleClick = () => {
            if (isMobileMenuOpen) {
                 toggleMobileMenu();
            }
            // Add smooth scroll logic later if needed for '#' links
        }

        if (link.type === 'route') {
            return (
                <Link key={link.text} to={link.href} className={classes} onClick={handleClick}>
                    {link.text}
                </Link>
            );
        } else {
            // For scroll links, intercept click for cross-route anchor navigation
            return (
                <a
                    key={link.text}
                    href={link.href}
                    className={classes}
                    onClick={e => {
                        e.preventDefault();
                        if (isMobileMenuOpen) {
                            toggleMobileMenu();
                        }
                        const anchor = link.href.replace('#', '');
                        if (location.pathname !== '/') {
                            // Navigate to home, then scroll after navigation
                            navigate('/', { replace: false });
                            // Wait for navigation, then scroll
                            setTimeout(() => {
                                const el = document.getElementById(anchor);
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                } else {
                                    window.location.hash = link.href;
                                }
                            }, 100);
                        } else {
                            // Already on home, just scroll
                            const el = document.getElementById(anchor);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            } else {
                                window.location.hash = link.href;
                            }
                        }
                    }}
                >
                    {link.text}
                </a>
            );
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-8 bg-[#0C1821] pointer-events-auto">
            <div className="container mx-auto text-slate-200 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-semibold text-slate-200">
                    <a href="#home" aria-label="Home">Banele.</a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-grow justify-center space-x-8" aria-label="Main Navigation">
                   {navLinks.map(link => renderNavLink(link, false))}
                </nav>

                {/* Mobile Menu Button & Spacer */}
                <div className="flex items-center space-x-2">
                     <div className="md:hidden flex justify-end">
                        <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-slate-200 focus:outline-none p-1">
                            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                    <div className="hidden md:block w-6 h-6"></div>
                 </div>
            </div>

             {/* Mobile Navigation Menu */}
            <nav
                 className={`md:hidden container mx-auto mt-2 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-[#0C1821]/80 shadow-md overflow-hidden transition-max-height duration-300 ease-in-out ${ // Adjusted background tint
                    isMobileMenuOpen ? 'max-h-screen border border-white/10' : 'max-h-0 border-none'
                 }`}
                 style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
            >
                 <ul className="flex flex-col items-center py-2">
                    {navLinks.map((link) => ( <li key={link.text} className="w-full">{renderNavLink(link, true)}</li> ))}
                 </ul>
             </nav>
        </header>
    );
}

export default Navbar;

