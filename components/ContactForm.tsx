
import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-7xl font-heading mb-4">Let's build something <span className="font-serif italic text-gray-400">extraordinary</span> together.</h2>
        <p className="text-gray-500">Drop us a line and our design leads will get back to you within 24 hours.</p>
      </div>

      <form className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <InputGroup label="Full Name" placeholder="John Doe" />
          <InputGroup label="Email Address" placeholder="john@example.com" type="email" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <InputGroup label="Company" placeholder="Acme Inc." />
          <InputGroup label="Budget Range" placeholder="Select your budget" />
        </div>

        <div className="w-full">
          <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2 block">Tell us about your project</label>
          <textarea 
            rows={4}
            className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors resize-none text-xl"
            placeholder="What are you looking to achieve?"
          />
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white py-6 rounded-2xl text-lg font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all"
        >
          Send Inquiry
        </motion.button>
      </form>
    </div>
  );
};

const InputGroup: React.FC<{ label: string; placeholder: string; type?: string }> = ({ label, placeholder, type = "text" }) => (
  <div className="relative">
    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2 block">{label}</label>
    <input 
      type={type}
      className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors text-xl"
      placeholder={placeholder}
    />
  </div>
);

export default ContactForm;
