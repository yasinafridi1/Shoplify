import { React, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { auth } from '../../redux/action/authAction';
import { logoutUser } from '../../https';
import { Sidebardata } from './Sidebardata';
import { NavLink } from 'react-router-dom';
import './admin.css';


const AdminNav = () => {
    const [sidebar, setSideBar] = useState(false);

    const dispatch = useDispatch();

    async function handleLogout() {
        dispatch(auth());
        localStorage.clear();
        try {
            const { data } = await logoutUser();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='w-full bg-blue h-14 flex justify-between items-center'>
                <div className="barDiv">
                    <FaBars className='burger' onClick={() => { setSideBar(true) }} />
                </div>
                <div className='barDiv'>
                    <button onClick={handleLogout} className='text-xl font-semibold text-white transition duration-300 ease-out hover:text-cyan-300'>Logout</button>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active bg-blue' : 'nav-menu bg-blue'}>
                <div className="cross-div">
                    <AiOutlineClose className='close' onClick={() => { setSideBar(false) }} />
                </div>
                <ul className='w-full mt-10 px-3'>
                    {Sidebardata.map((ele, index) => {
                        return (
                            <li key={index} className="w-full py-3 my-3 ">
                                <NavLink to={ele.path} className="nav-link flex justify-left items-center text-2xl font-semibold header-text">
                                    {ele.icon}
                                    <span className='pl-4 mt-1'>{ele.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default AdminNav;
