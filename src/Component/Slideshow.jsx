import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Slideshow.css";
import { Link } from "react-router-dom";

const images = [
  "https://assets.vogue.com/photos/5f74f7d208fdcc6598c7bb75/master/w_1920,c_limit/_CIK0894.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/annabel-rosendahl-tine-andrea-wearing-green-checkered-news-photo-1660038334.jpg",
  "https://s1.aptocdn.com/www.fashionchingu.com/wp-content/uploads/2023/03/Fashion-Clothing-Feature-Image.jpg",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      {/* Slideshow Wrapper */}
      <div
        className="slideshow-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slideshow-image"
          />
        ))}
      </div>

      {/* Slideshow Content */}
      <div className="slideshow-content">
        <h2 style={{ color: 'white' }}>Unleash Your Style</h2>
        <h1 style={{ color: 'white' }}>Elevate Your Fashion Game</h1>
        <Link to="/shop" className="slideshow-button">Shop the Trend</Link>
      </div>


      {/* Left & Right Controls */}
      <div className="slideshow-controls">
        <button onClick={prevSlide} aria-label="Previous Slide">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} aria-label="Next Slide">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
