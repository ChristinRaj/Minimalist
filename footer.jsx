import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../ui/Newsletter';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-xl font-serif font-medium">
              MANUFACTURA
            </Link>
            <p className="text-primary-light text-sm leading-relaxed">
              Manufactura represents a commitment to quality craftsmanship, 
              ethical production, and timeless design. Our pieces are 
              made to last, both in style and durability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.15.63c-.78.3-1.44.7-2.1 1.37-.67.67-1.07 1.32-1.37 2.1-.3.75-.5 1.63-.56 2.9C.06 8.33.04 8.74.04 12c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.9.3.78.7 1.44 1.37 2.1.67.67 1.32 1.07 2.1 1.37.75.3 1.63.5 2.9.56 1.28.06 1.7.07 4.95.07 3.26 0 3.67-.01 4.95-.07 1.27-.06 2.15-.26 2.9-.56.78-.3 1.44-.7 2.1-1.37.67-.67 1.07-1.32 1.37-2.1.3-.75.5-1.63.56-2.9.06-1.28.07-1.7.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.27-.26-2.15-.56-2.9-.3-.78-.7-1.44-1.37-2.1-.67-.67-1.32-1.07-2.1-1.37-.75-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16 0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.4-11.85c-.8 0-1.44.64-1.44 1.44 0 .8.64 1.44 1.44 1.44.8 0 1.44-.64 1.44-1.44 0-.8-.64-1.44-1.44-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.64 6.95c-.26-1.01-.97-1.8-1.94-2.06C19.74 4.4 12 4.4 12 4.4s-7.74 0-9.7.49c-.97.27-1.68 1.05-1.94 2.06C0 8.94 0 12.8 0 12.8s0 3.86.36 5.85c.26 1.01.97 1.8 1.94 2.06 1.96.49 9.7.49 9.7.49s7.74 0 9.7-.49c.97-.26 1.68-1.05 1.94-2.06.36-1.99.36-5.85.36-5.85s0-3.86-.36-5.85zm-14.41 9.5V9.15L15.55 12.8l-6.32 3.65z"/>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-primary-light hover:text-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=new" className="text-primary-light hover:text-accent transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bestsellers" className="text-primary-light hover:text-accent transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=shirts" className="text-primary-light hover:text-accent transition-colors">
                  Shirts & Blouses
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-primary-light hover:text-accent transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-light hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-primary-light hover:text-accent transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-light hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-light hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-light hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-primary-light text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <Newsletter />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-primary-light">
          <p>© {new Date().getFullYear()} Manufactura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;