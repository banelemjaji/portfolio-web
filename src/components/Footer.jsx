import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="bg-[#1b1f38] text-[#8ab4f8] text-center p-6 mt-16 border-t border-[#2a2f4f]">
      <p className="text-sm text-[#a5b4fc]">
        &copy; {currentYear} | Made with ❤️ by{' '}
        <a
          href="https://github.com/banelemjaji"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-[#a5b4fc] after:transition-all after:duration-300 hover:after:w-full"
        >
          Banele Mjaji
        </a>
      </p>
    </footer>
  );
}

export default Footer;