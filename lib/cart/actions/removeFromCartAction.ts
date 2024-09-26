import { Product } from '@/lib/products/types/Product';

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: Product;
};

export const removeFromCartAction = (item: Product): RemoveFromCartAction => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
});
