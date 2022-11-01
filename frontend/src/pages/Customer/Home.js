import React from 'react';
import Banner from '../../Components/Banner';
import ProductListing from "../../Components/product/Productlisting";
import Footer from '../../Components/footer/Footer';
import Navbar from '../../Components/Navbar';

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
