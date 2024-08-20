import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from './passwordInput';

const SignUpForm = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="w-1/2 flex flex-col items-center justify-center p-8 relative bg-gray-100">
            <div className="absolute top-4 right-4 text-2xl font-bold">LOGO</div>
            <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                {/* First Name and Last Name */}
                <div className="flex space-x-4 mb-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="flex-1 p-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="flex-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                {/* Email and Phone Number */}
                <div className="flex space-x-4 mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 p-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="flex-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                {/* Password */}
                <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isVisible={passwordVisible}
                    onToggleVisibility={togglePasswordVisibility}
                    placeholder="Password"
                />
                {/* Confirm Password */}
                <PasswordInput
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isVisible={confirmPasswordVisible}
                    onToggleVisibility={toggleConfirmPasswordVisibility}
                    placeholder="Confirm Password"
                />
                {/* Checkbox and Terms */}
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="terms"
                        className="mr-2"
                    />
                    <label htmlFor="Terms" className="text-sm">
                        I agree to the
                        <Link to="/Terms" className="text-blue-500"> Terms of Service</Link> and
                        <Link to="/Privacy" className="text-blue-500"> Privacy Policy</Link>
                    </label>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Sign Up
                </button>
                <button
                    type="button"
                    onClick={handleLoginRedirect}
                    className="w-full p-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700"
                >
                    Login Here
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;