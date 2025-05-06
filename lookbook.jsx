import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Lookbook = () => {
  const lookbookImages = [
    {
      id: 1,
      src: '/images/lookbook/lookbook-1.jpg',
      alt: 'Lifestyle image showing Manufactura products',
      title: 'Summer Essentials',
      description: 'Lightweight materials for warm days'
    },
    {
      id: 2,
      src: '/images/lookbook/lookbook-2.jpg',
      alt: 'Model wearing Manufactura collection',
      title: 'Evening Collection',
      description: 'Timeless designs for special occasions'
    },
    {
      id: 3,
      src: '/images/lookbook/lookbook-3.jpg',
      alt: 'Lifestyle image with Manufactura accessories',
      title: 'Accessories',
      description: 'The perfect finishing touches'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">Lookbook</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Get inspired by our signature looks and styling ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lookbookImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-3 aspect-h-4 w-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-medium mb-2">{image.title}</h3>
                  <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {image.description}
                  </p>
                  <Button 
                    as="router-link" 
                    to="/shop" 
                    variant="outline" 
                    size="small"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;