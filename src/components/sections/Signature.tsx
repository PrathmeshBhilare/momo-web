import React from 'react';
import { motion } from 'framer-motion';

const specialities = [
  {
    title: "Steamed Momos",
    desc: "Soft, delicate, and packed with authentic flavours.",
    img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=600",
    color: "from-primary/20 to-transparent"
  },
  {
    title: "Fried Momos",
    desc: "Crispy on the outside, juicy on the inside.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    color: "from-secondary/20 to-transparent"
  },
  {
    title: "Soya Chaap",
    desc: "Smoky, tender, and marinated in rich spices.",
    img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=600",
    color: "from-accent/20 to-transparent"
  },
  {
    title: "Special Combos",
    desc: "The best of everything on one plate.",
    img: "https://images.unsplash.com/photo-1525648873491-c12e2c536484?auto=format&fit=crop&q=80&w=600",
    color: "from-primary/20 to-transparent"
  }
];

export const Signature: React.FC = () => {
  return (
    <section className="py-24 bg-bg-main relative overflow-hidden" id="signature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4">Signature Specialities</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Experience our most loved dishes, crafted with passion and authentic recipes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <motion.img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative z-20 bg-white">
                <h3 className="text-2xl font-heading font-bold text-text-main mb-2">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Explore <span className="ml-2">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
