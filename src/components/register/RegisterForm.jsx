// src/components/RegisterForm.jsx
import React, { useState } from "react";
import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(formData);
      localStorage.setItem("token", data.token); // Guardar token
      localStorage.setItem(
        "user",
        JSON.stringify({ name: formData.name, email: formData.email })
      ); // Guardar usuario
      window.location.href = "/"; // Redirigir al home o recargar
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="register-form">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombres</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Apellidos</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RegisterForm;
