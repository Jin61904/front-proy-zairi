import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import ServiceManagement from '../components/management/ServiceManagement';
import QuoteManagement from '../components/management/QuoteManagement';
import ReviewManagement from '../components/management/ReviewManagement';

const AdminRoutes = () => {
    return (
        <Routes>
            {/* Rutas principales de Admin */}
            <Route path="/admin" element={<AdminDashboard />}>
                <Route path="services" element={<ServiceManagement />} />
                <Route path="quotes" element={<QuoteManagement />} />
                <Route path="reviews" element={<ReviewManagement />} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
