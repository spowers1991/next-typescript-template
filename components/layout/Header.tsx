import React from 'react';
import Link from 'next/link';
//import { useCart } from '@/lib/contexts/cart/CartContext'; 
//import { getTotalQuantity } from '@/lib/contexts/cart/helpers/getTotalQuantity';

const Header = () => {
 // const { cart } = useCart();

  return (
    <nav className="flex w-full bg-gray-800 items-center">
        <div className='container flex m-auto w-full p-4'>
            <div className="w-fit">
                <Link href="/">
                    <span className="flex items-center justify-center text-white">
                        Store
                    </span>
                </Link>
            </div>
            <div className="group w-fit ml-auto">
                <Link href="/cart">
                    <span className="flex items-center justify-center text-white">
                        <img src="/images/svgs/cartIcon.svg" /> <span> $ </span>
                    </span>
                </Link>          
            </div>
        </div>    
    </nav>
  );
};

export default Header;
