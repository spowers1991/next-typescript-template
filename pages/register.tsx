import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <div className='relative w-full px-3'>
      <div className='flex w-full items-center mt-12'>
        <div className='flex flex-col gap-12 m-auto container'>
          <h1 className='text-[rgb(170,170,170)] text-2xl sm:text-3xl tracking-[-1px]'>
            User Accounts -- <span className='font-bold text-gray-800 tracking-normal'>Register</span>
          </h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
