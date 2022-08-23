import React from 'react';
import About from "./About";
import Contact from './Contact';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div className='flex justify-center items-center flex-wrap'>
                <About />
                <Contact />
            </div>
            <footer className='flex justify-center items-center w-full py-2'>
                <p className='font-semibold text-white'>© 2018-{year} Soplify - All rights reserved</p>
            </footer>
        </>
    );
}

export default Footer;
