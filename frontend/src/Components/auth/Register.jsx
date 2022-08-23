import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    function showPassword(e) {
        const passwordInput = document.querySelectorAll('.password');
        if (e.target.checked) {
            passwordInput.forEach(input => {
                input.type = 'text';
            })
        } else {
            passwordInput.forEach(input => {
                input.type = 'password';
            })
        }
    }
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <form className='w-3/4 sm:w-1/2 form'>
                <div className='py-6 text-center border-b border-gray-500 mb-8 bg-pink-600 w-full'>
                    <h1 className='header-text text-2xl'>Register Here</h1>
                </div>
                <div className='w-11/12 mx-auto pb-2'>
                    <input type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none" placeholder='Full name' />
                    <input type="number" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none" placeholder='Phone number' />
                    <input type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none" placeholder='Gmail' />
                    <input type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none password" placeholder='Password' />
                    <input type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none password" placeholder='Confirm password' />
                </div>
                <div className='flex items-center pl-8 mt-1'>
                    <input type="checkbox" onChange={(e) => { showPassword(e) }} /> <small className='pl-0.5 text-sm'>Show password</small>
                </div>
                <div className='w-full flex justify-center items-center mt-4 flex-col'>
                    <button className='mb-2 border border-pink-600 px-8 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600'>Register</button>
                    <Link to='/' className='py-4 text-sm font-semibold text-pink-600 transition-all ease-in-out duration-500 hover:text-blue-700'>Already have account ?</Link>

                </div>
            </form>
        </div>
    );
}

export default Register;
