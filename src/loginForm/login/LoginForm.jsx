import React, { useState } from 'react';
import PasswordInput from '../passwordInput';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password) {
            setError('Password is required');
            return;
        }

        setError('');
        onLogin(password);
        navigate('/');
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="focus:ring-2 focus:ring-primary"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition duration-300"
                >
                    Sign In
                </button>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Don't have an account?</p>
                    <button
                        onClick={handleSignUpRedirect}
                        className="mt-2 text-primary hover:underline font-semibold"
                    >
                        Sign Up Here
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;