export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  categoryColor: string;
  stock: number;
  origin: string;
  grade: string;
  storage: string;
  shelfLife: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
} 