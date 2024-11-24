// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Cambia por la URL de tu backend

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data; // Retorna el mensaje o los datos del backend
    } catch (error) {
        // Manejo de errores
        throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
    }
};

export const loginUser = async (credentials) => {
  try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      return response.data; // Devuelve el mensaje y el token
  } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
  }
};