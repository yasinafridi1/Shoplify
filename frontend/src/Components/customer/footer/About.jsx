import React from 'react';

const About = () => {
    return (
        <div id='about' className='sm:w-full border border-b-0 border-gray-200 bg-white md:border-none md:bg-gray-100 py-8 md:w-1/2 flex items-start flex-col px-6 xl:px-10'>
            <h1 className='text-3xl md:text-2xl font-semibold pb-3 text-center md:text-left w-full header-text'>About Us</h1>
            <p className='text-base md:text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid sed quo odio? Dignissimos eum inventore nobis, unde officiis officia sint, alias praesentium nisi provident, sunt eos omnis neque soluta?</p>
            <div className='flex flex-between items-start mt-12 w-full flex-wrap'>
                <div className='w-72 xsm:w-1/2 lg:w-1/2'>
                    <a href='https://goo.gl/maps/UiPfgRzcfvRwqSfc6' className='flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-solid fa-location-dot text-base"></i>
                        <p className='font-light pt-2 pl-2 text-sm'> xyz Peshawer Pakistan</p>
                    </a>
                    <a href='tel:+923045760623' className=' mt-3 flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-solid fa-phone text-base"></i>
                        <p className='font-light pl-2 text-sm'>+92304-5760623</p>
                    </a>
                    <a href='https://wa.me/+923045760623' className='mt-3 flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-brands fa-whatsapp text-base"></i>
                        <p className='font-light pl-2 text-sm'>+92304-5760623</p>
                    </a>
                    <a href='mailto:yaseenafridi10857@gmail.com' className='mt-3 flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-solid fa-envelope text-base"></i>
                        <p className='font-light pl-2 text-sm'>yaseenafridi10857@gmail.com</p>
                    </a>
                </div>
                <div className='w-72 xsm:w-1/2 sm:w-1/2 mt-5 lg:w-1/2'>
                    <h1 className='font-bold'>Social Media</h1>
                    <div className='mt-3'>
                        <a href="https://www.facebook.com" className='pr-2'> <i className="fa-brands fa-square-facebook text-3xl transition-all ease-in-out duration-300 hover:text-blue-600"></i></a>
                        <a href="https://www.instagram.com" className='px-2'><i className="fa-brands fa-square-instagram text-3xl transition-all ease-in-out duration-300 hover:text-pink-700"></i></a>
                        <a href="https://www.twitter.com" className='px-2'>  <i className="fa-brands fa-square-twitter text-3xl transition-all ease-in-out duration-300 hover:text-blue-400"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
