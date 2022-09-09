import React from 'react';
import AdminNav from './AdminNav';
import Tablebody from './Tablebody';
const Dashboard = () => {
    return (
        <>
            <AdminNav />
            <section className='w-full h-max pt-28 pb-20'>
                <div className="w-11/12 md:container mx-auto overflow-x-scroll">
                    <h1 className='header-text text-2xl'>All Orders</h1>
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
                            <Tablebody />
                            <Tablebody />

                            <Tablebody />
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default Dashboard;
