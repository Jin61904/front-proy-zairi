import React, { useState, useEffect } from "react";
import {
  createReview,
  updateReview,
  deleteReview,
  fetchReviews,
} from "../../services/reviewService";
import { getProjects } from "../../services/projectService";
import "../../styles/ReviewManagement.css";

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newReview, setNewReview] = useState({ serviceId: "", comment: "", rating: "" });
  const [editingReview, setEditingReview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cargar reseñas y servicios al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [reviewsData, projectsData] = await Promise.all([
          fetchReviews(),
          getProjects(),
        ]);
        setReviews(reviewsData || []);
        setProjects(projectsData || []);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Manejar creación de nueva reseña
  const handleCreate = async () => {
    try {
      const createdReview = await createReview(newReview);
      setReviews([...reviews, createdReview]);
      setNewReview({ serviceId: "", comment: "", rating: "" });
    } catch (error) {
      console.error("Error al crear la reseña:", error);
    }
  };

  // Manejar actualización de una reseña
  const handleUpdate = async () => {
    try {
      const updatedReview = await updateReview(editingReview._id, editingReview);
      setReviews(
        reviews.map((review) =>
          review._id === editingReview._id ? updatedReview : review
        )
      );
      setEditingReview(null); // Salir del modo de edición
    } catch (error) {
      console.error("Error al actualizar la reseña:", error);
    }
  };

  // Manejar eliminación de una reseña
  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Error al eliminar la reseña:", error);
    }
  };

  return (
    <div className="review-management">
      <h3>Gestión de Reseñas</h3>
      <div className="review-container">
        {/* Formulario para crear nueva reseña */}
        <div className="review-form">
          <h4>Agregar Nueva Reseña</h4>
          <select
            value={newReview.serviceId}
            onChange={(e) =>
              setNewReview({ ...newReview, serviceId: e.target.value })
            }
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.type}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Comentario"
            value={newReview.comment}
            onChange={(e) =>
              setNewReview({ ...newReview, comment: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Calificación (1-5)"
            value={newReview.rating}
            onChange={(e) =>
              setNewReview({ ...newReview, rating: e.target.value })
            }
          />
          <button
            className="primary"
            onClick={handleCreate}
            disabled={!newReview.serviceId || !newReview.comment || !newReview.rating}
          >
            Crear Reseña
          </button>
        </div>

        {/* Lista de reseñas */}
        <div className="review-list">
          {loading ? (
            <p>Cargando reseñas...</p>
          ) : reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review._id}>
                  {editingReview?._id === review._id ? (
                    // Formulario de edición
                    <div className="edit-review">
                      <select
                        value={editingReview.serviceId || ""}
                        onChange={(e) =>
                          setEditingReview({
                            ...editingReview,
                            serviceId: e.target.value,
                          })
                        }
                      >
                        <option value="" disabled>
                          Selecciona un servicio
                        </option>
                        {projects.map((project) => (
                          <option key={project._id} value={project._id}>
                            {project.type}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        value={editingReview.comment}
                        onChange={(e) =>
                          setEditingReview({
                            ...editingReview,
                            comment: e.target.value,
                          })
                        }
                      />
                      <input
                        type="number"
                        value={editingReview.rating}
                        onChange={(e) =>
                          setEditingReview({
                            ...editingReview,
                            rating: e.target.value,
                          })
                        }
                      />
                      <button className="secondary" onClick={handleUpdate}>
                        Guardar
                      </button>
                      <button
                        className="secondary"
                        onClick={() => setEditingReview(null)}
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    // Vista normal de una reseña
                    <div className="review">
                      <span>
                        {review.serviceId?.type || "Servicio no definido"} -{" "}
                        {review.comment} - {review.rating}/5
                      </span>
                      <button
                        className="secondary"
                        onClick={() => setEditingReview(review)}
                      >
                        Editar
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(review._id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay reseñas disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewManagement;
