
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <div className="relative h-[110vh] w-full flex flex-col justify-center items-center overflow-hidden bg-white">
      <motion.div 
        style={{ y, opacity, scale }}
        className="max-w-7xl px-8 w-full z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] text-gray-400 uppercase">Est. 2025 // Global Studio</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[120px] font-heading leading-[0.85] tracking-tighter max-w-6xl"
        >
          Design that <span className="font-serif italic text-gray-300">breathes</span> life into your vision.
        </motion.h1>
        
        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 90}/120/120`} 
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-lg" 
                  alt="Partner" 
                />
              ))}
            </div>
            <div>
              <div className="flex text-black text-xs font-bold gap-1 mb-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Award Winning Digital Agency</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-sm"
          >
            <p className="text-sm font-semibold leading-relaxed text-gray-400 uppercase tracking-widest">
              Branding / UX-UI / Development / Motion / 3D Production / Strategy
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative large circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gray-100 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-80, 80] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-black absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
