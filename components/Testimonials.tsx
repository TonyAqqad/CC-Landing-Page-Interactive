
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO, Lumina Tech',
    quote: "Q-Clad didn't just design our website; they redefined our entire digital presence. The attention to detail is unmatched.",
    image: 'https://picsum.photos/seed/test1/800/800'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Product Lead, Finly',
    quote: "Working with this team was a masterclass in collaboration. They intuition for UX is something you rarely see.",
    image: 'https://picsum.photos/seed/test2/800/800'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-24 text-center">
        <span className="text-xs font-bold tracking-[0.4em] text-gray-500 uppercase">Proof of Excellence</span>
        <h2 className="text-4xl md:text-6xl font-heading mt-4">Voices of our partners</h2>
      </div>

      <div className="space-y-48">
        {TESTIMONIALS.map((t, idx) => (
          <ScrollItem key={t.id} t={t} index={idx} />
        ))}
      </div>
    </div>
  );
};

const ScrollItem: React.FC<{ t: any; index: number }> = ({ t, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
    >
      <div className="w-full md:w-1/2">
        <div className="aspect-square rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <p className="text-3xl md:text-5xl font-serif italic leading-tight text-gray-200">
          "{t.quote}"
        </p>
        <div>
          <h4 className="text-xl font-bold">{t.name}</h4>
          <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
