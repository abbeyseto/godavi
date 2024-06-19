import { client } from "./lib/client";


interface Product {
  _id: number;
  title: string;
  description: string;
  images: any;
  price: number;
}

interface Category {
  id: number;
  name: string;
}

// Fetch content with GROQ
async function getCategories(): Promise<Category[]> {
  const CATEGORIES_QUERY = `*[_type == "category"] {
  ...
}
`;
  const categories = await client.fetch(CATEGORIES_QUERY);
  return categories;
}

async function getProducts(): Promise<Product[]> {
  const PRODUCTS_QUERY = `*[_type == "product"] {
    ...
  }
  `;
  const products = await client.fetch(PRODUCTS_QUERY);
  return products;
}

export { getCategories, getProducts };
