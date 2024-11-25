import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'; // Archivo de estilos

const Header = () => {
    // Verificar si hay un usuario en localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user'); // Eliminar usuario del localStorage
        localStorage.removeItem('token'); // Eliminar token del localStorage
        window.location.reload(); // Recargar para actualizar el estado
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="/assets/logo.jpeg" alt="Logo" />
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
                    // Mostrar nombre e ícono si el usuario está autenticado
                    <div className="user-info">
                        <i className="fas fa-user-circle"></i>
                        <span>{user.name}</span>
                        <button onClick={handleLogout} className="btn btn-logout">Cerrar Sesión</button>
                    </div>
                ) : (
                    // Mostrar botones de inicio de sesión y registro si no está autenticado
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
