import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/customer/header/Navbar";
import Footer from "./Components/customer/footer/Footer";
import Home from "./Components/customer/header/Home";
import Productdetail from "./Components/product/Productdetail";
import Cart from "./Components/customer/cart/Cart";
import Allproducts from "./Components/product/Allproducts";
import Notfound from './Components/Notfound';
import Order from './Components/customer/order/Order';
import Orderstatus from './Components/customer/order/Orderstatus';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import RedirectRoute from './RedirectRoute';
import { useSelector } from 'react-redux';

const CustomerRoutes = () => {
    const userdata = useSelector((state) => state.userInfo.user);
    let user;
    if (userdata.payload) {
        user = true;
    } else {
        user = false;
    }
    return (
        <Router>
            < Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Allproducts />} />
                <Route path="/product/:id" element={<Productdetail />} />
                <Route path='/login' element={
                    <RedirectRoute user={user}>
                        <Login />
                    </RedirectRoute>
                } />

                <Route path='/register' element={
                    <RedirectRoute user={user}>
                        <Register />
                    </RedirectRoute>
                } />


                <Route path='/order' element={
                    <ProtectedRoute user={user}>
                        <Order />
                    </ProtectedRoute>
                } />
                <Route path='/orderstatus' element={
                    <ProtectedRoute user={user}>
                        <Orderstatus />
                    </ProtectedRoute>
                } />

                <Route path='/cart' element={
                    <ProtectedRoute user={user}>
                        <Cart />
                    </ProtectedRoute>
                } />

                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </Router >
    );
}

const ProtectedRoute = ({ user, children }) => {
    console.log(user);
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};



export default CustomerRoutes;
