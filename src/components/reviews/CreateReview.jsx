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

    const formData = new FormData();
    formData.append("title", title);
    formData.append("comment", comment);
    formData.append("rating", rating);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      await createReview(formData);
      setTitle("");
      setComment("");
      setRating(0);
      setSelectedImage(null);
      setError("");
      alert("Reseña creada exitosamente.");
      if (onReviewCreated) {
        onReviewCreated();
      }
    } catch (error) {
      console.error("Error al crear la reseña:", error);
      setError("Hubo un problema al enviar la reseña. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="create-review-container">
      <div className="image-upload">
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
      </div>

      <div className="form-fields">
        <input
          type="text"
          placeholder="Título"
          className="form-input title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu reseña"
          className="form-input review-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <div className="rating-and-submit">
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
        <button onClick={handleSubmit} className="submit-btn">
          Enviar
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CreateReview;
