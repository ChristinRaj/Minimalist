import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative w-full h-screen min-h-[70vh] overflow-hidden bg-neutral-100">
      <div className="absolute inset-0">
        <img 
          src="/images/hero.jpg" 
          alt="Manufactura Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-md text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Timeless Elegance</h1>
            <p className="text-lg mb-8 text-gray-100">
              Discover our new collection of minimalist designs crafted with exceptional materials.
            </p>
            <Button 
              as="router-link" 
              to="/shop" 
              variant="primary" 
              size="large"
              className="mt-4"
            >
              Shop Collection
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;