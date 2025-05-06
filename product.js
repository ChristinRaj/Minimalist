// Mock product data for demonstration purposes
export const products = [
    {
      id: 1,
      name: "Minimalist Linen Shirt",
      price: 89.99,
      category: "shirts",
      image: "/images/products/product-1.jpg",
      gallery: [
        "/images/products/product-1.jpg",
        "/images/products/product-1-2.jpg",
        "/images/products/product-1-3.jpg",
      ],
      description: "Premium linen shirt with clean lines and minimal detailing. Perfect for warm weather and layering.",
      colors: ["White", "Beige", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      details: {
        material: "100% European Linen",
        fit: "Regular fit",
        care: "Machine wash cold, gentle cycle. Hang to dry.",
        origin: "Made in Portugal"
      },
      featured: true,
      new: true,
    },
    {
      id: 2,
      name: "Wide Leg Trousers",
      price: 120.00,
      category: "bottoms",
      image: "/images/products/product-2.jpg",
      gallery: [
        "/images/products/product-2.jpg",
        "/images/products/product-2-2.jpg",
        "/images/products/product-2-3.jpg",
      ],
      description: "High-waisted wide leg trousers in a lightweight wool blend. Features side pockets and belt loops.",
      colors: ["Navy", "Charcoal", "Cream"],
      sizes: ["XS", "S", "M", "L", "XL"],
      details: {
        material: "70% Wool, 30% Polyester",
        fit: "High-waisted, wide leg",
        care: "Dry clean only",
        origin: "Made in Italy"
      },
      featured: true,
      new: false,
    },
    {
      id: 3,
      name: "Cashmere Oversized Sweater",
      price: 195.00,
      category: "knitwear",
      image: "/images/products/product-3.jpg",
      gallery: [
        "/images/products/product-3.jpg",
        "/images/products/product-3-2.jpg",
        "/images/products/product-3-3.jpg",
      ],
      description: "Luxuriously soft cashmere sweater with an oversized silhouette. Perfect for colder months.",
      colors: ["Camel", "Gray", "Ivory"],
      sizes: ["S", "M", "L"],
      details: {
        material: "100% Cashmere",
        fit: "Oversized",
        care: "Hand wash cold or dry clean",
        origin: "Made in Scotland"
      },
      featured: true,
      new: false,
    },
    {
      id: 4,
      name: "Structured Canvas Tote",
      price: 75.00,
      category: "accessories",
      image: "/images/products/product-4.jpg",
      gallery: [
        "/images/products/product-4.jpg",
        "/images/products/product-4-2.jpg",
        "/images/products/product-4-3.jpg",
      ],
      description: "Durable canvas tote with structured design. Features internal pockets and magnetic closure.",
      colors: ["Canvas", "Black", "Navy"],
      sizes: ["One Size"],
      details: {
        material: "Heavy Cotton Canvas with Leather Trim",
        dimensions: "H: 14\", W: 17\", D: 5\"",
        care: "Spot clean only",
        origin: "Made in USA"
      },
      featured: false,
      new: true,
    },
    {
      id: 5,
      name: "Wool Blend Coat",
      price: 285.00,
      category: "outerwear",
      image: "/images/products/product-5.jpg",
      gallery: [
        "/images/products/product-5.jpg",
        "/images/products/product-5-2.jpg",
        "/images/products/product-5-3.jpg",
      ],
      description: "Classic longline coat in a premium wool blend. Features notched lapels and front button closure.",
      colors: ["Camel", "Black", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      details: {
        material: "80% Wool, 20% Polyamide",
        fit: "Regular fit, longline",
        care: "Dry clean only",
        origin: "Made in Italy"
      },
      featured: true,
      new: false,
      soldOut: true,
    },
    {
      id: 6,
      name: "Raw Silk Blouse",
      price: 110.00,
      category: "shirts",
      image: "/images/products/product-6.jpg",
      gallery: [
        "/images/products/product-6.jpg",
        "/images/products/product-6-2.jpg",
        "/images/products/product-6-3.jpg",
      ],
      description: "Elegant raw silk blouse with a relaxed fit and subtle texture. Features a mandarin collar.",
      colors: ["Off-White", "Sage", "Blush"],
      sizes: ["XS", "S", "M", "L"],
      details: {
        material: "100% Raw Silk",
        fit: "Relaxed fit",
        care: "Dry clean only",
        origin: "Made in India"
      },
      featured: false,
      new: true,
    },
    {
      id: 7,
      name: "Leather Minimal Wallet",
      price: 55.00,
      category: "accessories",
      image: "/images/products/product-7.jpg",
      gallery: [
        "/images/products/product-7.jpg",
        "/images/products/product-7-2.jpg",
        "/images/products/product-7-3.jpg",
      ],
      description: "Sleek minimal wallet crafted from full-grain leather. Features card slots and a bill compartment.",
      colors: ["Black", "Brown", "Tan"],
      sizes: ["One Size"],
      details: {
        material: "Full-grain vegetable tanned leather",
        dimensions: "3.5\" x 4.5\"",
        care: "Occasional leather conditioning",
        origin: "Made in Spain"
      },
      featured: false,
      new: false,
    },
    {
      id: 8,
      name: "Cotton Poplin Midi Dress",
      price: 135.00,
      category: "dresses",
      image: "/images/products/product-8.jpg",
      gallery: [
        "/images/products/product-8.jpg",
        "/images/products/product-8-2.jpg",
        "/images/products/product-8-3.jpg",
      ],
      description: "A-line midi dress in crisp cotton poplin. Features a square neckline and side pockets.",
      colors: ["White", "Black", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      details: {
        material: "100% Cotton Poplin",
        fit: "A-line",
        care: "Machine wash cold, gentle cycle",
        origin: "Made in Portugal"
      },
      featured: true,
      new: false,
    }
  ];
  
  // Categories for filtering
  export const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shirts', name: 'Shirts & Blouses' },
    { id: 'bottoms', name: 'Pants & Skirts' },
    { id: 'knitwear', name: 'Knitwear' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  // Price ranges for filtering
  export const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under50', name: 'Under $50' },
    { id: '50to100', name: '$50 - $100' },
    { id: '100to200', name: '$100 - $200' },
    { id: 'over200', name: 'Over $200' }
  ];
  
  // Sort options
  export const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'name-a-z', label: 'Name: A to Z' }
  ];
  
  // Get featured products
  export const getFeaturedProducts = () => {
    return products.filter(product => product.featured);
  };
  
  // Get new products
  export const getNewProducts = () => {
    return products.filter(product => product.new);
  };
  
  // Get related products by category (excludes current product)
  export const getRelatedProducts = (currentProductId, category, limit = 4) => {
    return products
      .filter(product => product.category === category && product.id !== currentProductId)
      .slice(0, limit);
  };