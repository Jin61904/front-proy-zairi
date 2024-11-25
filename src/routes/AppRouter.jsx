import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReviewPage from '../pages/ReviewPage';
import Header from '../components/shared/Header';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Footer from '../components/shared/Footer';
import QuotePage from '../pages/QuotePage';

const AppRouter = () => {
    return (
        <Router>
            <Header /> {/* Componente de encabezado, se renderiza fuera de las rutas */}
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Ruta para la página principal */}
                <Route path="/reviews" element={<ReviewPage />} /> {/* Ruta para la página de reseñas */}
                <Route path="/login" element={<LoginPage />} /> {/* Ruta para la página de reseñas */}
                <Route path="/register" element={<RegisterPage />} /> {/* Ruta para la página de registro */}
                <Route path="/quotes" element={<QuotePage />} /> {/* Ruta para la página de registro */}
            </Routes>
            <Footer/>
        </Router>
    );
};

export default AppRouter;

