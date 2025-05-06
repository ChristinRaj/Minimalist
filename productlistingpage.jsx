import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/ProductCard';
import FilterSidebar from '../components/ui/FilterSidebar';
import { FunnelIcon, Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/outline';

// Dummy product data
const products = [
  {
    id: 1,
    name: 'Minimalist Chair',
    price: 299,
    image: '/images/products/product-1.jpg',
    label: 'New',
    slug: 'minimalist-chair',
  },
  {
    id: 2,
    name: 'Modern Lounge Sofa',
    price: 1299,
    image: '/images/products/product-2.jpg',
    slug: 'modern-lounge-sofa',
  },
  {
    id: 3,
    name: 'Ceramic Table Lamp',
    price: 159,
    image: '/images/products/product-3.jpg',
    label: 'Best Seller',
    slug: 'ceramic-table-lamp',
  },
  {
    id: 4,
    name: 'Natural Wood Side Table',
    price: 249,
    image: '/images/products/product-4.jpg',
    slug: 'wood-side-table',
  },
  {
    id: 5,
    name: 'Linen Throw Pillow',
    price: 59,
    image: '/images/products/product-5.jpg',
    slug: 'linen-throw-pillow',
  },
  {
    id: 6,
    name: 'Handcrafted Ceramic Vase',
    price: 89,
    image: '/images/products/product-6.jpg',
    label: 'Sale',
    slug: 'ceramic-vase',
  },
  {
    id: 7,
    name: 'Minimalist Wall Clock',
    price: 119,
    image: '/images/products/product-7.jpg',
    slug: 'wall-clock',
  },
  {
    id: 8,
    name: 'Wool Area Rug',
    price: 349,
    image: '/images/products/product-8.jpg',
    slug: 'wool-area-rug',
  },
  {
    id: 9,
    name: 'Leather Accent Chair',
    price: 499,
    image: '/images/products/product-9.jpg',
    slug: 'leather-accent-chair',
  },
  {
    id: 10,
    name: 'Glass Coffee Table',
    price: 399,
    image: '/images/products/product-10.jpg',
    label: 'New',
    slug: 'glass-coffee-table',
  },
  {
    id: 11,
    name: 'Wooden Dining Table',
    price: 899,
    image: '/images/products/product-11.jpg',
    slug: 'wooden-dining-table',
  },
  {
    id: 12,
    name: 'Pendant Light Fixture',
    price: 179,
    image: '/images/products/product-12.jpg',
    slug: 'pendant-light',
  }
];

const ProductListingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [gridColumns, setGridColumns] = useState(3); // 2, 3, or 4 columns
  const [sortOption, setSortOption] = useState('featured'); // featured, price-low, price-high, newest
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <Layout>
      {/* Page header */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-light text-primary">Shop</h1>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sm">Shop</span>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters and Sidebar */}
          <FilterSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Controls bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              {/* Mobile filter button */}
              <button 
                className="md:hidden flex items-center text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsSidebarOpen(true)}
              >
                <FunnelIcon className="w-5 h-5 mr-2" />
                <span>Filters</span>
              </button>
              
              <div className="flex items-center ml-auto">
                {/* Results count */}
                <span className="text-sm text-gray-500 mr-6">
                  Showing {products.length} results
                </span>
                
                {/* Sort dropdown */}
                <div className="relative mr-6">
                  <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-transparent border-b border-gray-300 py-1 pr-8 pl-2 text-sm focus:outline-none focus:border-primary"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="bestselling">Best Selling</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                
                {/* Grid view controls */}
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setGridColumns(2)}
                    className={`p-1 rounded-sm ${gridColumns === 2 ? 'text-primary' : 'text-gray-400'} hover:text-primary transition-colors`}
                  >
                    <Bars3Icon className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setGridColumns(3)}
                    className={`p-1 rounded-sm ${gridColumns === 3 ? 'text-primary' : 'text-gray-400'} hover:text-primary transition-colors`}
                  >
                    <Squares2X2Icon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products grid */}
            <motion.div 
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridColumns} gap-6 lg:gap-8`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button className="px-3 py-1 border border-gray-300 text-sm hover:bg-gray-50">
                  Prev
                </button>
                <button className="px-3 py-1 border border-primary bg-primary text-white text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm hover:bg-gray-50">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-3 py-1 border border-gray-300 text-sm hover:bg-gray-50">
                  8
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;