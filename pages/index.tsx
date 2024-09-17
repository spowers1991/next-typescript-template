import { Product } from '@/lib/products/Product';
import Filters from '@/components/filters/Filters'

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className="container flex m-auto w-full pt-4 sm:pt-16">
      <Filters itemsToFilter={products} />
    </div>
  );

};

export default Home;
