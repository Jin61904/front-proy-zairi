import React from 'react';
import '../../styles/NavBar.css';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <nav className="navbar">
            <h1>Dashboard</h1>
            <div className="navbar-right">
                <span>{user?.name}</span>
                <i className="fas fa-sign-out-alt" onClick={handleLogout} title="Cerrar sesión"></i>
            </div>
        </nav>
    );
};

export default Navbar;
