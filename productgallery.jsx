import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // If no images are provided, use a placeholder
  if (!images || images.length === 0) {
    images = [
      '/images/products/product-1.jpg',
      '/images/products/product-1-2.jpg',
      '/images/products/product-1-3.jpg',
      '/images/products/product-1-4.jpg'
    ];
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="overflow-hidden mb-4">
        <motion.img
          src={images[selectedImage]}
          alt="Product"
          className="w-full h-96 lg:h-[600px] object-cover object-center"
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 overflow-hidden border-2 ${
              selectedImage === index ? 'border-primary' : 'border-transparent'
            } transition-all duration-200`}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;