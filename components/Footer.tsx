
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-heading mb-8">Q-CLAD</h2>
          <p className="text-gray-500 max-w-sm text-lg font-serif italic">
            Building the next generation of digital products with a focus on balance, aesthetics, and human-centric design.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Process</a></li>
            <li><a href="#" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#" className="hover:text-gray-400">Join the Team</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Social</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400">Behance</a></li>
            <li><a href="#" className="hover:text-gray-400">Dribbble</a></li>
            <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-600 font-medium tracking-widest">© 2025 Q-CLAD DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-12 text-xs text-gray-600 font-medium tracking-widest uppercase">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
