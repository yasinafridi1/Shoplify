import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../redux/action/authAction';
import { store } from '../../redux/store';
import { logoutUser } from '../../https';

const Navbar = () => {
    const dispatch = useDispatch();
    const [userLogin, setLogin] = useState(false);

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

    useEffect(() => {
        const user = store.getState().userInfo.user;
        user.payload ? setLogin(true) : setLogin(false);
    }, [userLogin]);


    async function handleLogout() {
        dispatch(auth());
        localStorage.clear();
        try {
            const { data } = await logoutUser();
            setLogin(false);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className='nav fixed top-0 w-full flex justify-center items-center flex-col' >
            <div className='w-full flex justify-between items-center py-2 nav-header'>
                <div className='flex justify-between items-center w-1/3 ml-10 flex-col md:flex-row'>
                    <a href='tel:+923045760623' className='mt-3 flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-solid fa-phone text-base md:text-lg font-bold"></i>
                        <p className='pl-2 text-sm md:text-md lg:text-lg font-semibold'>+92304-5760623</p>
                    </a>
                    <a href='https://wa.me/+923045760623' className='mt-3 flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-brands fa-whatsapp text-base md:text-lg font-bold"></i>
                        <p className='pl-2 text-sm md:text-md lg:text-lg font-semibold'>+92304-5760623</p>
                    </a>
                </div>
                {
                    userLogin ?
                        <div className='mr-16'>
                            <button className='px-4 py-0.5 font-semibold border border-pink-600 btn-register' onClick={handleLogout}>Log Out</button>
                        </div>
                        :
                        <div className='mr-6 sm:mr-16'>
                            <button className='px-2 sm:px-4 py-0.5 font-normal sm:font-semibold border border-pink-600 btn-login'> <Link to="/login">Sign In</Link> </button>
                            <button className='px-2 sm:px-4 py-0.5 font-normal sm:font-semibold border border-pink-600 btn-register'> <Link to="/register">Sign Up</Link> </button>
                        </div>
                }

            </div>
            <div className='w-full py-3 flex justify-between items-center bg-blue'>
                <div className='flex flex-between pl-2 sm:pl-3 items-center w-2/3 sm:w-1/2'>
                    <div className='flex w-1/2 xsm:pl-4'>
                        <i className="fa-solid fa-bag-shopping px-2 text-2xl pl-6 text-pink-800" ></i>
                        <h2 className='text-base pt-1 xsm:text-xl font-bold text-pink-700'>Shoplify</h2>
                    </div>
                    <Link to="/cart" className="w-1/2 flex justify-end xsm:mr-8 sm:mr-0">
                        <i className="fa-solid fa-cart-shopping text-2xl text-pink-800 hover:text-pink-600 transition ease-in-out duration-400"></i>
                        <p className='text-xs font-bold'>10</p>
                    </Link>
                </div>
                <ul className=' hidden pr-1 xl:w-1/2 sm:flex sm:justify-evenly sm:w-1/2'>
                    <li><Link to="/" className='pl-8 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Home</Link></li>
                    <li><Link to="/products" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Products</Link></li>
                    {
                        userLogin
                            ?
                            <li><Link to="/order" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Orders</Link></li>
                            : ' '
                    }
                    <li> <a href="#about" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>About</a> </li>
                    <li> <a href="#contact" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500 mr-2 lg:mr-0'>Contact</a> </li>
                </ul>
                <input type="checkbox" id="openSidebarMenu" onChange={toggleMenu} />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle pr-4 sm:hidden">
                    <div className="spinner top"></div>
                    <div className="spinner middle"></div>
                    <div className="spinner bottom"></div>
                </label>
                <ul className='sm:hidden menu-responsive d-none'>
                    <li className='py-4'><Link to="/" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Home</Link></li>
                    <li className='py-4'><Link to="/products" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Products</Link></li>
                    {
                        userLogin
                            ?
                            <li className='py-4'><Link to="/order" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Orders</Link></li>
                            : ''
                    }
                    <li className='py-4'><a href="#about" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>About Us</a></li>
                    <li className='py-4'><a href="#contact" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Contact Us</a></li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;






// https://unsplash.com/photos/dlxLGIy-2VU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink