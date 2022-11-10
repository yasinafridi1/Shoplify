import React from 'react';
import ProductCard from './ProductCard';

const CardWrapper = () => {
    return (
        <section className='basic-height p-10 w-full grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-y-12 place-items-center transition-all ease-out duration-700'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    );
}

export default CardWrapper;
