import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from './Components/Notfound';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Dashboard from './Components/admin/Dashboard';
import Orderstatus from './Components/customer/order/Orderstatus';

const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />

                {/* <Route path="/" element={<Orderstatus />} /> */}
                <Route path="/signin" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </Router >
    );
}

export default AdminRoutes;
