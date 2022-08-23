import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='py-8 w-full md:w-1/2 border px-6 xl:pl-12 flex flex-col bg-gray-100'>
            <h1 className='font-bold text-center text-3xl md:text-2xl pl-2 mt-2 mb-5 md:mt-0 md:mb-0 md:text-left header-text'>Contact Us</h1>
            <form className='flex flex-col w-4/5 mx-auto md:mx-0 md:w-full xl:w-4/5'>
                <input type="text" placeholder='Full Name' className='mt-5 px-3 py-1 outline-none rounded-2xl text-lg w-full' />
                <input type="Number" placeholder='Phone Number' className='mt-8 px-3 py-1 outline-none rounded-2xl text-lg w-full' />
                <textarea cols="30" rows="10" placeholder='Type your message' className='mt-8 px-3 py-2 text-lg outline-none w-full'></textarea>
                <div className='mt-8 flex justify-center items-center'>
                    <button className='px-4 py-0.5 text-lg font-semibold text-pink-600 border border-pink-600 rounded-full transition-all ease-in-out duration-500 hover:bg-pink-600 hover:text-white'>Send Message</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
