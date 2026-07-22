import React from 'react';
import { Camera, Hash, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-bg-dark to-[#2a1708] text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Panu's<span className="text-primary">.</span>
            </h2>
            <p className="max-w-md mb-8 text-white/60">
              Serving handcrafted momos and smoky chaap with fresh ingredients and unforgettable flavours. Experience the ultimate street food journey with us.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <Hash size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#locations" className="hover:text-primary transition-colors">Locations</a></li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun:</span>
                <span className="text-white">12:00 PM - 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Panu's Momos & Chaap. All rights reserved.</p>
          <p className="flex items-center gap-1 text-sm">
            Made with <Heart size={14} className="text-primary fill-primary" /> for Street Food Lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
