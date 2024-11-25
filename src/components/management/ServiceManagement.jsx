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

  useEffect(() => {
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

    fetchServices();
  }, []);

  const handleCreate = async () => {
    try {
      const createdService = await createProject(newService);
      setServices([...services, createdService]);
      setNewService({ type: "", description: "", price: "" });
    } catch (error) {
      console.error("Error al crear el servicio:", error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const updatedService = await updateProject(id, updatedData);
      setServices(
        services.map((service) =>
          service._id === id ? updatedService : service
        )
      );
    } catch (error) {
      console.error("Error al actualizar el servicio:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      setServices(services.filter((service) => service._id !== id));
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
