import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the email to your backend
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:ring-0 focus:outline-none transition-colors"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary text-white px-4 py-3 hover:bg-accent transition-colors focus:outline-none"
        >
          Subscribe
        </motion.button>
      </form>
      
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm text-green-600"
        >
          Thank you for subscribing!
        </motion.div>
      )}
    </div>
  );
};

export default Newsletter;