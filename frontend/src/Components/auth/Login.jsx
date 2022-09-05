import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    function showPassword(e) {
        const passwordInput = document.querySelector('.password');
        if (e.target.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }
    return (
        <div className='w-screen flex justify-center items-center pb-16'>
            <form className='w-3/4 sm:w-1/2 form mt-40'>
                <div className='py-6 text-center border-b border-gray-500 mb-8 bg-pink-600 w-full'>
                    <h1 className='header-text text-2xl'>Login Here</h1>
                </div>
                <div className='w-11/12 mx-auto pb-2'>
                    <input type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-8 mb-5 text-base outline-none" placeholder='Gmail' />
                    <input type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-4 text-base outline-none password" placeholder='Password' />
                </div>
                <div className='px-4 md:px-10 flex justify-between items-center flex-col xsm:flex-row mb-3 xsm:mb-0'>
                    <div className='flex items-center'>
                        <input type="checkbox" onChange={(e) => { showPassword(e) }} /> <small className='pl-0.5 text-sm'>Show password</small>
                    </div>
                    <div>
                        <Link to='/recover-password' className='text-sm font-semibold text-pink-600 transition-all ease-in-out duration-500 hover:text-blue-700'>Forget password ?</Link>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mt-4 flex-col'>
                    <button className='mb-2 border border-pink-600 px-8 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600'>Login</button>
                    <Link to='/register' className='py-4 text-sm font-semibold text-pink-600 transition-all ease-in-out duration-500 hover:text-blue-700'>Don't have account ?</Link>

                </div>
            </form>
        </div>
    );
}

export default Login;
