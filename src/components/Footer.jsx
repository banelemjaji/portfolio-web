import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C1821] text-slate-400 text-center p-4 mt-16" aria-label="Footer">
      <p className="text-xs">
        &copy; {currentYear} | Made with ❤️ by{' '}
        <a
          href="https://www.linkedin.com/in/banelemjaji/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-200 hover:text-[#89FFAA] focus:text-[#89FFAA]"
        >
          Banele Mjaji
        </a>
      </p>
    </footer>
  );
}

export default Footer;

