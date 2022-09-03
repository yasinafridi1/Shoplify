import React from 'react';
import Carttable from './Carttable';
import { Link } from 'react-router-dom';

const Cart = () => {
    const isCart = true;
    return (
        <div className='container mx-auto py-28 flex justify-center items-center flex-col'>
            {
                isCart ?
                    <Carttable />
                    :
                    <div className='py-20 flex justify-center items-center empty-cart'>
                        <div className='h-full'>
                            <img src="https://media.istockphoto.com/vectors/shopping-cart-vector-id455988369?b=1&k=20&m=455988369&s=170667a&w=0&h=8ED9De9sMmQnJxjziIte1sTK-qRWCgTpOo3f7d-xc9w=" alt="" className='h-full' />
                        </div>
                        <div className='pl-8 pr-3'>
                            <h2 className='header-text text-3xl text-gray-300'>OOP's your cart is empty</h2>
                            <p className='mt-2 mb-7 text-xl text-gray-400'>Add some product to your cart and come back</p>
                            <Link to='/product' className=' px-6 text-xl font-semibold py-0.5 border border-pink-600 text-pink-600 transition ease-in-out duration-500 hover:bg-pink-600 hover:text-white '>
                                Add Products
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Cart;
