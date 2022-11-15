import React from 'react';
import AdminNav from '../../Components/admin/AdminNav';
import Footer from '../../Components/admin/Footer';
import ProductDetail from '../../Components/admin/Product/ProductDetail';

const SingleProduct = () => {
    return (
        <>
            <AdminNav />
            <ProductDetail />
            <Footer />
        </>
    );
}

export default SingleProduct;
