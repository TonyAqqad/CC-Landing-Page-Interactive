
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HorizontalValueProps from './components/HorizontalValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative w-full bg-[#f8f8f8]">
      <Navbar />
      
      <main>
        {/* Section 1: Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* Section 2: Horizontal Scroll Value Propositions */}
        <section id="values" className="relative z-10">
          <HorizontalValueProps />
        </section>

        {/* Section 3: Testimonials with Zoom/Transition Effects */}
        <section id="testimonials" className="bg-black text-white py-24">
          <Testimonials />
        </section>

        {/* Section 4: Integrated Contact Form */}
        <section id="contact" className="bg-white py-24">
          <ContactForm />
        </section>
      </main>

      <Footer />

      {/* Dynamic Floating Action Button for Calls */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-[99]">
        <motion.div className="flex flex-col gap-2">
           <motion.button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
             <span className="text-blue-500">✈</span>
           </motion.button>
           <motion.button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
             <span className="text-green-500 text-xl">💬</span>
           </motion.button>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-md text-black px-6 py-3 rounded-full flex items-center gap-2 shadow-xl border border-gray-200 font-bold text-xs tracking-widest uppercase"
        >
          <span className="opacity-40">📅</span>
          Book a call
        </motion.button>
      </div>
    </div>
  );
};

export default App;
