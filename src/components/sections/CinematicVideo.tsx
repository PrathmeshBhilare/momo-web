import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CinematicVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image (Video Placeholder) */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply"></div>
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" 
          alt="Grilling" 
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent tracking-tighter uppercase leading-none mb-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
            FRESH.<br/>SMOKY.<br/>IRRESISTIBLE.
          </h2>
        </motion.div>

        {/* Animated Fire Glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none -z-10"
        />
      </div>
    </section>
  );
};
