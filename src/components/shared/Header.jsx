import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="header-nav">
                    <li><Link to="/">Inicio</Link></li>
                    <li><a href="#about">Quienes Somos</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><Link to="/quotes">Cotizar</Link></li>
                    <li><Link to="/reviews">Reseñas</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li><Link to="/register">Registrarse</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;