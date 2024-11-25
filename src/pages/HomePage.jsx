import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/HomePage.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = () => {
    return (
        <div className="main-container">
            {/* Contenido centralizado */}
            <div className="content-container">
                {/* Sección de bienvenida */}
                <section id="welcome" className="welcome-section">
                    <h1>Zairi Fabricamos</h1>
                    <h2>Diseño Integral</h2>
                    <img 
                        src="/path-to-placeholder-image.jpg" 
                        alt="Imagen destacada" 
                        className="welcome-image" 
                    />
                </section>

                {/* Sección "Quienes Somos" */}
                <section id="about" className="about-section">
                    <h2>Quienes Somos</h2>
                    <p>
                        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi
                        intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure.
                    </p>
                </section>

                {/* Sección "Nuestros Proyectos" */}
                <section id="projects" className="projects-section">
                    <h2>Nuestros Proyectos</h2>
                    <div className="project-list">
                        {[1, 2, 3, 4, 5, 6].map((project) => (
                            <div className="project-item" key={project}>
                                <img 
                                    src="/path-to-project-placeholder.jpg" 
                                    alt={`Proyecto ${project}`} 
                                    className="project-image" 
                                />
                                <h3>Título</h3>
                                <p>Breve descripción del proyecto.</p>
                            </div>
                        ))}
                    </div>
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
