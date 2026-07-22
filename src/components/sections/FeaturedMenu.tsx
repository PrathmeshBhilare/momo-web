import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../../data/dummyData';

export const FeaturedMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Steamed Momos");

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-bg-main relative" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4"
          >
            Featured Menu
          </motion.h2>
          <p className="text-text-muted text-lg">Handcrafted with love and perfect spices.</p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-12 hide-scrollbar gap-4 justify-start md:justify-center px-4">
          {menuCategories.slice(0, 6).map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white text-text-main hover:bg-orange-50 border border-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-gray-100 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-xs font-bold">{item.veg ? 'VEG' : 'NON-VEG'}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-heading font-bold text-text-main group-hover:text-primary transition-colors pr-4">{item.name}</h3>
                      <span className="font-price text-2xl text-primary font-bold">₹{item.price}</span>
                    </div>
                    
                    <p className="text-text-muted text-sm mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < item.spice ? 'text-red-500' : 'text-gray-200'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      ))}
                      <span className="text-xs text-text-muted ml-2">Spice Level</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-text-muted">
                More items arriving soon!
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
