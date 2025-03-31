'use client';

import Image from 'next/image';
import { getProduct } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = getProduct(resolvedParams.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Added to cart successfully!
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-red-600 mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <label className="text-gray-700">Quantity:</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 border-r hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-3 py-2 w-12 text-center inline-block flex items-center justify-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="px-3 py-2 border-l hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
            <span className="text-sm text-gray-500">
              {product.stock} available
            </span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Origin:</span> {product.origin}</p>
              <p><span className="font-medium">Grade:</span> {product.grade}</p>
              <p><span className="font-medium">Storage:</span> {product.storage}</p>
              <p><span className="font-medium">Shelf Life:</span> {product.shelfLife}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 