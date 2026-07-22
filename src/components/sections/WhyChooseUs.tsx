import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, Clock, Heart } from 'lucide-react';

const features = [
  {
    title: "Fresh Ingredients",
    desc: "We use only the freshest, locally sourced ingredients every day.",
    icon: <Leaf className="w-8 h-8 text-primary" />,
    color: "bg-orange-50"
  },
  {
    title: "Authentic Taste",
    desc: "Traditional recipes that bring the true street food flavour.",
    icon: <Flame className="w-8 h-8 text-secondary" />,
    color: "bg-red-50"
  },
  {
    title: "Fast Service",
    desc: "Hot and delicious food served piping hot, right on time.",
    icon: <Clock className="w-8 h-8 text-primary" />,
    color: "bg-orange-50"
  },
  {
    title: "Loved by Customers",
    desc: "Thousands of happy customers who keep coming back for more.",
    icon: <Heart className="w-8 h-8 text-accent" />,
    color: "bg-red-50"
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-bg-alt relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-main mb-3">{feature.title}</h3>
              <p className="text-text-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
