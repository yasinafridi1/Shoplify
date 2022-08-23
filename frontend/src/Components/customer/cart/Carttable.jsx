import React from 'react';
import Cartrow from './Cartrow';

const Carttable = () => {
    const isAuth = false;
    return (
        <>
            <div className='container flex justify-center items-center flex-col py-1'>
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
