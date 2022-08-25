import React from 'react';
import { Link } from 'react-router-dom';

const Singleorder = () => {
    return (
        <>
            <tr>
                <td class="border px-4 py-2">
                    <Link to='/orderstatus'>3bsdafegh31982jj</Link>
                </td>
                <td class="border px-4 py-2">
                    03045760623
                </td>
                <td class="border px-4 py-2">
                    dalazak peshawer
                </td>
                <td class="border px-4 py-2">
                    12:47 am
                </td>
            </tr>
            {/* <tr>
                <td class="p-4"><span>No orders found!</span></td>
            </tr> */}
        </>
    );
}

export default Singleorder;
