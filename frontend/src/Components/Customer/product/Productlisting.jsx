import { React, useState } from 'react';
import Singleproduct from './Singleproduct';

const Productlisting = () => {
    const [selected, setSelected] = useState('all');

    function changeCategory(value) {
        setSelected(value);
    }
    return (
        <div className='flex flex-col justify-center items-center border-top'>
            <div className='flex justify-center items-center py-10 w-full'>
                <button onClick={() => { changeCategory('all') }} className={`${selected === 'all' ? 'bg-orange-600 text-white border-orange-600 cursor-not-allowed' : 'text-pink-600 border-pink-600 hover:text-white hover:bg-pink-600'} px-4 py-0.5 text-base font-semibold border rounded-full transition ease-in-out duration-500`}>All Category</button>
                <button onClick={() => { changeCategory('man') }} className={`${selected === 'man' ? 'bg-orange-600 text-white border-orange-600 cursor-not-allowed' : 'text-pink-600 border-pink-600 hover:text-white hover:bg-pink-600'} ml-4 xsm:ml-8 px-4 py-0.5 text-base font-semibold  border  rounded-full transition ease-in-out duration-500`}>Man</button>
                <button onClick={() => { changeCategory('women') }} className={`${selected === 'women' ? 'bg-orange-600 text-white border-orange-600 cursor-not-allowed' : 'text-pink-600 border-pink-600 hover:text-white hover:bg-pink-600'} ml-4 xsm:ml-8 px-4 py-0.5 text-base font-semibold  border  rounded-full transition ease-in-out duration-500`}>Women</button>
            </div>
            <div className='p-10 w-full grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-y-12 place-items-center transition-all ease-out duration-700'>
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
            </div>
        </div>
    );
}

export default Productlisting;





