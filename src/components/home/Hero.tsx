'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[90vh]">
      <Image
        src="/images/apple.avif"
        alt="Shimla Apples"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Fresh from the Hills of Shimla
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Experience the crisp, sweet taste of premium Shimla apples, handpicked from our orchards
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/products"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 