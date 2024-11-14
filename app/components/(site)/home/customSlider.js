'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const CustomSlider = ({ slides, autoPlay = false, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (autoPlay) {
            const timer = setInterval(goToNextSlide, interval);
            return () => clearInterval(timer); // Cleanup interval on unmount
        }
    }, [autoPlay, interval]);

    useEffect(() => {
        // Move the slider-wrapper to show the current slide
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return (
        <div className='hero-pro'>
            <div className="slider-container">
                <button className="slider-button prev" onClick={goToPrevSlide}>
                    &#9664;
                </button>
                <div className="slider-wrapper" ref={slideRef}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${
                                index === currentIndex ? 'active' : 'inactive'
                            }`}
                        >
                            <Image 
                                width={400} 
                                height={400} 
                                src={'/images/home/team.png'} 
                                alt={slide.title} 
                                className='h-auto w-full' 
                            />
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="slider-button next" onClick={goToNextSlide}>
                    &#9654;
                </button>
            </div>
        </div>
    );
};

export default CustomSlider;
