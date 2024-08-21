import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoFaizan from '../../assets/logo/logoFaizan';
import image3 from '../../assets/images/image3.jpg';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(password);
        navigate('/');
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className='relative min-h-screen'>
            <div className="absolute inset-0 z-[-1] bg-cover bg-center" style={{ backgroundImage: `url(${image3})` }}></div>
            <LogoFaizan />
            
            <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg relative z-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-bounce">Welcome Back</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account? <br />
                            <span className="text-xs">Sign up to access more features.</span>
                        </p>
                        <button
                            onClick={handleSignUpRedirect}
                            className="mt-2 text-primary hover:underline font-semibold"
                        >
                            Sign Up Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;