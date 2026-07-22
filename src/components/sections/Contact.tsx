import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-bg-alt relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">Let's Talk</h2>
            <p className="text-text-muted text-lg mb-8 max-w-md">
              Have a question about our menu or want to cater an event? Drop us a message, and our team will get back to you shortly.
            </p>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg-main" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg-main" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg-main resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-shadow"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Abstract Mascot / Illustration side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            {/* Mascot representation: Girl with Orange Cat Cap */}
            <div className="relative w-[400px] h-[400px] bg-white rounded-full shadow-2xl overflow-hidden border-8 border-bg-main flex items-center justify-center">
              {/* Replacing actual generated image with a stylized layout to represent the mascot holding the board */}
              <div className="absolute inset-0 bg-orange-50"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Cat Cap Details (Stylized) */}
                <div className="flex gap-12 -mb-2">
                  <div className="w-8 h-12 bg-primary rounded-t-full transform -rotate-12"></div>
                  <div className="w-8 h-12 bg-primary rounded-t-full transform rotate-12"></div>
                </div>
                
                {/* Head/Hair */}
                <div className="w-40 h-40 bg-[#FFE0C2] rounded-full relative shadow-inner">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-primary rounded-t-full"></div>
                  {/* Face */}
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-800 rounded-full"></div>
                </div>
                
                {/* Board */}
                <div className="w-64 h-24 bg-[#8B4513] mt-4 rounded-lg relative flex items-center justify-center shadow-lg border-4 border-[#5C2E0B] transform -rotate-2">
                  <span className="text-white font-heading text-2xl font-bold tracking-wider">Panu's Momos</span>
                  {/* Hands holding board */}
                  <div className="absolute -top-3 left-4 w-6 h-8 bg-[#FFE0C2] rounded-full border border-[#E5C6A8]"></div>
                  <div className="absolute -top-3 right-4 w-6 h-8 bg-[#FFE0C2] rounded-full border border-[#E5C6A8]"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 left-10 text-4xl">🥟</motion.div>
            <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="absolute bottom-20 right-10 text-4xl">🔥</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
