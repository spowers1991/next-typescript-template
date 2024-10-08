import React, { useState, useEffect } from 'react';
import { Product } from '@/lib/products/types/Product';
import { useCart } from '@/lib/cart/CartContext';

interface CartFormProps {
  product: Product; 
}

const CartForm: React.FC<CartFormProps> = ({ product }) => {
  const { cart, updateCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  // Effect to check if the product already exists in the cart
  useEffect(() => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity); // Set quantity if the product exists in cart
    }
  }, [cart, product.id]); // Dependency on cart and product.id

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const item: Product = {
      ...product,
      quantity,
    };
    updateCart(item);
  };

  return (
    <form onSubmit={handleSubmit} className='flex'>
      <div className='relative bg-[#f4f4f4] border border-gray-800'>
        <label htmlFor="quantity" className='ml-3 text-[#aaa] uppercase text-xs tracking-[1px] font-semibold  relative top-[-1px] hidden'>
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className='bg-[#f4f4f4] w-[100px] h-full focus:outline-0 text-center font-semibold'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
      </div>
      <button type="submit" className='p-4 bg-gray-800 text-white uppercase text-xs tracking-[1px] font-semibold'>
        Update
      </button>
    </form>
  );
};

export default CartForm;
