'use client';

import { useState } from 'react';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = getProductsByCategory(selectedCategory).slice(0, 12);

  const categories = ['All', 'Premium', 'Organic', 'Royal', 'Standard'];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center sm:text-left"
      >
        Our Apple Collection
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-start"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            product={product}
            index={index}
            showCategoryBadge={true}
          />
        ))}
      </div>
    </div>
  );
} 