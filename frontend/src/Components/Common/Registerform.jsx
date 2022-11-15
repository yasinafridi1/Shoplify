import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../https/index';

const Registerform = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        fullName: '',
        phone: '',
        password: '',
        confirmPassword: '',
        email: '',
    });


    function handleInput(e) {
        const { name, value } = e.target;
        setValues((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

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

    async function handleSubmit(e) {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            setError('** Password not matching **');
        } else {
            try {
                const response = await createUser(values);
                navigate('/login');
            } catch (error) {
                if (error.response.status == 409 || error.response.status == 422) {
                    setError("** " + error.response.data.message + ' **');
                } else {
                    setError('** Something went wrong **');
                }
            }
        }
    }
    return (
        <div className='pb-24 w-screen flex justify-center items-center'>
            <form className='w-3/4 sm:w-1/2 form mt-40' onSubmit={handleSubmit}>
                <div className='py-6 text-center border-b border-gray-500 mb-8 bg-pink-600 w-full'>
                    <h1 className='header-text text-2xl text-white'>Register Here</h1>
                </div>
                <div className='w-11/12 mx-auto pb-2'>
                    <p className='text-center text-red-500'>{error ? error : ''}</p>
                    <input value={values.fullName} name="fullName" onChange={handleInput} type="text" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none" placeholder='Full name' required />
                    <input value={values.phone} name="phone" onChange={handleInput} type="number" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none" placeholder='Phone number' required />
                    <input value={values.email} name="email" onChange={handleInput} type="email" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none" placeholder='Gmail' required />
                    <input value={values.password} name="password" onChange={handleInput} type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none password" placeholder='Password' required />
                    <input value={values.confirmPassword} name="confirmPassword" onChange={handleInput} type="password" className="border border-gray-400 w-full rounded-lg px-3 py-1 mt-5 text-base outline-none password" placeholder='Confirm password' required />
                </div>
                <div className='flex items-center pl-8 mt-1'>
                    <input type="checkbox" onChange={(e) => { showPassword(e) }} /> <small className='pl-0.5 text-sm'>Show password</small>
                </div>
                <div className='w-full flex justify-center items-center mt-4 flex-col'>
                    <button type='submit' className='mb-2 border border-pink-600 px-8 py-0.5 text-lg text-pink-600 bg-white font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-pink-600'>Register</button>
                    <Link to='/' className='py-4 text-sm font-semibold text-pink-600 transition-all ease-in-out duration-500 hover:text-blue-700'>Already have account ?</Link>

                </div>
            </form>
        </div>
    );
}

export default Registerform;
