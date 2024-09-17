// API Requests
import { getAllProducts } from "@/lib/products/helpers/getAllProducts";

// Context Providers
// import { CartProvider } from '@/lib/cart/CartContext';
import { Product } from '@/lib/products/types/Product'

// CSS
import '@/css/globals.css';

// Core Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { AppProps } from 'next/app';

// Interface for App Props
interface ExtendedAppProps extends AppProps {
  products: Product[];
}

function App({ Component, pageProps }: ExtendedAppProps) {
  return (
    <>
      <Header />
        <Component {...pageProps}  /> 
      <Footer />
    </>
  );
}

// Fetch types data in the getInitialProps and pass them to the pageProps object
App.getInitialProps = async () => {
  const products = await getAllProducts();
  return { pageProps: { products } }; 
};

export default App;
