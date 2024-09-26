import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart/CartContext'; 
//import { getTotalQuantity } from '@/lib/contexts/cart/helpers/getTotalQuantity';
import { useRouter } from 'next/router';
import { useUser } from '@/lib/user/UserContext'
import LogoutButton from '@/components/auth/LogoutButton';

const Header = () => {
 const { isLoggedIn } = useUser()  || {}
 const router = useRouter();

 const { cart } = useCart();
 console.log(cart)
  return (
    <nav className="flex w-full items-center">
        <div className='container flex m-auto w-full py-4'>
            <div className="w-fit">
                <Link href="/">
                    <span className={` ${router.pathname === '/' ? 'text-[#434bed]' : 'text-gray-800'} flex items-center justify-center text-2xl`}>
                        Store
                    </span>
                </Link>
            </div>
            <div className="group w-fit ml-auto flex gap-x-3">
                {isLoggedIn ?
                    <>
                        <Link href="/account">
                            <span className={` ${router.pathname === '/account' ? 'text-[#434bed]' : 'text-gray-800'} flex items-center justify-center `}>
                                Account
                            </span>
                        </Link>
                        <div>
                            <span className={`text-gray-800 flex items-center justify-center `}>
                                <span>
                                    { isLoggedIn &&
                                        <LogoutButton />
                                    }
                                </span>
                            </span>
                        </div> 
                        <div>
                        cart
                        </div> 
                    </>
                :
                    <>
                        <Link href="/register">
                            <span className={` ${router.pathname === '/register' ? 'text-[#434bed]' : 'text-gray-800'} flex items-center justify-center `}>
                                Register
                            </span>
                        </Link>
                        <Link href="/login">
                            <span className={` ${router.pathname === '/login' ? 'text-[#434bed]' : 'text-gray-800'} flex items-center justify-center `}>
                                Login
                            </span>
                        </Link>
                    </>
                }         
            </div>
        </div>    
    </nav>
  );
};

export default Header;
