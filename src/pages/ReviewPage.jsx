import React, { useState, useEffect } from "react";
import CreateReview from "../components/reviews/CreateReview";
import ReviewList from "../components/reviews/ReviewList";
import { fetchReviews } from "../services/reviewService";
import "../styles/ReviewsPage.css";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  // Función para cargar las reseñas
  const loadReviews = async () => {
    try {
      const data = await fetchReviews();
      setReviews(data);
    } catch (error) {
      console.error("Error al cargar las reseñas:", error);
    }
  };

  // Cargar reseñas al montar el componente
  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div className="reviews-page">
      <h1>Reseñas</h1>
      <div className="create-review-section">
        {/* Pasar loadReviews como prop para actualizar automáticamente */}
        <CreateReview onReviewCreated={loadReviews} />
      </div>
      <div className="divider" />
      <div className="review-list-section">
        {/* Pasar las reseñas como prop */}
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewsPage;
