import { Product } from '@/lib/products/types/Product';

export const getCartTotal = (cart: Product[]): number => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
