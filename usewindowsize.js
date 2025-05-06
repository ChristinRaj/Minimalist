import { useState, useEffect } from 'react';

/**
 * Custom hook that returns the current window dimensions
 * Includes debounce functionality to prevent excessive re-renders
 * @returns {Object} width and height of the window
 */
const useWindowSize = () => {
  // Initialize with undefined to avoid mismatch during SSR
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  
  useEffect(() => {
    // Handler to call on window resize
    // Using debounce pattern for better performance
    let timeoutId = null;
    
    const handleResize = () => {
      // Clear timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set a timeout to update the state after 150ms
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 150);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
  
  return windowSize;
};

export default useWindowSize;