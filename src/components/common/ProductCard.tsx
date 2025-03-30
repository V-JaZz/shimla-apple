'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  showCategoryBadge?: boolean;
}

export default function ProductCard({ 
  product, 
  showAddToCart,
  showCategoryBadge
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {showMessage && (
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          Added to cart!
        </div>
      )}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {showCategoryBadge && (
            <span className={`absolute top-4 right-4 ${product.categoryColor} text-white px-3 py-1 rounded-full text-sm`}>
              {product.category}
            </span>
          )}
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-600">₹{product.price}</span>
          {showAddToCart ? (
            <button
              onClick={handleAddToCart}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Add to Cart
            </button>
          ) : (
            <Link
              href={`/products/${product.id}`}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 