import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/customer/header/Navbar";
import Footer from "./Components/customer/footer/Footer";
import Home from "./Components/customer/header/Home";
import Productdetail from "./Components/product/Productdetail";
import Cart from "./Components/customer/cart/Cart";
import Allproducts from "./Components/product/Allproducts";
import Notfound from './Components/Notfound';
import Order from './Components/customer/order/Order';
import Orderstatus from './Components/customer/order/Orderstatus';

const CustomerRoutes = () => {
    return (
        <Router>
            < Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Allproducts />} />
                <Route path="/product/:id" element={<Productdetail />} />
                <Route path="/order" element={<Order />} />
                <Route path="/orderstatus" element={<Orderstatus />} />

                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </Router >
    );
}

export default CustomerRoutes;
