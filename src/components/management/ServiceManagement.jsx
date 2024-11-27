import React, { useState, useEffect } from "react";
import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from "../../services/projectService";
import "../../styles/ServiceManagement.css";

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    type: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  // Función para cargar los servicios
  const fetchServices = async () => {
    try {
      setLoading(true);
      const servicesData = await getProjects();
      setServices(servicesData || []);
    } catch (error) {
      console.error("Error al cargar servicios:", error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar los servicios al montar el componente
  useEffect(() => {
    fetchServices();
  }, []);

  // Crear un nuevo servicio
  const handleCreate = async () => {
    try {
      await createProject(newService);
      setNewService({ type: "", description: "", price: "" });
      fetchServices(); // Volver a cargar la lista de servicios
    } catch (error) {
      console.error("Error al crear el servicio:", error);
    }
  };

  // Actualizar un servicio existente
  const handleUpdate = async (id, updatedData) => {
    try {
      await updateProject(id, updatedData);
      fetchServices(); // Volver a cargar la lista de servicios
    } catch (error) {
      console.error("Error al actualizar el servicio:", error);
    }
  };

  // Eliminar un servicio existente
  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      fetchServices(); // Volver a cargar la lista de servicios
    } catch (error) {
      console.error("Error al eliminar el servicio:", error);
    }
  };

  return (
    <div className="service-management-container">
      {/* Listado de servicios */}
      <div className="services-list">
        <h3>Listado de Servicios</h3>
        {loading ? (
          <p>Cargando servicios...</p>
        ) : services && services.length > 0 ? (
          <ul>
            {services.map((service) => (
              <li key={service._id}>
                <span>
                  {service.type} - {service.description} - ${service.price}
                </span>
                <button
                  className="secondary"
                  onClick={() =>
                    handleUpdate(service._id, {
                      ...service,
                      price: service.price + 10,
                    })
                  }
                >
                  Editar
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(service._id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay servicios disponibles.</p>
        )}
      </div>

      {/* Formulario de inserción */}
      <div className="add-service">
        <h3>Agregar Servicio</h3>
        <input
          type="text"
          placeholder="Tipo"
          value={newService.type}
          onChange={(e) =>
            setNewService({ ...newService, type: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newService.description}
          onChange={(e) =>
            setNewService({ ...newService, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Precio"
          value={newService.price}
          onChange={(e) =>
            setNewService({ ...newService, price: e.target.value })
          }
        />
        <button
          className="primary"
          onClick={handleCreate}
          disabled={!newService.type || !newService.price}
        >
          Crear Servicio
        </button>
      </div>
    </div>
  );
};

export default ServiceManagement;
