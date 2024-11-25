import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Cambia por la URL de tu backend

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
    }
};

// Función para iniciar sesión
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
};

// Función para obtener datos del usuario actual
export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No se encontró token');
    }

    try {
        const response = await axios.get(`${API_URL}/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al obtener datos del usuario');
    }
};
