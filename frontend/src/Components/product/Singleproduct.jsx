import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/man.jpg';

const Singleproduct = () => {

    const [added, setadded] = useState(false);

    function addtocart(e) {
        e.preventDefault();
        setadded(true);
        setTimeout(() => {
            setadded(false)
        }, 1000);
    }

    return (
        <Link to='/product/737278372' className='w-48 xsm:w-36 lg:w-48 product'>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='h-32 md:h-32 lg:h-36 w-full flex justify-center items-center'>
                    <img src={image} alt="Product" className='w-full h-full' />
                </div>
                <div className='flex justify-center items-center flex-col w-full pb-2'>
                    <h6 className='mt-2 font-black'>Man Shirt</h6>
                    <p className='text-sm'>Women</p>
                    <div className='flex justify-between items-center w-full px-3 mt-1'>
                        <p className='font-medium'>$78</p>
                        <button onClick={(e) => { addtocart(e) }} className={`${added ? 'bg-green-600 border-green-600 text-white cursor-not-allowed' : 'text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white'} px-4 text-base  font-semibold border  rounded-full transition-all ease-in-out duration-500`}>Add{added ? 'ed' : ''}</button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default Singleproduct;


