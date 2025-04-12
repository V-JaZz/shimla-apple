'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const AVAILABLE_SIZES = ['S', 'M', 'L', 'XL'];

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1
      }}
      className={`bg-white rounded-lg shadow-md overflow-hidden group h-full flex flex-col ${className}`}
    >
      <div className="relative h-40 sm:h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm sm:text-base">
          {product.description}
        </p>

        {/* Available Sizes Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Available Sizes:</h4>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_SIZES.map((size) => (
              <span
                key={size}
                className="px-3 py-1 rounded-md text-sm border border-gray-200 bg-gray-50 text-gray-600"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl sm:text-2xl font-bold">₹{product.price}</span>
          <Link
            href={`/products/${product.id}`}
            className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 