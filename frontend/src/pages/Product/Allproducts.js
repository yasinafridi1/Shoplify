import { React, useEffect } from 'react';
import Footer from '../../Components/footer/Footer';
import Navbar from '../../Components/Navbar';
import Singleproduct from '../../Components/product/Singleproduct';

const Allproducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <div className='py-20 px-3 '>
                <div className=' container mx-auto pt-16 pb-5 border-b border-gray-300'>
                    <h1 className='header-text text-2xl pl-6'>All Products</h1>
                </div>
                <div className='mt-10 p-10 w-full grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-y-12 place-items-center transition-all ease-out duration-700'>
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                    <Singleproduct />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Allproducts;
