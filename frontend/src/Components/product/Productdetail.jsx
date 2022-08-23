import React from 'react';
import women from '../../images/wome.jpg';

const Productdetail = () => {
    return (
        <div className='py-12 px-8 flex justify-center items-center'>
            <div className='mt-8  w-64 h-36 xsm:min-w-fit xl:w1/3 xsm:h-60'>
                <img src={women} alt="" className='w-full h-full' />
            </div>
            <div className='border pl-4 border-pink-600 w-auto lg:w-1/2 xl:w-7/12 px-0 xsm:pl-4 sm:px-14 mt-8'>
                <h1 className='font-bold text-base xsm:text-lg sm:text-xl header-text'>Women Shirt</h1>
                <p className=' text-xs xsm:text-sm sm:text-base mt-0.5 sm:mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae suscipit pariatur dolorum debitis fuga neque voluptas, ipsum esse quam quidem nisi. </p>
                <p className='font-semibold text-sm xsm:text-base sm:text-lg mt-1 xsm:mt-2'>Prices : <span className='pl-1 text-pink-600'>$70</span></p>
                <button className='mt-1 xsm:mt-3 ml-4 px-1 py-0.5 sm:px-3 sm:py-1 border border-pink-600 text-pink-600 font-semibold transition ease-in-out duration-500 hover:bg-pink-600 hover:text-white'>Add to Cart</button>
            </div>
        </div>
    );
}

export default Productdetail;
