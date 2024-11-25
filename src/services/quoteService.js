// src/services/quoteService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/quotes'; // Cambia la URL según tu backend

const submitQuote = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar la cotización:', error);
    throw error;
  }
};

export default {
  submitQuote,
};
