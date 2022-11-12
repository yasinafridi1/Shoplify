import React from 'react';
import image from '../../../images/man-png.png';
import { MdDelete } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    function deleteProduct() {
        alert(" Delete icon clicked");
    }


    function editProduct() {
        alert('Edit product clicked');
    }

    return (
        <div to='/product/737278372' className='w-48 xsm:w-36 lg:w-48 productCard relative z-0'>

            <Link to='/jkaska'><MdDelete className='icon icon1' /></Link>
            <Link to='/edit-product/029390293'><FiEdit3 className='icon icon2' /></Link>

            <div className='flex flex-col justify-center items-center w-full'>
                <div className='h-32 md:h-32 lg:h-36 w-full flex justify-center items-center'>
                    <img src={image} alt="Product" className='w-full h-full' />
                </div>
                <div className='flex justify-center items-center flex-col w-full pb-2'>
                    <h6 className='mt-2 font-black'>Man Shirt</h6>
                    <p className='text-sm'>Women</p>
                    <div className='flex justify-between items-center w-full px-3 mt-1'>
                        <p className='font-medium'>$78</p>
                        <button className="px-4 text-base  font-semibold border border-pink-600  transition-all ease-in-out duration-500 text-pink-600 hover:text-white hover:bg-pink-600">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
