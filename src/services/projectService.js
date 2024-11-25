import axios from 'axios';

const API_URL = 'http://localhost:5000/api/service'; // Cambia a la URL de tu backend

// Obtener todos los proyectos
export const getProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Retorna los datos de los proyectos
    } catch (error) {
        console.error('Error al obtener los proyectos:', error);
        throw new Error('No se pudieron obtener los proyectos');
    }
};

export const getServices = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Retorna los datos de los servicios
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        throw new Error('No se pudieron obtener los servicios');
    }
};
