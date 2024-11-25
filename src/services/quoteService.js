// src/services/quoteService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/quote'; // Cambia la URL según tu backend

export const submitQuote = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar la cotización:', error);
    throw error;
  }
};


export const deleteQuote = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error al eliminar la cotización:', error);
    throw error;
  }
}

export const fetchQuotes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las cotizaciones:', error);
    throw error;
  }
};

export const updateQuote = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la cotización:', error);
    throw error;
  }
};
