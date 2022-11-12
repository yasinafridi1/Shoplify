import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Admin/Home';
import Orders from './pages/Admin/Orders';
import Product from './pages/Admin/Product';
import RedirectRoute from './RedirectRoute';
import Login from './pages/Auth/Login';
import Error from './pages/Admin/Error';
import ProductForm from './Components/admin/Product/ProductForm';
import SingleProduct from './pages/Admin/SingleProduct';

const AdminRoutes = () => {
    const user = false;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/products' element={<Product />} />
                <Route path='/edit-product/:id' element={<ProductForm />} />
                <Route path='/add-product' element={<ProductForm />} />
                <Route path='/product-detail/:id' element={<SingleProduct />} />
                <Route path='/login' element={
                    <RedirectRoute user={user}>
                        <Login />
                    </RedirectRoute>
                } />
                <Route path="*" element={<Error />} />

            </Routes>
        </Router >
    );
}

export default AdminRoutes;
