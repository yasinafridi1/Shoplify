import React from 'react';
import women from '../../../images/wome.jpg';

const Cartrow = () => {
    return (
        <div className='flex justify-between items-center w-full py-1 border-b border-gray-500'>
            <div className='flex justify-center items-center'>
                <div className='w-24 h-20'>
                    <img src={women} alt="" className='w-full h-full' />
                </div>
                <div className='pl-3 text-center'>
                    <h5 className='text-base'>Man shirts</h5>
                    <h5 className='text-base pt-2'>Man</h5>
                </div>
            </div>
            <div>
                <h5 className='px-2'>$90/item</h5>
            </div>
            <div>
                <button className='px-2 py-0 rounded-full text-xl font-black  border border-green-500 text-green-500 transition-all ease-in-out duration-500 hover:bg-green-500 hover:text-white'>+</button>
                <span className='px-3 font-black text-xl'>2</span>
                <button className='px-2.5 py-0 rounded-full text-xl font-black border border-red-500 text-red-500 transition-all ease-in-out duration-500 hover:bg-red-500 hover:text-white'>-</button>
            </div>
            <div>
                <h6 className='text-lg font-bold mr-6'>$150</h6>
            </div>
            <div>
                <button className='px-4 py-0.5 font-semibold border border-red-600 rounded-full bg-red-600 text-white transition-all ease-in-out duration-500 hover:bg-white hover:text-red-600'>Remove</button>
            </div>
        </div>
    );
}

export default Cartrow;
