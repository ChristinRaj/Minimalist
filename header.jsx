import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { setIsMobileMenuOpen, isCartOpen, setIsCartOpen } = useUI();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to create sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-6 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile menu toggle */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Link to="/" className="text-2xl font-serif font-medium">
            MANUFACTURA
          </Link>
        </div>

        {/* Navigation - desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-primary hover:text-accent transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-primary hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-primary hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 focus:outline-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="p-2 focus:outline-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button 
            className="p-2 focus:outline-none relative"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-accent text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;