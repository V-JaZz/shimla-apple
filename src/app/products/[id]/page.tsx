'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

const AVAILABLE_SIZES = ['S', 'M', 'L', 'XL'] as const;

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);
  const { addToCart, items } = useCart();
  const [selectedSize, setSelectedSize] = useState<typeof AVAILABLE_SIZES[number] | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    notFound();
  }

  const isInCart = items.some(item => item.id === product.id && item.size === selectedSize);

  const handleAddToCart = () => {
    if (!selectedSize || !product) {
      return;
    }
    addToCart(product, quantity, selectedSize);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-white shadow-md"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-xl text-red-600 font-semibold">
                {selectedSize ? `₹${product.sizes[selectedSize].price}` : `Starting from ₹${product.price}`}
              </p>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Select Size</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {AVAILABLE_SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600'
                    }`}
                  >
                    <div className="text-lg font-medium">{size}</div>
                    <div className="text-sm mt-1">{product.sizes[size].weight}</div>
                    <div className="text-sm font-medium mt-1">₹{product.sizes[size].price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-red-600 hover:text-red-600"
                >
                  -
                </button>
                <span className="text-xl font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-red-600 hover:text-red-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Product Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Origin</p>
                  <p className="font-medium">{product.origin}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Grade</p>
                  <p className="font-medium">{product.grade}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Storage</p>
                  <p className="font-medium">{product.storage}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Shelf Life</p>
                  <p className="font-medium">{product.shelfLife}</p>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-6">
              {showSuccess || isInCart ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full py-4 px-6 rounded-lg text-lg font-medium bg-green-600 text-white text-center"
                >
                  Added to Cart
                </motion.div>
              ) : (
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-medium transition-colors ${
                    selectedSize
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {selectedSize ? 'Add to Cart' : 'Select a Size'}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 