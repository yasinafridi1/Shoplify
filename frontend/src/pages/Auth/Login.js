import React from 'react';
import Loginform from '../../Components/Common/Loginform';
import Footer from '../../Components/Customer/footer/Footer';
import Navbar from '../../Components/Customer/Navbar';


const Login = () => {
    return (
        <>
            <Navbar />
            <Loginform />
            <Footer />
        </>
    );
}

export default Login;
