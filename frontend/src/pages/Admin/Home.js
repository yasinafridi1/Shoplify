import React from 'react';
import AdminNav from '../../Components/admin/AdminNav';
import Dashbaord from '../../Components/admin/Dashboard/Dashbaord';
import Footer from '../../Components/admin/Footer';

const Home = () => {
    return (
        <>
            <AdminNav />
            <Dashbaord />
            <Footer />
        </>
    );
}

export default Home;
