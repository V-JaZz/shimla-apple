export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: 'Health' | 'Nutrition' | 'Recipes' | 'Farming';
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Amazing Health Benefits of Eating Apples Daily',
    slug: 'health-benefits-of-apples',
    excerpt: 'Discover how incorporating apples into your daily diet can improve your health and well-being.',
    content: `
      Apples are not just delicious fruits; they're also packed with numerous health benefits. Here are 10 reasons why you should eat an apple every day:

      1. Rich in Nutrients
      Apples are a good source of fiber, vitamin C, and various antioxidants. They're also low in calories, making them a perfect snack.

      2. Supports Heart Health
      The fiber and antioxidants in apples help reduce cholesterol levels and maintain heart health.

      3. Aids in Weight Management
      The fiber content helps you feel full longer, reducing overall calorie intake.

      4. Promotes Gut Health
      Apples contain pectin, a type of fiber that acts as a prebiotic, feeding the good bacteria in your gut.

      5. Boosts Brain Health
      Antioxidants in apples may help protect your brain cells from oxidative stress.

      6. Supports Immune System
      Vitamin C and other antioxidants help strengthen your body's natural defenses.

      7. Improves Dental Health
      The act of chewing apples stimulates saliva production, reducing tooth decay.

      8. Helps Control Blood Sugar
      The fiber in apples helps regulate blood sugar levels.

      9. Reduces Risk of Cancer
      Antioxidants in apples may help reduce the risk of certain types of cancer.

      10. Promotes Skin Health
      The vitamins and antioxidants in apples help maintain healthy skin.

      Remember to eat the whole apple, including the skin, as it contains many of the beneficial nutrients.
    `,
    image: '/images/apple.avif',
    author: 'Dr. Sarah',
    date: '2024-03-15',
    category: 'Health',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Perfect Apple: A Guide to Different Varieties',
    slug: 'apple-varieties-guide',
    excerpt: 'Learn about different apple varieties and their unique characteristics to choose the perfect apple for your needs.',
    content: `
      Apples come in many varieties, each with its own unique flavor, texture, and best use. Here's a comprehensive guide:

      Shimla Apples
      - Sweet and crisp
      - Perfect for fresh eating
      - Excellent for salads
      - Great for juicing

      Royal Apples
      - Rich and aromatic
      - Ideal for baking
      - Perfect for apple sauce
      - Great for desserts

      Organic Apples
      - Natural sweetness
      - Perfect for health-conscious consumers
      - Great for fresh eating
      - Ideal for smoothies

      Each variety has its own harvesting season and storage requirements. Understanding these differences helps you choose the perfect apple for your needs.
    `,
    image: '/images/apple.avif',
    author: 'Apple Expert',
    date: '2024-03-10',
    category: 'Farming',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Delicious Apple Recipes for Every Season',
    slug: 'apple-recipes',
    excerpt: 'Explore mouth-watering apple recipes that you can enjoy throughout the year.',
    content: `
      Apples are incredibly versatile in the kitchen. Here are some delicious recipes:

      Classic Apple Pie
      - Perfect blend of sweet and tart
      - Flaky crust
      - Warm cinnamon spices

      Healthy Apple Smoothie
      - Fresh and nutritious
      - Perfect for breakfast
      - Quick and easy to make

      Apple Cinnamon Oatmeal
      - Warm and comforting
      - High in fiber
      - Perfect for cold mornings

      Each recipe brings out different aspects of apples' flavor and texture. Try them all to find your favorite!
    `,
    image: '/images/apple.avif',
    author: 'Chef Maria',
    date: '2024-03-05',
    category: 'Recipes',
    readTime: '6 min read'
  }
];

export const getBlogPost = async (slug: string): Promise<BlogPost | undefined> => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return blogPosts.slice(0, count);
}; 