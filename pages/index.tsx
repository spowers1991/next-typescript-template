import { Product } from '@/lib/products/types/Product';
import Filters from '@/components/filters/Filters'

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className="container flex flex-col gap-y-12 m-auto w-full pt-4 sm:pt-16 px-3">
      <h1 className='text-[rgb(170,170,170)] text-2xl sm:text-3xl tracking-[-1px]'>
        Products -- <span className='font-bold text-gray-800 tracking-normal'>Filters</span>
      </h1>
      <Filters itemsToFilter={products} />
    </div>
  );

};

export default Home;
