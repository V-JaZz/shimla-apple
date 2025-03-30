import Link from 'next/link';
import { siteConfig } from '@/constants/site';

export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{siteConfig.name}</h3>
              <p>{siteConfig.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-red-600 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: {siteConfig.contact.email}</p>
              <p>Phone: {siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }