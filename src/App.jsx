import React from 'react';
import AppRouter from './routes/AppRouter'; // Enrutador principal
import 'leaflet/dist/leaflet.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './styles/HomePage.css'; // Estilos globales o de la homepage
import UserProvider from './context/UserContext';

const App = () => {
    return (
        <div>
            <UserProvider>
            <AppRouter /> {/* Renderiza las rutas definidas */}
            </UserProvider>
        </div>
    );
};

export default App;