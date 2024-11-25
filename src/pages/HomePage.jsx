import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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
                        src="/assets/imagen_principal.jpeg" 
                        alt="Imagen destacada" 
                        className="welcome-image" 
                    />
                </section>

            {/* Sección "Quienes Somos" */}
            <section id="about" className="about-section">
                <h2>Quienes Somos</h2>
                <p>
                    En Zairi Fabricamos, el arte de trabajar la madera es mucho más que una profesión: es una pasión que nos conecta con la tradición y nos impulsa hacia la innovación. Nuestro equipo combina la experiencia acumulada durante décadas con un enfoque contemporáneo, creando piezas que representan el equilibrio perfecto entre funcionalidad, diseño y durabilidad.
                    Desde muebles clásicos hasta diseños modernos, cada proyecto que realizamos es único. Nos enorgullece colaborar estrechamente con nuestros clientes para comprender sus necesidades, estilos y objetivos, entregando soluciones personalizadas que agregan valor a sus espacios. Además, nuestra dedicación a la calidad nos impulsa a utilizar únicamente materiales de primera, asegurando la resistencia y belleza de cada creación.
                    No solo fabricamos muebles; contamos historias a través de la madera. Cada veta y cada textura reflejan nuestro compromiso por ofrecer productos que trascienden generaciones y enriquecen la vida de quienes los poseen. Además, estamos comprometidos con la sostenibilidad, utilizando prácticas responsables que respetan el entorno natural.
                    En Zairi Fabricamos, entendemos que cada cliente tiene un sueño, y nuestra misión es convertirlo en realidad. Desde el diseño conceptual hasta el último toque, nuestro proceso garantiza que cada detalle sea perfecto.    
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
