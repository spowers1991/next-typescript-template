import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { Product } from '../products/types/Product';
import { updateCartAction } from './actions/updateCartAction';
import { addProductToCart } from './actions/addProductToCart'; 
import { updateProductQuantity } from './actions/updateProductQuantity'; 

interface CartState {
  cart: Product[];
}

interface CartContextProps extends CartState {
  updateCart: (item: Product) => void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const initialState: CartState = {
  cart: []
};

type CartAction =
  | { type: 'UPDATE_CART'; payload: Product };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'UPDATE_CART':
      const existingProductIndex = state.cart.findIndex(product => product.id === action.payload.id);
      
      if (existingProductIndex === -1) {
        return addProductToCart(state, action.payload);
      } else {
        return updateProductQuantity(state, existingProductIndex, action.payload.quantity);
      }

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from local storage on initial render
  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      const cart: Product[] = JSON.parse(localCart);
      // Populate state with cart from local storage
      cart.forEach(item => dispatch({ type: 'UPDATE_CART', payload: item }));
    }
  }, []);

  const updateCart = (item: Product) => {
    dispatch(updateCartAction(item));
  };

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(state.cart)); // Save cart to local storage
  }, [state.cart]);

  const value: CartContextProps = {
    ...state,
    updateCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
