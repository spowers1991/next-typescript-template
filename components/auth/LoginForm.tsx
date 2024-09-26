import { useState } from 'react';
import { useUser } from '@/lib/user/UserContext';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/auth/actions/loginUser';
import { User } from '@supabase/supabase-js';

const LoginForm = () => {
  // input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // message states
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { setUser } = useUser() || {};
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { success, message, user } = await loginUser(email, password);
    
    if (success) {
      setSuccessMessage(message);
      setErrorMessage('');
      if (setUser) {
        setUser(user as User);
      }
      router.push('/account');
    } else {
      setErrorMessage(message);
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 bg-[#fff] p-6 sm:p-16'>
      <div className='flex flex-col'>
        <label htmlFor="email">Email:</label>
        <input
          className='bg-[#fff] border p-2 placeholder-[#ddd] focus:outline-none'
          type="email"
          id="email"
          placeholder='Full email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="password">Password:</label>
        <input
          className='bg-[#fff] border p-2 placeholder-[#ddd] focus:outline-none'
          type="password"
          id="password"
          placeholder='Chosen password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <span className='text-xs'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      
      { (errorMessage || successMessage) &&
        <div className={`border-2 ${successMessage ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'} p-2 mt-12 text-center`}>  
          {errorMessage && 
          <p>
            {errorMessage}
          </p>}
          {successMessage &&
          <p>
              {successMessage}
            </p>}
        </div>    
      }

      <button type="submit" className='mt-12 bg-[#434bed] text-white peer-checked:text-[#333] py-[11px] sm:py-[12px] uppercase text-[11px] sm:text-sm font-[500] tracking-[1px]'>
        Login
      </button>

    </form>
  );
};

export default LoginForm;
