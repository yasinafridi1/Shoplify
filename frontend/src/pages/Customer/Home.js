import React from 'react';
import Banner from '../../Components/Customer/Banner';
import ProductListing from "../../Components/Customer/product/Productlisting";
import Footer from '../../Components/Customer/footer/Footer';
import Navbar from '../../Components/Customer/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <ProductListing />
            <Footer />
        </>
    );
}

export default Home;
