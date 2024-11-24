import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="container">
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
                                alt={Proyecto ${project}} 
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
                <div className="contact-icons">
                    <img src="/path-to-location-icon.png" alt="Ubicación" />
                    <img src="/path-to-email-icon.png" alt="Email" />
                    <img src="/path-to-phone-icon.png" alt="Teléfono" />
                </div>
            </section>
        </div>
    );
};

export default HomePage;