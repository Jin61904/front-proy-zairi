import React from 'react';
import Sidebar from '../components/admin/SideBar';
import Navbar from '../components/admin/Navbar';
import '../styles/AdminDashboard.css';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <Sidebar /> {/* Sidebar fijo a la izquierda */}
            <div className="main-content">
                <Navbar /> {/* Navbar fijo en la parte superior */}
                <div className="content-wrapper">
                    <Outlet /> {/* Contenido dinámico se renderiza aquí */}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
