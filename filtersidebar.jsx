import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

// This is a visual-only component - filters don't actually work
const FilterSidebar = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  
  // Categories data
  const categories = [
    { id: 'chairs', name: 'Chairs', count: 24 },
    { id: 'sofas', name: 'Sofas', count: 18 },
    { id: 'tables', name: 'Tables', count: 16 },
    { id: 'lighting', name: 'Lighting', count: 12 },
    { id: 'storage', name: 'Storage', count: 9 },
    { id: 'decor', name: 'Decor', count: 15 }
  ];
  
  // Colors data
  const colors = [
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'gray', name: 'Gray', hex: '#808080' },
    { id: 'beige', name: 'Beige', hex: '#F5F5DC' },
    { id: 'brown', name: 'Brown', hex: '#964B00' },
    { id: 'green', name: 'Green', hex: '#4CAF50' }
  ];
  
  // Materials data
  const materials = [
    { id: 'wood', name: 'Wood' },
    { id: 'fabric', name: 'Fabric' },
    { id: 'metal', name: 'Metal' },
    { id: 'leather', name: 'Leather' },
    { id: 'glass', name: 'Glass' },
    { id: 'marble', name: 'Marble' }
  ];
  
  // Handle category toggle
  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };
  
  // Handle color toggle
  const toggleColor = (colorId) => {
    if (selectedColors.includes(colorId)) {
      setSelectedColors(selectedColors.filter(id => id !== colorId));
    } else {
      setSelectedColors([...selectedColors, colorId]);
    }
  };
  
  // Handle material toggle
  const toggleMaterial = (materialId) => {
    if (selectedMaterials.includes(materialId)) {
      setSelectedMaterials(selectedMaterials.filter(id => id !== materialId));
    } else {
      setSelectedMaterials([...selectedMaterials, materialId]);
    }
  };
  
  // Handle price range change
  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value, 10);
    setPriceRange(newRange);
  };
  
  // Handle clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedMaterials([]);
    setPriceRange([0, 2000]);
  };
  
  // Animation variants
  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };
  
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <motion.div
        className="fixed left-0 top-0 h-full w-80 max-w-full bg-white shadow-lg z-50 overflow-y-auto"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-light">Filters</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Clear all filters */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <button 
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Clear all filters
            </button>
          </div>
          
          {/* Price Range */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-md font-medium mb-3">Price Range</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">${priceRange[0]}</span>
              <span className="text-sm text-gray-500">${priceRange[1]}</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-full accent-black mb-2"
              />
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-full accent-black"
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-md font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => toggleCategory(category.id)}
                    className="h-4 w-4 accent-black"
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="ml-2 text-sm text-gray-700 flex-1"
                  >
                    {category.name}
                  </label>
                  <span className="text-xs text-gray-500">({category.count})</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Colors */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-md font-medium mb-3">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <div
                  key={color.id}
                  onClick={() => toggleColor(color.id)}
                  className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center border ${
                    selectedColors.includes(color.id) ? 'border-black' : 'border-gray-200'
                  }`}
                  style={{
                    backgroundColor: color.hex,
                    boxShadow: selectedColors.includes(color.id) ? '0 0 0 2px black' : 'none'
                  }}
                  title={color.name}
                >
                  {selectedColors.includes(color.id) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-4 h-4 ${
                        ['white', 'beige'].includes(color.id) ? 'text-black' : 'text-white'
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Materials */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-3">Material</h3>
            <div className="space-y-2">
              {materials.map((material) => (
                <div key={material.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`material-${material.id}`}
                    checked={selectedMaterials.includes(material.id)}
                    onChange={() => toggleMaterial(material.id)}
                    className="h-4 w-4 accent-black"
                  />
                  <label
                    htmlFor={`material-${material.id}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {material.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Apply Filters Button */}
          <button
            onClick={onClose}
            className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default FilterSidebar;