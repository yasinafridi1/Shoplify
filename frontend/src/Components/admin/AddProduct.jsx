import React from 'react';
import AdminNav from './AdminNav';
import './form.css';

const AddProduct = () => {
    return (
        <>
            <AdminNav />
            <section>
                {/* 
                <form className='w-3/4 sm:w-1/2 form mt-40'>
                    <div className='py-6 text-center border-b border-gray-500 mb-8 bg-pink-600 w-full'>
                        <h1 className='header-text text-2xl text-white'>Login Here</h1>
                    </div>
                    <div className='w-11/12 mx-auto pb-2'>
                        <input type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-8 mb-5 text-base outline-none" placeholder='Enter product fullname' />
                        <input type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-8 mb-5 text-base outline-none" placeholder='Gmail' />
                        <input type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-8 mb-5 text-base outline-none" placeholder='Gmail' />
                        <input type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-4 text-base outline-none password" placeholder='Password' />
                    </div>
                    <div className='w-full flex justify-center items-center mt-4 flex-col'>
                        <button className='mb-2 border border-pink-600 px-8 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600'>Login</button>
                        <Link to='/register' className='py-4 text-sm font-semibold text-pink-600 transition-all ease-in-out duration-500 hover:text-blue-700'>Don't have account ?</Link>

                    </div>
                </form> */}


                <div className="wrapper">
                    <div className="triangle">
                        <h1>Welcome</h1>
                        <div>
                            <p>Create new product</p>
                        </div>
                    </div>
                    <form className='bg-white'>
                        <h1>Add Product</h1>
                        <div className="inputs pr-10">
                            <input type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-2 mb-2 text-base outline-none" placeholder='Product name' />
                            <input type="number" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-2 text-base outline-none" placeholder='Product price' />
                            <input type="file" className="border border-gray-400 bg-white  w-full rounded-lg px-3 py-1 mt-4 text-sm outline-none" placeholder='Product Image' />

                            <select className="block px-3 py-1 mt-3 mb-2 w-full text-lg text-gray-900  rounded-lg border border-gray-400 outline-none">
                                <option value="none">
                                    Select type</option>
                                <option value="male">Shirt</option>
                                <option value="female">Jeans</option>
                                <option value="shoes">Shoes</option>
                            </select>

                            <select className="block px-3 py-1 mt-3 mb-2 w-full text-lg text-gray-900  rounded-lg border border-gray-400 outline-none">
                                <option className='text-gray-300' value="none">
                                    Select Category</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <textarea cols="10" rows="3" placeholder='Enter product description' className='mt-3 px-3 py-2 text-lg outline-none w-full'></textarea>

                        </div>
                        <div className="btn-div">
                            <button className='mb-2 border border-pink-600 px-8 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600'>Submit</button>

                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddProduct;
