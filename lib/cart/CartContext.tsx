import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { Product } from '../products/types/Product';
import { addToCartAction } from './actions/addToCartAction'
import { removeFromCartAction } from './actions/removeFromCartAction'
import { getCartTotal } from './helpers/getCartTotals';

interface CartState {
  cart: Product[];
  total: number;
}

interface CartContextProps extends CartState {
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const initialState: CartState = {
  cart: [],
  total: 0,
};

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: Product };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartAdd = [...state.cart, action.payload];
      return {
        ...state,
        cart: updatedCartAdd,
        total: getCartTotal(updatedCartAdd),
      };
    case 'REMOVE_FROM_CART':
      const updatedCartRemove = state.cart.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cart: updatedCartRemove,
        total: getCartTotal(updatedCartRemove),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: Product) => {
    dispatch(addToCartAction(item));
  };

  const removeFromCart = (item: Product) => {
    dispatch(removeFromCartAction(item));
  };

  useEffect(() => {
    console.log('Updated Cart:', state.cart);
  }, [state.cart]); 

  const value: CartContextProps = {
    ...state,
    addToCart,
    removeFromCart,
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
