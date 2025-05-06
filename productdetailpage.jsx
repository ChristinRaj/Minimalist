import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductTabs from '../components/product/ProductTabs';
import RelatedProducts from '../components/product/RelatedProducts';
import Breadcrumb from '../components/ui/Breadcrumb';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Scroll to top when component mounts or productId changes
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    // For demo purposes, we'll simulate fetching product data
    const fetchProduct = async () => {
      setLoading(true);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock product data - in a real app, this would come from an API
        const mockProduct = {
          id: parseInt(productId, 10),
          name: 'The Oslo Chair',
          price: 349,
          originalPrice: 399,
          discount: 13, // percentage
          rating: 4.8,
          reviewCount: 24,
          inStock: true,
          availableColors: [
            { name: 'Natural', value: '#E0CCAE', isSelected: true },
            { name: 'Gray', value: '#808080', isSelected: false },
            { name: 'Black', value: '#000000', isSelected: false },
            { name: 'Navy', value: '#000080', isSelected: false }
          ],
          images: [
            { url: '/images/products/chair-1.jpg', alt: 'The Oslo Chair - Front view' },
            { url: '/images/products/chair-1-2.jpg', alt: 'The Oslo Chair - Side view' },
            { url: '/images/products/chair-1-3.jpg', alt: 'The Oslo Chair - Back view' },
            { url: '/images/products/chair-1-4.jpg', alt: 'The Oslo Chair - Detail view' }
          ],
          description: 'The Oslo Chair embodies Scandinavian design at its finest. With a focus on clean lines and exceptional comfort, this chair is perfect for modern living spaces. The solid oak frame provides durability, while the premium upholstery ensures lasting comfort. Each chair is handcrafted by skilled artisans, making it not just a piece of furniture, but a statement of quality craftsmanship.',
          details: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Frame: Solid oak wood with natural finish</li>
              <li>Upholstery: 85% cotton, 15% polyester</li>
              <li>Cushion fill: High-resilience foam</li>
              <li>Dimensions: W75 × D80 × H85 cm</li>
              <li>Seat height: 45 cm</li>
              <li>Weight: 12 kg</li>
              <li>Assembly: Minimal assembly required (legs)</li>
              <li>Care: Removable covers, machine washable at 30°C</li>
            </ul>
          ),
          shipping: (
            <>
              <p className="mb-4">We offer the following shipping options:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Standard Delivery (5-7 business days): Free</li>
                <li>Express Delivery (2-3 business days): $15</li>
                <li>Next Day Delivery: $25 (Order by 2pm)</li>
              </ul>
              <p className="mt-4">Please note that delivery times may vary for custom orders. All items are carefully packaged to ensure safe delivery.</p>
            </>
          ),
          category: 'Chairs',
          subcategory: 'Lounge Chairs',
          sku: 'CH-OSL-001',
          features: [
            { icon: 'sustainable', text: 'Sustainable Materials' },
            { icon: 'warranty', text: '5 Year Warranty' },
            { icon: 'handcrafted', text: 'Handcrafted' }
          ]
        };
        
        setProduct(mockProduct);
        
        // Update document title
        document.title = mockProduct.name + ' - Manufactura';
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);
  
  // Render loading state
  if (loading) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square bg-gray-200 rounded"></div>
              <div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Render error state
  if (error) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-light mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </Layout>
    );
  }
  
  // Render product not found
  if (!product) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-light mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <a 
            href="/shop" 
            className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors inline-block"
          >
            Continue Shopping
          </a>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: product.category, href: `/shop/category/${product.category.toLowerCase()}` },
            { label: product.name, href: '#', current: true }
          ]}
          className="mb-8"
        />
        
        {/* Product hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product gallery */}
          <ProductGallery images={product.images} />
          
          {/* Product information */}
          <ProductInfo product={product} />
        </div>
        
        {/* Product tabs */}
        <ProductTabs product={product} />
        
        {/* Related products */}
        <RelatedProducts currentProductId={product.id} />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;