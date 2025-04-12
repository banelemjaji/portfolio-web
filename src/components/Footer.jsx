// src/components/Footer.jsx
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Use arbitrary background color and text-slate-400 for secondary text
    <footer className="bg-[#0C1821] text-slate-400 text-center p-6 mt-16 border-t border-white/10">
      <p className="text-sm">
        &copy; {currentYear} | Made with ❤️ by{' '}
        <a
          href="https://github.com/banelemjaji"
          target="_blank"
          rel="noopener noreferrer"
           // Use slate-200 for main link text, arbitrary accent for hover/underline
          className="font-medium text-slate-200 hover:text-[#89FFAA] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-[#89FFAA] after:transition-all after:duration-300 hover:after:w-full"
        >
          Banele Mjaji
        </a>
      </p>
    </footer>
  );
}

export default Footer;

