import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { locations } from '../../data/dummyData';

export const Locations: React.FC = () => {
  return (
    <section className="py-24 bg-bg-main relative" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4"
          >
            Find Us
          </motion.h2>
          <p className="text-text-muted text-lg">Visit us at your nearest location for a hot plate of happiness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-gray-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-text-main mb-4">{loc.name}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-text-muted">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>{loc.address}</p>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <Clock className="w-5 h-5 shrink-0" />
                  <p>{loc.hours}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all">
                  <Phone className="w-4 h-4" /> Call Now
                </button>
                <button className="flex-1 bg-bg-alt text-text-main border border-gray-200 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                  <Navigation className="w-4 h-4" /> Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
