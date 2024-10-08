import React from 'react';
import Thumbnail from '../images/Thumbnail';
import ProductPrice from '../products/ProductPrice';
import ProductTitle from '../products/ProductTitle';
import CartForm from '../cart/CartForm';

interface FilteredItemProps{
  filteredItem: any;
}

const FiltersCard: React.FC<FilteredItemProps> = ({ filteredItem }) => {

  return (
          <>
            <div className='bg-white flex flex-col xl:flex-nowrap gap-4 border p-4'>
              <Thumbnail image={filteredItem?.images[0]} width={300} height={300} />   
              <div className='flex w-full'>
                <ProductTitle value={filteredItem.title} />
                <div className="flex gap-3 items-top text-[#555] ml-auto text-xl font-bold">
                  <ProductPrice value={filteredItem.price} />
                </div>
              </div>
              <div className="mt-auto">
                <CartForm product={filteredItem} />  
              </div>
            </div>
          </>
        );
    };            

export default FiltersCard;