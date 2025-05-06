import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUI } from '../../context/UIContext';

const ProductCard = ({ product }) => {
  const { toggleWishlist } = useUI();

  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative pb-[125%] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Product badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            {product.new && (
              <span className="px-3 py-1 text-xs bg-primary text-white">
                New
              </span>
            )}
            {product.soldOut && (
              <span className="px-3 py-1 text-xs bg-gray-800 text-white">
                Sold Out
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 flex justify-between items-center">
            <button 
              className="text-primary hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="text-primary hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </Link>
      
      <div className="mt-4 text-center">
        <h3 className="text-primary">
          <Link 
            to={`/product/${product.id}`}
            className="font-medium hover:text-accent transition-colors"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-primary-light">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;