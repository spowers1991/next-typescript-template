import React from 'react';
import Heading from "@/utils/Heading"

interface ProductTitleProps {
    value: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ value }) => {
    return (   
        <Heading size="h3" className={`text-[#555] font-bold`}>
            {value}
        </Heading>
    )
}

export default ProductTitle;