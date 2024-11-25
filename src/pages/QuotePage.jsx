// src/pages/QuotePage.jsx
import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import {submitQuote} from '../services/quoteService';
import '../styles/QuotePage.css';

const QuotePage = () => {
  const handleQuoteSubmit = async (formData) => {
    try {
      const response = await submitQuote(formData);
      alert('Cotización enviada con éxito.');
    } catch (error) {
      alert('Hubo un error al enviar la cotización. Inténtalo de nuevo.');
      console.error(error);
    }
  };

  return (
    <div className="quote-page">
      <h1>Cotizar</h1>
      <p>Por favor, llena el siguiente formulario para solicitar una cotización.</p>
      <QuoteForm onSubmit={handleQuoteSubmit} />
    </div>
  );
};

export default QuotePage;
