
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';

const VALUE_PROPS = [
  {
    id: 'intro',
    type: 'intro',
    mainHeading: 'What About Q-Clad?',
    contentHeading: 'We help our clients to shine online',
    description: 'We collaborate as a collective of individuals bringing their whole self to a project and, together, create work that none of us would be able to do on our own.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'morph-laptop',
    type: 'morph',
    stage: 'laptop',
    title: 'Intuitive UX Solutions',
    description: 'We craft experiences that speak to humans, not just screens. Every click is a conversation.',
    tag: 'STRATEGY',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'morph-tablet',
    type: 'morph',
    stage: 'tablet',
    title: 'Holistic UI Designs',
    description: 'A seamless transition between devices ensures your brand remains consistent and powerful.',
    tag: 'DESIGN',
    image: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'morph-phone',
    type: 'morph',
    stage: 'phone',
    title: 'Creative App Designs',
    description: 'Mobile-first thinking that captures attention in the palm of your hand.',
    tag: 'DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop'
  }
];

const HorizontalValueProps: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const springX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const x = useTransform(springX, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={targetRef} className="relative h-[600vh] bg-[#f8f8f8]">
      {/* Background Interactive Elements */}
      <BackgroundGrid scrollYProgress={scrollYProgress} />

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {VALUE_PROPS.map((prop, idx) => (
            <div 
              key={prop.id} 
              className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center p-8 md:p-24 overflow-hidden"
            >
              {prop.type === 'intro' ? (
                <IntroSlide prop={prop} />
              ) : (
                <MorphSlide 
                  prop={prop} 
                  index={idx} 
                  parentScrollY={scrollYProgress}
                  total={VALUE_PROPS.length} 
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-12 left-12 flex items-center gap-4 z-50">
        <div className="w-32 h-[1px] bg-gray-200">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-black origin-left"
          />
        </div>
        <span className="text-[10px] font-bold tracking-widest text-black uppercase">Scroll Progress</span>
      </div>
    </div>
  );
};

const BackgroundGrid: React.FC<{ scrollYProgress: any }> = ({ scrollYProgress }) => {
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ perspective: '1000px' }}>
      <motion.div 
        style={{ 
          y: gridY,
          rotateX,
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
        className="absolute inset-[-50%] opacity-20"
      />
      {/* Dynamic light blur */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px]"
      />
    </div>
  );
};

const IntroSlide: React.FC<{ prop: any }> = ({ prop }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] w-full items-center relative z-10">
    <div className="flex flex-col justify-center">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-6xl md:text-[100px] font-heading leading-[0.9] tracking-tighter"
      >
        What About<br />Q-Clad?
      </motion.h2>
    </div>
    <div className="space-y-12">
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[16/9] bg-white rounded-[100px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white"
      >
        <img src={prop.image} className="w-full h-full object-cover" alt="3D" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-white/20" />
      </motion.div>
      <div className="max-w-xl space-y-6">
        <h3 className="text-4xl md:text-7xl font-heading leading-tight">{prop.contentHeading}</h3>
        <p className="text-lg text-gray-500 leading-relaxed font-medium">{prop.description}</p>
      </div>
    </div>
    <div className="absolute bottom-[-5%] right-0 text-[220px] font-heading text-black/[0.03] select-none pointer-events-none">01</div>
  </div>
);

const MorphSlide: React.FC<{ prop: any; index: number; total: number; parentScrollY: any }> = ({ prop, index, parentScrollY }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-20%" });

  // Local scroll transforms based on the parent's progress
  // Since we have 4 slides, each occupies roughly 0.25 of the total progress
  const start = index * 0.25;
  const end = (index + 1) * 0.25;
  
  const slideScale = useTransform(parentScrollY, [start, (start + end) / 2, end], [0.9, 1.05, 0.9]);
  const slideRotate = useTransform(parentScrollY, [start, end], [-2, 2]);
  const slideY = useTransform(parentScrollY, [start, end], [20, -20]);

  const getDeviceStyles = () => {
    switch(prop.stage) {
      case 'laptop': return { width: 'min(90%, 1100px)', aspect: '16/10', radius: '2.5rem', border: '14px' };
      case 'tablet': return { width: 'min(70%, 650px)', aspect: '3/4', radius: '3.5rem', border: '18px' };
      case 'phone': return { width: 'min(50%, 340px)', aspect: '9/19', radius: '4.5rem', border: '16px' };
      default: return { width: '100%', aspect: '16/9', radius: '1rem', border: '8px' };
    }
  };

  const styles = getDeviceStyles();

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center w-full max-w-7xl relative z-10">
      
      {/* Team Cursors Mockup */}
      <AnimatePresence>
        {isInView && (
          <>
            <TeamCursor name="Bogdan" color="#ff4d4d" delay={0.2} x={-300} y={-200} />
            <TeamCursor name="Sophie" color="#4dff4d" delay={0.5} x={400} y={100} />
            <TeamCursor name="Linur" color="#4da6ff" delay={0.8} x={-200} y={300} />
          </>
        )}
      </AnimatePresence>

      <div className="w-full flex flex-col items-center">
        {/* Device Frame */}
        <motion.div 
          layoutId="device-frame"
          style={{ 
            width: styles.width, 
            aspectRatio: styles.aspect, 
            borderRadius: styles.radius,
            border: `${styles.border} solid #121212`,
            scale: slideScale,
            rotateZ: slideRotate,
            y: slideY
          }}
          className="relative bg-[#0a0a0a] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.4)] overflow-hidden transition-[border] duration-1000"
        >
          {/* Internal Content */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="w-full h-full relative"
          >
            <img src={prop.image} className="w-full h-full object-cover opacity-90" alt={prop.title} />
            
            {/* Morphing overlays/shapes */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 blur-3xl rounded-full"
            />

            {/* Stage-specific animations */}
            {prop.stage === 'tablet' && <FlyingAsset />}
            
            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30 pointer-events-none" />
          </motion.div>

          {/* Device Detail: Speaker/Camera */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/5 rounded-full" />
        </motion.div>

        {/* Caption */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
            <span className="text-[9px] font-black tracking-[0.4em] text-black uppercase">
              Section 0{index} // {prop.tag}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-tighter leading-none">
            {prop.title}
          </h2>
          <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-lg mx-auto">
            {prop.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const TeamCursor: React.FC<{ name: string; color: string; delay: number; x: number; y: number }> = ({ name, color, delay, x, y }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
    animate={{ opacity: 1, scale: 1, x, y }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ delay, duration: 1.5, type: "spring", stiffness: 50 }}
    className="absolute pointer-events-none z-50 flex flex-col items-start gap-1"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L3.50117 14.1511V4.28821L13.1325 10.5905H5.65376V12.3673Z" fill={color} stroke="white" strokeWidth="1.5"/>
    </svg>
    <div 
      style={{ backgroundColor: color }}
      className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white shadow-lg"
    >
      {name}
    </div>
  </motion.div>
);

const FlyingAsset: React.FC = () => (
  <motion.div 
    animate={{ 
      x: [0, 150, 50, 200, 0],
      y: [0, -80, 40, -120, 0],
      scale: [1, 1.2, 0.8, 1.1, 1],
      rotate: [0, 90, -90, 180, 0]
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
  >
    <div className="w-6 h-6 border-2 border-white rounded-full animate-ping opacity-50" />
    <div className="absolute w-2 h-2 bg-white rounded-full" />
  </motion.div>
);

export default HorizontalValueProps;
