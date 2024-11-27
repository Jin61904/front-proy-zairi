// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/login/LoginForm';
import '../styles/LoginPage.css'; // Asegurando que los estilos se mantengan

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="form-container">
                <div className="image-container">
                    <div className="image-placeholder">
                        <p>Imagen</p>
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
