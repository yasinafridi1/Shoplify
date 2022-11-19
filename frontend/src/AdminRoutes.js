import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Admin/Home';
import Orders from './pages/Admin/Orders';
import Product from './pages/Admin/Product';
import RedirectRoute from './RedirectRoute';
import Login from './pages/Auth/Login';
import Error from './pages/Admin/Error';
import SingleProduct from './pages/Admin/SingleProduct';
import Addproduct from './pages/Admin/Addproduct';

const AdminRoutes = () => {
    const user = false;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/products' element={<Product />} />
                <Route path='/edit-product/:id' element={<Addproduct />} />
                <Route path='/add-product' element={<Addproduct />} />
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
