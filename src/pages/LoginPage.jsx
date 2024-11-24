
// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import '../styles/LoginPage.css';

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