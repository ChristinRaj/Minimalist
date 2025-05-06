import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import useWindowSize from '../../hooks/useWindowSize';

const RelatedProducts = ({ currentProductId }) => {
  const scrollRef = useRef(null);
  const { width } = useWindowSize();
  
  // Mock related products data
  const relatedProducts = [
    {
      id: 101,
      name: 'Oslo Chair',
      price: 349,
      image: '/images/products/chair-1.jpg',
      category: 'Chairs',
      isNew: false,
      inStock: true
    },
    {
      id: 102,
      name: 'Luna Coffee Table',
      price: 499,
      image: '/images/products/table-1.jpg',
      category: 'Tables',
      isNew: true,
      inStock: true
    },
    {
      id: 103,
      name: 'Aria Sofa',
      price: 1299,
      image: '/images/products/sofa-1.jpg',
      category: 'Sofas',
      isNew: false,
      inStock: true
    },
    {
      id: 104,
      name: 'Halo Pendant Light',
      price: 189,
      image: '/images/products/lamp-1.jpg',
      category: 'Lighting',
      isNew: true,
      inStock: true
    },
    {
      id: 105,
      name: 'Nova Shelf',
      price: 249,
      image: '/images/products/shelf-1.jpg',
      category: 'Storage',
      isNew: false,
      inStock: true
    },
    {
      id: 106,
      name: 'Metro Side Table',
      price: 199,
      image: '/images/products/table-2.jpg',
      category: 'Tables',
      isNew: false,
      inStock: true
    }
  ].filter(product => product.id !== currentProductId);
  
  // Scroll functionality
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = width >= 1024 ? 800 : width >= 768 ? 600 : 300;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-light">You May Also Like</h2>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Scrollable product list */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-6"
          >
            {relatedProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={itemVariants}
                className="min-w-[260px] sm:min-w-[280px]"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;