import { React, useState, useEffect } from 'react';
import Table from './Table';
import '../admin.css';

const Order = () => {
    const [status, setStatus] = useState('allOrder');

    // useEffect(() => {
    //     alert(' Hello world');
    // }, [status]);

    return (
        <section className='basic-height'>
            <div className='h-24 container mx-auto mt-6 mb-10 flex justify-evenly items-center'>
                <div onClick={() => setStatus('allOrder')} className={`${status === 'allOrder' ? 'bg-pink-600 text-white' : 'bg-white text-black'} bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white`}>
                    <h4 className='text-2xl header-text'>All</h4>
                    <p className='font-semibold text-sm'>Orders</p>
                </div>

                <div onClick={() => setStatus('incompleted')} className={`${status === 'incompleted' ? 'bg-pink-600 text-white' : 'bg-white text-black'} bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white`}>
                    <h4 className='text-2xl header-text'>Pending</h4>
                    <p className='font-semibold text-sm'>Orders</p>
                </div>

                <div onClick={() => setStatus('completed')} className={`${status === 'completed' ? 'bg-pink-600 text-white' : 'bg-white text-black'} bigBtn px-6 flex justify-center items-center flex-col py-3 cursor-pointer transition-all duration-700 ease-in-out hover:bg-pink-600 hover:text-white`}>
                    <h4 className='text-2xl header-text'>Completed </h4>
                    <p className='font-semibold text-sm'>Orders</p>
                </div>
            </div>
            <div className=" w-11/12 md:container mx-auto overflow-x-scroll">
                <Table />
            </div>
        </section>
    );
}

export default Order;
