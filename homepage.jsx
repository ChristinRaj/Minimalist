import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Lookbook from '../components/home/Lookbook';
import Newsletter from '../components/ui/Newsletter';

const HomePage = () => {
  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Hero />
      <FeaturedProducts />
      <Lookbook />
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;