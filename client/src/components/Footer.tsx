import React from 'react';

const Footer = () => {
  return (
    // Removed monospace typography, large top margins, and cyan transition colors; restyled with thin border and blue text links
    <footer className="w-full border-t border-[#b9b9b9] pt-3 mt-6 pb-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] font-[Verdana,Arial,sans-serif] text-[#555]">
      <div>
        <span className="font-bold text-[#222]">null-room</span> &copy; 2026 - built for classrooms that ship.
      </div>
      
      <div className="flex items-center gap-4">
        <a href="#features" className="text-[#0000cc] hover:underline">Features</a>
        <span className="text-[#b9b9b9]">|</span>
        <a href="#" className="text-[#0000cc] hover:underline">Docs</a>
        <span className="text-[#b9b9b9]">|</span>
        <a href="/login" className="text-[#0000cc] hover:underline">Login</a>
        <span className="text-[#b9b9b9]">|</span>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#0000cc] hover:underline" aria-label="GitHub">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

