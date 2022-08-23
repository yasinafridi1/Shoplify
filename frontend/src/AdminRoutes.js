import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from './Components/Notfound';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';

const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </Router >
    );
}

export default AdminRoutes;
