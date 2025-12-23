
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <span className="text-3xl font-heading font-black tracking-tighter text-black">Q-CLAY</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase text-black">
        <a href="#hero" className="hover:opacity-40 transition-opacity">Home</a>
        <a href="#values" className="hover:opacity-40 transition-opacity">About</a>
        <a href="#testimonials" className="hover:opacity-40 transition-opacity">Works</a>
        <a href="#contact" className="hover:opacity-40 transition-opacity">Contact Us</a>
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden sm:block border border-black/10 text-black rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all">
          • Let's Talk!
        </button>
        <button className="flex items-center gap-2 text-black group">
          <span className="text-xs font-bold tracking-widest uppercase">menu</span>
          <div className="space-y-1">
            <div className="w-6 h-[1px] bg-black group-hover:w-4 transition-all"></div>
            <div className="w-6 h-[1px] bg-black group-hover:w-8 transition-all"></div>
          </div>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
