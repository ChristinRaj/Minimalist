import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');
  
  // Default content if no product provided
  const tabContent = {
    description: product?.description || 'This minimalist piece combines form and function in perfect harmony. Crafted with sustainable materials and featuring clean lines, it will elevate any space with its timeless design aesthetic.',
    details: product?.details || (
      <ul className="list-disc pl-5 space-y-2">
        <li>Materials: Solid oak wood, premium fabric</li>
        <li>Dimensions: W80 × D75 × H80 cm</li>
        <li>Weight: 15 kg</li>
        <li>Assembly: Minimal assembly required</li>
        <li>Care: Dust regularly with a soft, dry cloth</li>
      </ul>
    ),
    shipping: product?.shipping || (
      <>
        <p className="mb-4">We offer the following shipping options:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Standard Delivery: 5-7 business days (Free for orders over $100)</li>
          <li>Express Delivery: 2-3 business days ($15)</li>
          <li>Next Day Delivery: Order by 2pm for next business day delivery ($25)</li>
        </ul>
        <p className="mt-4">Please note that delivery times may vary for custom or pre-order items.</p>
      </>
    ),
    reviews: product?.reviews || (
      <>
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                className="w-5 h-5 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600">4.8 out of 5</span>
          </div>
          <span className="mx-4 text-gray-300">|</span>
          <span className="text-gray-600">24 reviews</span>
        </div>
        
        <div className="space-y-6">
          {[
            { 
              id: 1, 
              name: 'Sarah J.', 
              rating: 5, 
              date: '2 months ago',
              title: 'Exactly what I was looking for',
              comment: 'The quality exceeded my expectations. The design is timeless and fits perfectly with my existing furniture. Very happy with this purchase!'
            },
            { 
              id: 2, 
              name: 'Mark T.', 
              rating: 4, 
              date: '3 months ago',
              title: 'Great quality, slight delay in shipping',
              comment: 'Beautiful piece and well-made. Only giving 4 stars because shipping took longer than expected, but the product itself is excellent.'
            },
            { 
              id: 3, 
              name: 'Elena R.', 
              rating: 5, 
              date: '1 month ago',
              title: 'Worth every penny',
              comment: 'Absolutely love this piece! The craftsmanship is outstanding and it looks even better in person than in the photos.'
            }
          ].map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{review.title}</h4>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star}
                          className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <p>{review.name}</p>
                  <p>{review.date}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors">
            Write a Review
          </button>
        </div>
      </>
    )
  };
  
  // Tab animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };
  
  // Tabs configuration
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Details' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'reviews', label: 'Reviews' }
  ];
  
  return (
    <div className="mt-16">
      {/* Tab buttons */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto hide-scrollbar -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-6 font-light text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black transition-colors'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab content */}
      <motion.div 
        key={activeTab}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={tabContentVariants}
        className="py-8"
      >
        {tabContent[activeTab]}
      </motion.div>
    </div>
  );
};

export default ProductTabs;