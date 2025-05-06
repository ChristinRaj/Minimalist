import React, { createContext, useState, useContext } from 'react';

// Create context
const UIContext = createContext();

export const UIProvider = ({ children }) => {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Cart state (dummy)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  // Wishlist state (dummy)
  const [wishlistItems, setWishlistItems] = useState([]);
  
  // Add to cart function (dummy)
  const addToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    console.log('Adding to cart:', { product, quantity, selectedSize, selectedColor });
    // In a real app, this would add the item to the cart
    // For this demo, we'll just log it
    
    // Open cart sidebar
    setIsCartOpen(true);
  };
  
  // Toggle wishlist function (dummy)
  const toggleWishlist = (productId) => {
    console.log('Toggling wishlist for product:', productId);
    // In a real app, this would add/remove the item from the wishlist
  };
  
  // Expose the context
  const value = {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    wishlistItems,
    addToCart,
    toggleWishlist
  };
  
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

// Custom hook to use the UI context
export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};