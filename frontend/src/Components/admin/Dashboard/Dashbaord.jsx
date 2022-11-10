import React from 'react';
import ChartSection from './ChartSection';

const Dashbaord = () => {
    return (
        <section className='basic-height'>
            <div className='h-24 container mx-auto mt-6 mb-10 flex justify-evenly items-center'>
                <div className='bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white'>
                    <h4 className='text-2xl header-text'>13</h4>
                    <p className='font-semibold text-sm'>Total Customer</p>
                </div>

                <div className='bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white'>
                    <h4 className='text-2xl header-text'>10,500</h4>
                    <p className='font-semibold text-sm'>Total Revenue</p>
                </div>
            </div>
            <ChartSection />
        </section>
    );
}

export default Dashbaord;
