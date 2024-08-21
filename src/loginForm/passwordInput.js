// passwordInput.js
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ value, onChange, isVisible, onToggleVisibility, placeholder, className }) => {
  return (
    <div className="relative">
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pr-12 ${className}`}
        required
      />
      <button
        type="button"
        onClick={onToggleVisibility}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
        aria-label={isVisible ? 'Hide password' : 'Show password'}
      >
        {isVisible ? (
          <FaEyeSlash className="w-5 h-5" />
        ) : (
          <FaEye className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
