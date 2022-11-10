import React from 'react';
import AdminNav from '../../Components/admin/AdminNav';
import CardWrapper from '../../Components/admin/Product/CardWrapper';
import EmptyPruduct from '../../Components/admin/Product/EmptyPruduct';
import Footer from '../../Components/admin/Footer';

const Product = () => {
    return (
        <>
            <AdminNav />
            <CardWrapper />
            {/* <EmptyPruduct /> */}
            <Footer />
        </>
    );
}

export default Product;
