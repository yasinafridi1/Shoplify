import { React, useEffect } from 'react';
import Singleorder from './Singleorder';
const Allorder = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section class="height-100 flex justify-center items-center pb-20 bg-secondary">
            <div class="container mx-auto mt-28">
                <h1 className='header-text text-2xl mt-10'>All Orders</h1>
                <table class="w-full table-auto bg-white">
                    <thead className='border border-green-500 bg-green-500'>
                        <tr>
                            <th class="px-4 py-2 text-left">Orders</th>
                            <th class="px-4 py-2 text-left">Phone</th>
                            <th class="px-4 py-2 text-left">Address</th>
                            <th class="px-4 py-2 text-left">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                        <Singleorder />
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Allorder;
