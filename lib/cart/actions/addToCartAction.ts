import { Product } from '@/lib/products/types/Product';

type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: Product;
};

export const addToCartAction = (item: Product): AddToCartAction => ({
  type: 'ADD_TO_CART',
  payload: item,
});
