import React from 'react';
import Cartrow from './Cartrow';

const Carttable = () => {
    const isAuth = true;
    return (
        <>
            <div className='container flex justify-center items-center flex-col py-1'>
                <div className=' container mx-auto pt-16 pb-1 mb-10 border-b border-gray-300'>
                    <h1 className='header-text text-2xl pl-6'>Cart Items</h1>
                </div>
                <Cartrow />
                <Cartrow />
                <Cartrow />
                <Cartrow />
            </div>
            <div className='text-right w-full pr-16 mt-16'>
                <h5 className='text-xl font-semibold'>Total : <span className='text-pink-600 pl-2'> $420</span></h5>
                <button className='mt-5 px-6 text-xl font-semibold py-0.5 border border-pink-600 bg-pink-600 text-white transition ease-in-out duration-500 hover:bg-white hover:text-pink-600 '>{isAuth ? 'Place Order' : 'Login'}</button>
            </div>
        </>
    );
}

export default Carttable;
