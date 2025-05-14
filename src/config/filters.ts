import { products } from "@/data/products";

export const CATEGORIES = ["All", ...new Set(products.map(product => product.category))];

export const ITEMS_PER_PAGE = 8;