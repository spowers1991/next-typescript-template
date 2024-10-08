import React from 'react';
import { Product } from '@/lib/products/types/Product';
import Thumbnail from '../images/Thumbnail';
import ProductPrice from '../products/ProductPrice';
import ProductTitle from '../products/ProductTitle';
import CartForm from '../cart/CartForm';

interface CartItemProps {
  cartItems: Product[];
}

const CartTable: React.FC<CartItemProps> = ({ cartItems }) => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center lg:block'>
        {cartItems.map(item => (
          <div key={item.id}>
            <div className='bg-white grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-[200px_1fr_auto] gap-6 lg:gap-24 border-b py-8 px-8 items-center'>
              <div className='w-full lg:w-[200px]'>
                <Thumbnail image={item?.images[0]} width={300} height={300} />
              </div>
              <div className='flex flex-col gap-4 w-full'>
                <ProductTitle value={item.title} />
                <div className="text-[#555] text-xl">
                  $12
                </div>
              </div>
              <div>
                <CartForm product={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartTable;
