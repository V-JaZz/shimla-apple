'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/apple.avif"
            alt="Our Apple Orchard"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-2xl"
          >
            A family tradition of growing premium apples in the heart of Shimla since 1985
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Heritage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px]"
          >
            <Image
              src="/images/apple.avif"
              alt="Our Heritage"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
            <p className="text-gray-600 mb-4">
              For over three generations, our family has been cultivating the finest apples in the heart of Shimla. 
              Our journey began in 1950 when our grandfather first planted apple trees in the fertile soil of Himachal Pradesh.
            </p>
            <p className="text-gray-600">
              Today, we continue his legacy with the same passion and dedication, ensuring that every apple we grow 
              meets the highest standards of quality and taste.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-600 mb-4">
              We believe in sustainable farming practices that respect both the environment and our customers. 
              Our commitment to quality means we never compromise on the care and attention we give to our apple trees.
            </p>
            <p className="text-gray-600">
              From hand-picking each apple to ensuring proper storage and transportation, we maintain the highest 
              standards throughout our entire process.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="relative h-[400px] order-1 md:order-2"
          >
            <Image
              src="/images/apple.avif"
              alt="Our Values"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px]"
          >
            <Image
              src="/images/apple.avif"
              alt="Our Process"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-600 mb-4">
              Every apple we sell goes through a rigorous selection process. We carefully inspect each fruit for 
              size, color, and quality before it reaches our customers.
            </p>
            <p className="text-gray-600">
              Our modern storage facilities ensure that the apples maintain their freshness and quality throughout 
              the supply chain, from our orchards to your doorstep.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Farming</h3>
              <p className="text-gray-600">
                We practice sustainable farming methods to protect our environment and ensure
                the long-term health of our orchards.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                Every apple is carefully selected and packed to ensure you receive only the
                finest quality produce.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
              <p className="text-gray-600">
                We value our customer&apos;s trust and work hard to maintain the highest standards
                of service and quality.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="/images/apple.avif"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="/images/apple.avif"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Priya Sharma</h3>
              <p className="text-gray-600">Quality Control Manager</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="/images/apple.avif"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Amit Patel</h3>
              <p className="text-gray-600">Operations Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 