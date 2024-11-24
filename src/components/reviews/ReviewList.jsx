import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../services/reviewService";
import "../../styles/ReviewList.css";

const ReviewList = ({ refresh }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (error) {
                console.error("Error al cargar las reseñas:", error);
            }
        };
        loadReviews();
    }, [refresh]);

    return (
        <section className="review-list-section">
            <h2>Reseñas de Nuestros Clientes</h2>
            <div className="review-list">
                {reviews.length === 0 ? (
                    <p>No hay reseñas disponibles.</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review._id} className="review-item">
                            <div className="review-image-placeholder">
                                {/* Puedes añadir imágenes reales aquí */}
                                <span>Imagen</span>
                            </div>
                            <div className="review-content">
                                <h3>Reseña de Cliente</h3>
                                <p>{review.comment}</p>
                                <p className="review-rating">Calificación: {review.rating}/5</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {/* Paginación */}
            <div className="pagination">
                <button>Anterior</button>
                <span>Página 1 de 10</span>
                <button>Siguiente</button>
            </div>
        </section>
    );
};

export default ReviewList;
