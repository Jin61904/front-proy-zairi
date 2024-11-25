import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/projectService'; // Importar el servicio
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = () => {
    const [projects, setProjects] = useState([]); // Estado para los proyectos
    const [loading, setLoading] = useState(true); // Estado de carga

    // Obtener los proyectos desde el backend
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data); // Actualizar el estado con los proyectos
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false); // Finalizar la carga
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="main-container">
            <div className="content-container">
                {/* Sección de bienvenida */}
                <section id="welcome" className="welcome-section">
                    <h1>Zairi Fabricamos</h1>
                    <h2>Diseño Integral</h2>
                    <img 
                        src="/assets/imagen_principal.jpeg" 
                        alt="Imagen destacada" 
                        className="welcome-image" 
                    />
                </section>

                {/* Sección "Quienes Somos" */}
                <section id="about" className="about-section">
                    <h2>Quienes Somos</h2>
                    <p>
                        En Zairi Fabricamos, el arte de trabajar la madera es mucho más que una profesión...
                    </p>
                </section>

                {/* Sección "Nuestros Proyectos" */}
                <section id="projects" className="projects-section">
                    <h2>Nuestros Proyectos</h2>
                    {loading ? (
                        <p>Cargando proyectos...</p>
                    ) : (
                        <div className="project-list">
                            {projects.map((project) => (
                                <div className="project-item" key={project.id}>
                                    <img 
                                        src={`project-${project}`} 
                                        alt={`Proyecto ${project.title}`} 
                                        className="project-image" 
                                    />
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Sección de contacto */}
                <section id="contact" className="contact-section">
                    <h2>Contáctanos</h2>
                    <div className="contact-location">
                        <MapContainer
                            center={[4.573029674598277, -74.15135516374959]}
                            zoom={13}
                            style={{ height: "150px", width: "100%", borderRadius: "10px" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[4.573029674598277, -74.15135516374959]}>
                                <Popup>
                                    Aquí estamos ubicados.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Calle # - #</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>****@****.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <span>###########</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
