import React from 'react';
import Tablebody from './Tablebody';

const Table = () => {
    return (
        <table className='table-auto mt-2 bg-white order-table'>
            <thead className='border border-green-500 bg-green-500'>
                <tr>
                    <th className='px-4 py-2 text-left text-lg'>Order</th>
                    <th className='px-4 py-2 text-left text-lg'>Customer</th>
                    <th className='px-4 py-2 text-left text-lg'>Address</th>
                    <th className='px-4 py-2 text-left text-lg'>Status</th>
                    <th className='px-4 py-2 text-left text-lg'>Placed at</th>
                </tr>
            </thead>
            <tbody>
                <Tablebody />
            </tbody>
        </table>
    );
}

export default Table;
