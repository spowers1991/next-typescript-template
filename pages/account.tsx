import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/lib/user/UserContext';

const Account = () => {
  const { user } = useUser() || {};
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to /login if user is not authenticated
    }
  }, [user, router]); // Dependencies: rerun when user or router changes

  if (!user) {
    return null; // While redirecting or user is not available, render nothing
  }

  return (
    <div className='relative w-full px-3'>
      <div className='flex w-full items-center mt-12'>
        <div className='flex flex-col gap-12 m-auto container'>
          <h1 className='text-[rgb(170,170,170)] text-2xl sm:text-3xl tracking-[-1px]'>
            User Account -- <span className='font-bold text-gray-800 tracking-normal'>Dashboard</span>
          </h1>
          <div className='bg-white p-12'>
            Hello {user?.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
