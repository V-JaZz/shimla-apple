'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-red-600">
            Shimla Apple
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-red-600">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600">
              Contact
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-red-600">
              Cart ({getTotalItems()})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}