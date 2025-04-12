'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Your cart is empty</h1>
            <p className="mt-4 text-gray-600">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={`${item.id}-${item.size}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg shadow-sm p-4 flex items-center"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  {item.size && (
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  )}
                  <p className="text-red-600 font-medium mt-1">
                    ₹{item.size ? item.sizes[item.size].price : item.price}
                  </p>
                </div>
                <div className="ml-4 flex items-center">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-3 py-1 border-r hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 w-12 text-center inline-block flex items-center justify-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border-l hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>₹{getTotalPrice()}</span>
                  </div>
                </div>
                <button
                  onClick={clearCart}
                  className="w-full mt-4 py-2 px-4 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Clear Cart
                </button>
                <Link
                  href="/checkout"
                  className="block w-full mt-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 