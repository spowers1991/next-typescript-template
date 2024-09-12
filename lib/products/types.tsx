// Define types for nested structures

  export interface Collection {
    id: string;
    handle: string;
    title: string;
  }
  
  export interface Image {
    id: string;
    originalSrc: string;
    height: number;
    width: number;
    altText: string;
  }
  
  export interface SelectedOption {
    name: string;
    value: string;
  }
  
  export interface Stock {
    available: boolean;
    quantity: number;
  }
  
  export interface Variant {
    id: string;
    title: string;
    quantity: number;
    price: string;
    selectedOptions: SelectedOption[];
    stock: Stock;
  }
  
  export interface SEO {
    title: string;
    description: string;
    keywords: string;
  }
  
  // Main Product type
  
  export interface Product {
    id: string;
    title: string;
    description: string;
    handle: string;
    quantity: number;
    price: string;
    collections: Collection[];
    images: Image[];
    variants: Variant[];
    seo: SEO;
  }
  
  // Array of products type
  export type Products= Product[];
  