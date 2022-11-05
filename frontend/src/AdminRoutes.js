import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Admin/Home';
import Orders from './pages/Admin/Orders';
import Product from './pages/Admin/Product';
import RedirectRoute from './RedirectRoute';
import Login from './pages/Auth/Login';
import Error from './pages/Admin/Error';

const AdminRoutes = () => {
    const user = false;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/products' element={<Product />} />
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
