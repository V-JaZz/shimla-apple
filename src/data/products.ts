import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
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
    shelfLife: '2-3 weeks'
  },
  {
    id: '2',
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
    shelfLife: '2-3 weeks'
  },
  {
    id: '3',
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
    shelfLife: '2-3 weeks'
  },
  {
    id: '4',
    name: 'Red Delicious Shimla',
    description: 'Classic red apples with perfect sweetness and crunch.',
    price: 279,
    image: '/images/apple.avif',
    category: 'Premium',
    categoryColor: 'bg-blue-500',
    stock: 80,
    origin: 'Shimla, Himachal Pradesh',
    grade: 'Premium B',
    storage: 'Store in a cool, dry place',
    shelfLife: '2-3 weeks'
  },
  {
    id: '5',
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
    shelfLife: '2-3 weeks'
  },
  {
    id: '6',
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
    shelfLife: '2-3 weeks'
  }
];

export function getProducts(): Product[] {
  return products;
}

export function getProduct(id: string): Product | undefined {
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