// src/components/quotes/QuoteForm.jsx
import React, { useState, useEffect } from "react";
import "../../styles/QuoteForm.css";

const QuoteForm = ({ onSubmit, loggedInUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cellphone: "",
    requirement: "",
  });

  useEffect(() => {
    // Prellenar datos si el usuario está logueado
    if (loggedInUser) {
      setFormData({
        ...formData,
        name: loggedInUser.name || "",
        email: loggedInUser.email || "",
      });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Enviar datos al backend
    setFormData({
      name: loggedInUser ? loggedInUser.name : "",
      email: loggedInUser ? loggedInUser.email : "",
      cellphone: "",
      requirement: "",
    });
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      {/* Campos de usuario (solo si no está logueado) */}
      {!loggedInUser && (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Campo de teléfono */}
      <div className="form-group">
        <label htmlFor="cellphone">Teléfono</label>
        <input
          type="tel"
          id="cellphone"
          name="cellphone"
          value={formData.cellphone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Campo de requerimiento */}
      <div className="form-group">
        <label htmlFor="requirement">Requerimiento</label>
        <textarea
          id="requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Enviar
      </button>
    </form>
  );
};

export default QuoteForm;
