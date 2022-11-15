import React from 'react';

const ProductDetail = () => {
    return (
        <div className='height-100 px-8 flex justify-center items-center'>
            <div className='mt-8  w-64 h-36 xsm:min-w-fit xl:w1/3 xsm:h-60'>
                <img src={women} alt="" className='w-full h-full' />
            </div>
            <div className='pl-4 w-auto lg:w-1/2 xl:w-7/12 px-0 xsm:pl-4 sm:px-14 mt-8'>
                <h1 className='font-bold text-base xsm:text-lg sm:text-xl header-text'>Women Shirt</h1>
                <p className=' text-xs xsm:text-sm sm:text-base mt-0.5 sm:mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae suscipit pariatur dolorum debitis fuga neque voluptas, ipsum esse quam quidem nisi. </p>
                <p className='font-semibold text-sm xsm:text-base sm:text-lg mt-1 xsm:mt-2'>Prices : <span className='pl-1 text-pink-600'>$70</span></p>
                <button onClick={(e) => { addtocart(e) }} className={`${added ? 'bg-green-600 border-green-600 text-white cursor-not-allowed' : 'text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white'} px-4 text-base  font-semibold border  transition-all ease-in-out duration-500`}>{added ? 'ed' : 'Add to cart'}</button>

            </div>
        </div>
    );
}

export default ProductDetail;
