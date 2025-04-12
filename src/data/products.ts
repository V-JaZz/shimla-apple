import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Gala Apples',
    description: 'Sweet and crisp with a distinctive red-orange color and slight striping. Perfect for snacking and salads.',
    price: 120,
    image: '/images/apple.avif',
    category: 'Premium',
    origin: 'Himachal Pradesh',
    grade: 'A',
    storage: 'Cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 100, weight: '80-100g' },
      M: { price: 120, weight: '100-120g' },
      L: { price: 140, weight: '120-150g' },
      XL: { price: 160, weight: '150-180g' }
    } 
  },
  {
    id: '2',
    name: 'Red Delicious Apples',
    description: 'Classic red apples with a mildly sweet flavor and firm texture. Great for fresh eating and baking.',
    price: 110,
    image: '/images/apple.avif',
    category: 'Premium',
    origin: 'Kashmir',
    grade: 'A',
    storage: 'Cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 90, weight: '80-100g' },
      M: { price: 110, weight: '100-120g' },
      L: { price: 130, weight: '120-150g' },
      XL: { price: 150, weight: '150-180g' }
    }
  },
  {
    id: '3',
    name: 'Granny Smith Apples',
    description: 'Tart and crisp green apples perfect for baking and adding a tangy flavor to salads.',
    price: 130,
    image: '/images/apple.avif',
    category: 'Premium',
    origin: 'Himachal Pradesh',
    grade: 'A',
    storage: 'Cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 110, weight: '80-100g' },
      M: { price: 130, weight: '100-120g' },
      L: { price: 150, weight: '120-150g' },
      XL: { price: 170, weight: '150-180g' }
    }
  },
  {
    id: '4',
    name: 'Premium Shimla Apple',
    description: 'Handpicked from our premium orchards in Shimla, these apples are naturally sweet and juicy.',
    price: 299,
    image: '/images/apple.avif',
    category: 'Premium',
    categoryColor: 'bg-blue-500',
    stock: 100,
    origin: 'Shimla, Himachal Pradesh',
    grade: 'Premium A',
    storage: 'Store in a cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 100, weight: '80-100g' },
      M: { price: 120, weight: '100-120g' },
      L: { price: 140, weight: '120-150g' },
      XL: { price: 160, weight: '150-180g' }
    }
  },
  {
    id: '5',
    name: 'Organic Shimla Apple',
    description: 'Organically grown apples without any pesticides or chemicals.',
    price: 399,
    image: '/images/apple.avif',
    category: 'Organic',
    categoryColor: 'bg-green-500',
    stock: 50,
    origin: 'Shimla, Himachal Pradesh',
    grade: 'Organic A',
    storage: 'Store in a cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 90, weight: '80-100g' },
      M: { price: 110, weight: '100-120g' },
      L: { price: 130, weight: '120-150g' },
      XL: { price: 150, weight: '150-180g' }
    }
  },
  {
    id: '6',
    name: 'Royal Shimla Apple',
    description: 'Our finest selection of apples, perfect for gifting.',
    price: 499,
    image: '/images/apple.avif',
    category: 'Royal',
    categoryColor: 'bg-purple-500',
    stock: 30,
    origin: 'Shimla, Himachal Pradesh',
    grade: 'Royal A',
    storage: 'Store in a cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 110, weight: '80-100g' },
      M: { price: 130, weight: '100-120g' },
      L: { price: 150, weight: '120-150g' },
      XL: { price: 170, weight: '150-180g' }
    }
  },
  {
    id: '7',
    name: 'Golden Shimla',
    description: 'Sweet and juicy golden apples from high-altitude orchards.',
    price: 329,
    image: '/images/apple.avif',
    category: 'Premium',
    categoryColor: 'bg-blue-500',
    stock: 60,
    origin: 'Shimla, Himachal Pradesh',
    grade: 'Premium A',
    storage: 'Store in a cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 100, weight: '80-100g' },
      M: { price: 120, weight: '100-120g' },
      L: { price: 140, weight: '120-150g' },
      XL: { price: 160, weight: '150-180g' }
    }
  },
  {
    id: '8',
    name: 'Green Shimla',
    description: 'Crisp and tangy green apples with a refreshing taste.',
    price: 249,
    image: '/images/apple.avif',
    category: 'Standard',
    categoryColor: 'bg-gray-500',
    stock: 120,
    origin: 'Shimla, Himachal Pradesh',
    grade: 'Standard A',
    storage: 'Store in a cool, dry place',
    shelfLife: '2-3 weeks',
    sizes: {
      S: { price: 90, weight: '80-100g' },
      M: { price: 110, weight: '100-120g' },
      L: { price: 130, weight: '120-150g' },
      XL: { price: 150, weight: '150-180g' }
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
}

// Get first 3 products for featured section
export const featuredProducts = [
  products[0], // Premium
  products[1], // Organic
  products[2]  // Royal
]; 