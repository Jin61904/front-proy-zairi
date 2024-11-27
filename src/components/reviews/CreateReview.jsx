import React, { useState } from "react";
import { createReview } from "../../services/reviewService";
import "../../styles/CreateReview.css";

const CreateReview = ({ onReviewCreated }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !comment || rating === 0) {
      setError("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    const reviewData = {
      title,
      comment,
      rating,
    };

    try {
      await createReview(reviewData);
      setTitle("");
      setComment("");
      setRating(0);
      setSelectedImage(null); // Limpia la imagen seleccionada
      setError("");
      alert("Reseña creada exitosamente.");
      if (onReviewCreated) {
        onReviewCreated(); // Llama a la función para recargar datos en ReviewManagement
      }
    } catch (error) {
      console.error("Error al crear la reseña:", error);
      setError("Hubo un problema al enviar la reseña. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="create-review-container">
      <div className="image-section">
        <label htmlFor="file-input" className="image-placeholder">
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="image-preview"
            />
          ) : (
            <span className="plus-icon">+</span>
          )}
        </label>
        <input
          type="file"
          id="file-input"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <div className="rating-stars">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`star ${rating > index ? "selected" : ""}`}
              onClick={() => setRating(index + 1)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <input
          type="text"
          placeholder="Título"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu reseña"
          className="form-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit} className="submit-btn">
          Enviar
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default CreateReview;
