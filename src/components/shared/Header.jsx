// src/components/layout/Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "../../styles/Header.css"; // Archivo de estilos

const Header = () => {
    const { user, logoutUser } = useContext(UserContext);

    return (
        <header className="header">
            <div className="logo">
                <img src="/assets/logo.png" alt="Logo" />
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
            <div className="auth-section">
                {user ? (
                    <div className="user-info">
                        <i className="fas fa-user-circle"></i>
                        <span>{user.name}</span>
                        <button onClick={logoutUser} className="delete">Cerrar Sesión</button>
                    </div>
                ) : (
                    <div className="auth-buttons">
                        <Link to="/login" className="btn btn-outline">Iniciar Sesión</Link>
                        <Link to="/register" className="btn btn-solid">Registrarme</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
