import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReviewsPage from '../pages/ReviewPage';
import Header from '../components/shared/Header';

const AppRouter = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
