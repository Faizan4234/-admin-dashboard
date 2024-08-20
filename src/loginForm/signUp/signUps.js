import React from 'react';
import ImageCarousel from './imageCarousel';
import SignUpForm from './signUpForm';

const images = ['/images/image1.jpg', '/images/image2.jpg'];

const SignUp = () => {
    return (
        <div className="flex h-screen">
            {/* Left Side: Carousel */}
            <ImageCarousel images={images} />

            {/* Right Side: Sign-up Form */}
            <SignUpForm />
        </div>
    );
};

export default SignUp;