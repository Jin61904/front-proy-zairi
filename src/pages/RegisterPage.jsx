// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/register/RegisterForm';
import '../styles/RegisterPage.css';
const RegisterPage = () => {
    return (
        <div className="register-container">
            <div className="form-container">
                <div className="image-container">
                    <div className="image-placeholder">
                        <p>Imagen de referencia</p>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};
export default RegisterPage;