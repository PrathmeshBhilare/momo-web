import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-bg-dark flex items-center justify-center"
    >
      {/* Parallax Background Video */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000" 
          alt="Momos Steaming" 
          className="object-cover w-full h-full scale-105 origin-center animate-[slow-zoom_20s_infinite_alternate]"
        />
        {/* Note: Replacing video with high-quality image + slow zoom animation for better prototype performance without relying on external video hosting */}
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight uppercase"
          >
            STEAMED.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight uppercase"
          >
            GRILLED.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl text-primary font-bold tracking-tight uppercase"
            style={{ textShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}
          >
            LOVED.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto"
        >
          Pune's Favourite Momos & Chaap
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#menu" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1">
            Explore Menu
          </a>
          <a href="#locations" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1">
            Visit Store
          </a>
        </motion.div>
      </div>

      {/* Floating Particles/Steam Effect */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 blur-xl"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              bottom: "-10%",
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white/70"
      >
        <span className="text-sm uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
