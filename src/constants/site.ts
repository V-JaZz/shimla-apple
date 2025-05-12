export const siteConfig = {
  name: "Shimla Apple",
  description: "Farm Fresh Apples Direct to You",
  url: "https://shimlaapple.com",
  ogImage: "https://shimlaapple.com/og.jpg",
  links: {
    facebook: "https://facebook.com/shimlaapple",
    instagram: "https://instagram.com/shimlaapple",
    twitter: "https://twitter.com/shimlaapple",
  },
  contact: {
    email: "contact@shimlaapple.com",
    phone: "+91 1234567890",
    address: "Shimla, Himachal Pradesh, India",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Story", href: "/about#story" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "All Products", href: "/products" },
        { label: "Featured", href: "/products#featured" },
        { label: "New Arrivals", href: "/products#new" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
      ],
    },
  ],
}; 