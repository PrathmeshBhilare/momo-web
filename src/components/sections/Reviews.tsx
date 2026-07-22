import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '../../data/dummyData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-bg-alt relative overflow-hidden" id="reviews">
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 text-primary/10">
        <Quote size={120} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4"
          >
            What They Say
          </motion.h2>
        </div>

        <div className="relative bg-white/60 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[3rem] shadow-xl">
          <div className="overflow-hidden relative min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center absolute inset-0"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-text-main font-medium italic mb-8 max-w-2xl">
                  "{reviews[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={reviews[currentIndex].avatar} 
                    alt={reviews[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-text-main">{reviews[currentIndex].name}</h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button 
              onClick={prevReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text-main hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button 
              onClick={nextReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text-main hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? 'bg-primary w-8' : 'bg-primary/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
