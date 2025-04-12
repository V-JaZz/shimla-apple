'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <Link href={`/products/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {product.category}
            </span>
            <span className="text-sm font-medium text-gray-900">
              ₹{product.price}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          {product.sizes && (
            <div className="mt-2 flex flex-wrap gap-1">
              {Object.keys(product.sizes).map((size) => (
                <span
                  key={size}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {size}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
} 