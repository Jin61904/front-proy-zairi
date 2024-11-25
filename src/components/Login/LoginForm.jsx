import React, { useState } from 'react';
import { loginUser, getCurrentUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(credentials);
            localStorage.setItem('token', data.token);

            const user = await getCurrentUser(); // Obtener datos completos del usuario
            localStorage.setItem('user', JSON.stringify(user));

            // Redirigir según el rol
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (error) {
            setMessage(error.message);
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
        </div>
    );
};

export default LoginForm;
