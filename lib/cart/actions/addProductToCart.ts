import { Product } from '@/lib/products/types/Product';

interface CartState {
  cart: Product[];
}

export const addProductToCart = (state: CartState, product: Product): CartState => {
  const isProductInCart = state.cart.some(item => item.id === product.id);
  
  return {
    ...state,
    cart: isProductInCart ? state.cart : [...state.cart, product],
  };
};
