import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/apple.avif"
          alt="Fresh Shimla Apples"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Fresh Apples from the Heart of Shimla
          </h1>
          <p className="text-xl mb-8">
            Experience the authentic taste of premium Shimla apples, 
            handpicked from our family-owned orchards and delivered fresh to your doorstep.
          </p>
          <div className="flex gap-4">
            <Link href="/products">
              <Button variant="default" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 