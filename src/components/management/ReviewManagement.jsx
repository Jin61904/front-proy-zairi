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
  const [newReview, setNewReview] = useState({
    serviceId: "",
    comment: "",
    rating: "",
  });
  const [editingReview, setEditingReview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para cargar datos (reseñas y servicios)
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

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Manejar creación de nueva reseña
  const handleCreate = async () => {
    try {
      await createReview(newReview);
      setNewReview({ serviceId: "", comment: "", rating: "" });
      fetchData(); // Volver a cargar la lista de reseñas
    } catch (error) {
      console.error("Error al crear la reseña:", error);
    }
  };

  // Manejar actualización de una reseña
  const handleUpdate = async () => {
    try {
      await updateReview(editingReview._id, editingReview);
      setEditingReview(null); // Salir del modo de edición
      fetchData(); // Volver a cargar la lista de reseñas
    } catch (error) {
      console.error("Error al actualizar la reseña:", error);
    }
  };

  // Manejar eliminación de una reseña
  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      fetchData(); // Volver a cargar la lista de reseñas
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
            placeholder="Titulo"
            value={newReview.title}
            onChange={(e) =>
              setNewReview({ ...newReview, title: e.target.value })
            }
          />
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
            disabled={
              !newReview.serviceId || !newReview.comment || !newReview.rating
            }
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
                        value={editingReview.title}
                        onChange={(e) =>
                          setEditingReview({
                            ...editingReview,
                            title: e.target.value,
                          })
                        }
                      />
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
                        {review.serviceId?.type || "Servicio no definido"} - {review.title} -
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
