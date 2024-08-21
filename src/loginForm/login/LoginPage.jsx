import React from 'react';
import LoginForm from './LoginForm';
import LogoFaizan from '../../assets/logo/logoFaizan';

const LoginPage = ({ onLogin }) => {
    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <LogoFaizan />
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <LoginForm onLogin={onLogin} />
            </div>
        </div>
    );
};

export default LoginPage;