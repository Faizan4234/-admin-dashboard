import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './signUp/signUps';
import LoginPage from './login/LoginPage';
import Terms from '../pages/term';
import Privacy from '../pages/privacy';
import App from '../App';

const BrowseRoot = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (password) => {
        if (password === 'faizan') {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <Routes>
            {isAuthenticated ? (
                <Route path="/*" element={<App onLogout={handleLogout} />} />
            ) : (
                <>
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
};

export default BrowseRoot;
