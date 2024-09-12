// Import products data
import products from '@/data/product/productData.json';
import { Product } from '@/lib/products/types';

// This function fetches products and returns them
export async function getAllProducts(): Promise<Product[]> {

  const allProducts = products || [];

  return allProducts;
}
