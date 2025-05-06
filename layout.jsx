import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { useUI } from '../../context/UIContext';

const Layout = ({ children }) => {
  const { isMobileMenuOpen, isCartOpen } = useUI();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      
      {/* Mobile menu - conditionally rendered */}
      {isMobileMenuOpen && <MobileMenu />}
      
      {/* Main content */}
      <main className={`flex-grow pt-24 ${isMobileMenuOpen || isCartOpen ? 'overflow-hidden max-h-screen' : ''}`}>
        {children}
      </main>
      
      <Footer />
      
      {/* Cart sidebar - would be implemented in a real app */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Your Cart</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => useUI().setIsCartOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="mt-4 text-gray-500">Your cart is empty</p>
              <button 
                className="mt-6 bg-primary text-white px-6 py-3 hover:bg-accent transition-colors"
                onClick={() => useUI().setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;