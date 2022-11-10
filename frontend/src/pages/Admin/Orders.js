import React from 'react';
import AdminNav from '../../Components/admin/AdminNav';
import Order from '../../Components/admin/Adminorder/Order';
import Footer from '../../Components/admin/Footer';

const Orders = () => {
    return (
        <>
            <AdminNav />
            <Order />
            <Footer />
        </>
    );
}

export default Orders;
