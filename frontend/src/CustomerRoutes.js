import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from './pages/Auth/Register';
import Login from "./pages/Auth/Login";
import Home from './pages/Customer/Home';
import Allproducts from './pages/Product/Allproducts';
import Productdetail from './pages/Product/Productdetail';
import { useSelector } from 'react-redux';
import RedirectRoute from './RedirectRoute';
import Cart from './pages/Cart/Cart';
import Customerorder from './pages/Order/Customerorder';
import Orderstatus from './pages/Order/Orderstatus';
import Error from './pages/Customer/Error';



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


                <Route path='/cart' element={
                    <ProtectedRoute user={user}>
                        <Cart />
                    </ProtectedRoute>
                } />

                <Route path='/order' element={
                    <ProtectedRoute user={user}>
                        <Customerorder />
                    </ProtectedRoute>
                } />

                <Route path='/orderstatus' element={
                    <ProtectedRoute user={user}>
                        <Orderstatus />
                    </ProtectedRoute>
                } />


                <Route path="*" element={<Error />} />

            </Routes>
        </Router >
    );
}

const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};



export default CustomerRoutes;
