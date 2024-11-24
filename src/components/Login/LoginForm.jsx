// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { loginUser } from '../../services/authService';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(credentials);
            setMessage(data.message); // Muestra el mensaje de éxito
            localStorage.setItem('token', data.token); // Guarda el token en localStorage
        } catch (error) {
            setMessage(error.message); // Muestra el error
        }
    };

    return (
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <label>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p className="forgot-password">¿Olvidó su contraseña?</p>
        </div>
    );
};

export default LoginForm;
