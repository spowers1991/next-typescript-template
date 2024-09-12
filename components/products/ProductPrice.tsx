import React from 'react';

interface ProductPriceProps {
    value: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ( { value } ) => {

    const price = value;

    return (   
        <span className='font-bold text-xl'>
            £{price}
        </span>
    )
}

export default ProductPrice;