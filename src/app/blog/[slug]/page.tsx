import Image from 'next/image';
import { getBlogPost } from '@/data/blog';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface BlogPost {
  image: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const postPromise = getBlogPost(resolvedParams.slug);
  const post = use(postPromise) as BlogPost | undefined;

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="bg-red-600 inline-block px-4 py-1 rounded-full text-sm mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mx-auto">
            {post.content.split('\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 