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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
      </div>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default CartForm;
