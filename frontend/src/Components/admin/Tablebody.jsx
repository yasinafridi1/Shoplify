import React from 'react';

const Tablebody = () => {
    return (
        <>
            <tr className='text-black'>
                <td class="border px-4 py-2">
                    <p className='font-semibold text-sm'>ed7732jdc232edf</p>
                    <div className='text-xs'>
                        <p>Man Shirt - 2pcs</p>
                        <p>Women Shirt - 1pcs</p>
                        <p>Kids Shirt - 8pcs</p>
                    </div>
                </td>
                <td class="border px-4 py-2">yaseen Afridi</td>
                <td class="border px-4 py-2">Peshawer</td>
                <td class="border px-4 py-2">
                    <div class="inline-block relative w-64">
                        <form>
                            <input type="hidden" name="orderId" />
                            <select name="status" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="order_placed">
                                    Placed</option>
                                <option value="confirmed">
                                    Confirmed</option>
                                <option value="prepared">
                                    Prepared</option>
                                <option value="delivered">
                                    Delivered
                                </option>
                                <option value="completed">
                                    Completed
                                </option>
                            </select>
                        </form>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </td>
                <td class="border px-4 py-2">
                    01:45PM
                </td>
            </tr>
        </>
    );
}

export default Tablebody;
