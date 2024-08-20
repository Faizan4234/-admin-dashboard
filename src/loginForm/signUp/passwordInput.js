import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ value, onChange, isVisible, onToggleVisibility, placeholder }) => {
    return (
        <div className="relative mb-4">
            <input
                type={isVisible ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <button
                type="button"
                onClick={onToggleVisibility}
                className="absolute inset-y-0 right-2 flex items-center"
            >
                {isVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
};

export default PasswordInput;