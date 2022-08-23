import React from 'react';

const AdminNav = () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 100) {
            nav.classList.add('animateMenu');
        } else {
            nav.classList.remove('animateMenu');
        }
    })
    return (
        <nav className='w-full height-10 py-3 flex justify-between items-center fixed z-50 nav' >
        </nav>
    );
}

export default AdminNav;
