// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'; // Archivo de estilos

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/path-to-logo.png" alt="Logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/#about">Quiénes Somos</a></li>
                    <li><a href="/#projects">Proyectos</a></li>
                    <li><a href="/#contact">Contacto</a></li>
                    <li><Link to="/quotes">Cotizar</Link></li>
                    <li><Link to="/reviews">Reseñas</Link></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline">Iniciar Sesión</Link>
                <Link to="/register" className="btn btn-solid">Registrarme</Link>
            </div>
        </header>
    );
};

export default Header;
