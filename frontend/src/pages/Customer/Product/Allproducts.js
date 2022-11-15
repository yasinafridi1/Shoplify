import { React, useEffect } from 'react';
import Footer from '../../../Components/Customer/footer/Footer';
import Navbar from '../../../Components/Customer/Navbar';
import Productlisting from '../../../Components/Customer/product/Productlisting';


const Allproducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <Productlisting />
            <Footer />
        </>
    );
}

export default Allproducts;
