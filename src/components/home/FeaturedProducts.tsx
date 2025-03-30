'use client';

import { featuredProducts } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showCategoryBadge={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 