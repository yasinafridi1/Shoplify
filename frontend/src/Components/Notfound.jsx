import React from 'react';

const Notfound = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col empty-cart pt-20'>
            <p className='text-9xl mb-3'>&#128512;</p>
            <h1 className='text-2xl px-3 xsm:text-4xl header-text text-gray-300'>Error 404 not found</h1>
            <h5 className='text-sm px-3 xsm:text-lg header-text text-gray-300 mt-1.5'>Looks like you've entered wrong address</h5>
            <button className='mb-2 mt-6 border border-pink-600 px-4 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600'> <i class="fa-solid fa-arrow-left pr-2"></i> Go back</button>

        </div>
    );
}

export default Notfound;
