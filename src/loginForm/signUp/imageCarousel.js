import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative w-1/2 flex items-center justify-center overflow-hidden bg-gray-200">
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded"
                onClick={handlePrevImage}
            >
                <FaArrowLeft />
            </button>
            <img
                src={images[currentImageIndex]}
                alt="Carousel"
                className="w-full h-auto max-h-[60vh] object-cover"
            />
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded"
                onClick={handleNextImage}
            >
                <FaArrowRight />
            </button>
            <div className="flex space-x-2 absolute bottom-4 w-full justify-center">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-500'} hover:bg-gray-800`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;