import React from 'react';

const EmptyPruduct = () => {

    function addProduct() {
        alert('Add product')
    }

    return (
        <div className='basic-height w-full flex justify-center items-center flex-col empty-cart pt-20'>
            <p className='text-9xl mb-3'>&#128512;</p>
            <h1 className='text-2xl px-3 xsm:text-4xl header-text text-gray-300'>You don't have any product</h1>
            <h5 className='text-sm px-3 xsm:text-lg header-text text-gray-300 mt-1.5'>Add some of your best product</h5>
            <button onClick={addProduct} className='mb-2 mt-6 border border-pink-600 px-4 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600'> Add product</button>

        </div>
    );
}

export default EmptyPruduct;
