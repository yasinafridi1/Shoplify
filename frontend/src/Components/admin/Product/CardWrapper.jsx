import { React, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';

const CardWrapper = () => {
    const [status, setStatus] = useState('all');

    return (
        <>
            <div className='h-24 container mx-auto mt-6 mb-10 flex justify-evenly items-center'>
                <Link to='/add-product' className='bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white'>
                    <h4 className='text-2xl header-text'>Add</h4>
                    <p className='font-semibold text-sm'>New Product</p>
                </Link>

                <div onClick={() => setStatus('all')} className={`${status === 'all' ? 'bg-pink-600 text-white' : 'bg-white text-black'} bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white`}>
                    <h4 className='text-2xl header-text'>All</h4>
                    <p className='font-semibold text-sm'>Product</p>
                </div>
                <div onClick={() => setStatus('female')} className={`${status === 'female' ? 'bg-pink-600 text-white' : 'bg-white text-black'} bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white`}>
                    <h4 className='text-2xl header-text'>Female</h4>
                    <p className='font-semibold text-sm'>Product</p>
                </div>

                <div onClick={() => setStatus('male')} className={`${status === 'male' ? 'bg-pink-600 text-white' : 'bg-white text-black'} bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white`}>
                    <h4 className='text-2xl header-text'>Male </h4>
                    <p className='font-semibold text-sm'>Product</p>
                </div>
            </div>
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
        </>
    );
}

export default CardWrapper;
