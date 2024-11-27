import axios from "axios";

const API_URL = "http://localhost:5000/api/service"; // Cambia a la URL de tu backend

// Obtener todos los proyectos
export const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Retorna los datos de los proyectos
  } catch (error) {
    console.error("Error al obtener los proyectos:", error);
    throw new Error("No se pudieron obtener los proyectos");
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(API_URL, projectData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data; // Retorna el mensaje de éxito
  } catch (error) {
    console.error("Error al crear el proyecto:", error);
    throw new Error("No se pudo crear el proyecto");
  }
};

export const updateProject = async (projectId, projectData) => {
  try {
    const response = await axios.put(`${API_URL}/${projectId}`, projectData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data; // Retorna el mensaje de éxito
  } catch (error) {
    console.error("Error al actualizar el proyecto:", error);
    throw new Error("No se pudo actualizar el proyecto");
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await axios.delete(`${API_URL}/${projectId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data; // Retorna el mensaje de éxito
  } catch (error) {
    console.error("Error al eliminar el proyecto:", error);
    throw new Error("No se pudo eliminar el proyecto");
  }
};
