import { Product } from '@/lib/products/types/Product';

export const updateCartAction = (item: Product): any => ({
  type: 'UPDATE_CART',
  payload: item,
});
