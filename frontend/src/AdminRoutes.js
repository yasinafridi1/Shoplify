import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from './Components/Notfound';
import Login from './Components/auth/Login';
import Dashboard from './Components/admin/Dashboard';
import RedirectRoute from './RedirectRoute';

const AdminRoutes = () => {
    const user = false;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path='/login' element={
                    <RedirectRoute user={user}>
                        <Login />
                    </RedirectRoute>
                } />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </Router >
    );
}

export default AdminRoutes;
