
export interface Category {
    _id: string;
    title: string;
    slug: {
      current: string;
    }
    imageUrl: string;
  }

export interface Product {
    _id: number;
    title: string;
    description: string;
    images: any;
    price: number;
    featured: boolean;
  }