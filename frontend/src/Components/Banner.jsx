import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import man from '../images/man-png.png';
import women from '../images/women.png';


const Banner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className='flex justify-center items-center flex-col'>
                <div className='home flex justify-center items-center flex-col'>
                    <h1 className='text-2xl xsm:text-3xl md:text-6xl font-extrabold header-text'>Wear the best</h1>
                    <h3 className='mt-2 text-gray-700 xsm:mt-4 text-md xsm:text-2xl sm:text-3xl font-semibold '>Take 20% off</h3>
                    <h5 className='mt-2 text-gray-700 font-bold xsm:mt-3 xsm:text-xl'>Limited time only</h5>
                    <button className='mt-4 xsm:mt-6'><Link className='px-4 text-xl py-2 xsm:px-6 xsm:py-2 bg-pink-600 text-white font-bold transition ease-in-out duration-500 btn-login' to='/products'>Shop Now</Link></button>
                </div>
                <div className='w-full pb-16 flex justify-center bg-white items-center flex-wrap'>
                    <Link to="/product/:man" className='card'>
                        <img src={man} alt="man design" />
                        <p>MEN'S</p>
                    </Link>
                    <Link to="/product/:woman" className='card'>
                        <img src={women} alt="women design" />
                        <p>WOMEN'S</p>
                    </Link>

                </div>
            </section>
        </>
    );
}

export default Banner;
