import { Product } from '@/lib/products/types/Product';

interface CartState {
  cart: Array<Product & { quantity: number }>; 
}

export const updateProductQuantity = (state: CartState, index: number, quantity: number): CartState => {
  if (quantity < 0) {
    console.error("Quantity must be a non-negative number");
    return state; 
  }

  if (index < 0 || index >= state.cart.length) {
    console.error("Index out of bounds");
    return state;
  }

  const updatedCart = [...state.cart];
  updatedCart[index] = {
    ...updatedCart[index],
    quantity, 
  };

  return {
    ...state,
    cart: updatedCart,
  };
};
