import React, { useState, useEffect } from "react";
import { fetchReviews } from "../../services/reviewService";
import "../../styles/ReviewList.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [reviewsPerPage] = useState(10); // Reseñas por página
  const [totalPages, setTotalPages] = useState(1); // Total de páginas

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviews();
        setReviews(data);
        setTotalPages(Math.ceil(data.length / reviewsPerPage)); // Calcular total de páginas
      } catch (error) {
        console.error("Error al cargar las reseñas:", error);
      }
    };
    loadReviews();
  }, []);

  // Calcular las reseñas de la página actual
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Manejar cambio de página
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="review-list-section">
      <h2>Reseñas de Nuestros Clientes</h2>
      <div className="review-list">
        {currentReviews.length === 0 ? (
          <p>No hay reseñas disponibles.</p>
        ) : (
          currentReviews.map((review) => (
            <div key={review._id} className="review-item">
              <div className="review-image-placeholder">
                {/* Puedes añadir imágenes reales aquí */}
                <span>Imagen</span>
              </div>
              <div className="review-content">
                <h3>{review.title}</h3>
                <p>{review.comment}</p>
                <p className="review-rating">Calificación: {review.rating}/5</p>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Paginación */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default ReviewList;
