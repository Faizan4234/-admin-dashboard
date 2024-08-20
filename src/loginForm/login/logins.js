import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(password);
        navigate('/');
        // Handle redirection in Starter based on authentication
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl mb-4">Login</h2>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Login</button>
                <button
                    type="button"
                    onClick={handleSignUpRedirect}
                    className="w-full p-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700"
                >
                    Sign Up Here
                </button>
            </form>
        </div>
    );
};

export default Login;