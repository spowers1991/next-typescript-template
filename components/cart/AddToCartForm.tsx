import React, { useState } from 'react';
import { Product } from '@/lib/products/types/Product';
import { useCart } from '@/lib/cart/CartContext';

interface AddToCartFormProps {
  product: Omit<Product, 'quantity'>; 
}

const AddToCartForm: React.FC<AddToCartFormProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const item: Product = {
      ...product,
      quantity,
    };
    addToCart(item);
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

export default AddToCartForm;
