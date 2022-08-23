import { React } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 100) {
            nav.classList.add('animateMenu');
        } else {
            nav.classList.remove('animateMenu');
        }
    })
    function toggleMenu() {
        const menu = document.querySelector('.menu-responsive');
        menu.classList.toggle('d-none');
    }
    return (
        <nav className='w-full py-3 flex justify-between items-center fixed z-50 nav' >
            <div className='flex flex-between pl-2 sm:pl-3 items-center w-2/3 sm:w-1/2'>
                <div className='flex w-1/2 xsm:pl-4'>
                    <i className="fa-solid fa-bag-shopping px-2 text-2xl pl-6 text-pink-600" ></i>
                    <h2 className='text-base pt-1 xsm:text-xl font-bold'>Shoplify</h2>
                </div>
                <Link to="/cart" className="w-1/2 flex justify-end xsm:mr-8 sm:mr-0">
                    <i class="fa-solid fa-cart-shopping text-2xl hover:text-pink-600 transition ease-in-out duration-400"></i>
                    <p className='text-xs font-bold'>10</p>
                </Link>
            </div>
            <ul className=' hidden pr-1 xl:w-1/2 sm:flex sm:justify-evenly sm:w-1/2'>
                <li><Link to="/" className='pl-8 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Home</Link></li>
                <li><Link to="/products" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Products</Link></li>
                <li> <a href="#about" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>About Us</a> </li>
                <li> <a href="#contact" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Contact Us</a> </li>
            </ul>
            <input type="checkbox" id="openSidebarMenu" onChange={toggleMenu} />
            <label for="openSidebarMenu" className=" sidebarIconToggle pr-4 sm:hidden">
                <div className="spinner top"></div>
                <div className="spinner middle"></div>
                <div className="spinner bottom"></div>
            </label>
            <ul className='sm:hidden menu-responsive d-none'>
                <li className='py-4'><Link to="/" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Home</Link></li>
                <li className='py-4'><Link to="/products" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Products</Link></li>
                <li className='py-4'><Link to="#about" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>About Us</Link></li>
                <li className='py-4'><Link to="#contact" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Contact Us</Link></li>
            </ul>
        </nav >
    );
}

export default Navbar;






// https://unsplash.com/photos/dlxLGIy-2VU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink