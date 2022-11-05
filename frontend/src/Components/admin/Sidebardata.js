import React from "react";
import { AiFillHome } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { FaUserFriends } from 'react-icons/fa';
import { TbClipboardText } from 'react-icons/tb';
import { BsMinecartLoaded } from 'react-icons/bs';

export const Sidebardata = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiFillHome />,
    }, {
        title: 'Products',
        path: '/products',
        icon: <BsMinecartLoaded />,
    }, {
        title: 'Orders',
        path: '/orders',
        icon: <TbClipboardText />,
    }, {
        title: 'Users',
        path: '/users',
        icon: <FaUserFriends />,
    }, {
        title: 'Profile',
        path: '/profile',
        icon: <ImProfile />,
    },
]