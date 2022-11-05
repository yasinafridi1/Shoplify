import React from 'react';
import Table from './Table';

const Order = () => {
    return (
        <>
            <div className="w-11/12 md:container mx-auto overflow-x-scroll">
                <h1 className='header-text text-2xl'>All Orders</h1>
                <Table />
            </div>
        </>
    );
}

export default Order;
