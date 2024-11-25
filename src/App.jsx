import React from 'react';
import AppRouter from './routes/AppRouter'; // Enrutador principal
import 'leaflet/dist/leaflet.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './styles/HomePage.css'; // Estilos globales o de la homepage

const App = () => {
    return (
        <div>
            <AppRouter /> {/* Renderiza las rutas definidas */}
        </div>
    );
};

export default App;