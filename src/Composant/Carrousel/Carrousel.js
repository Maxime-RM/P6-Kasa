import React, { useState } from 'react';
import HousingAds from '../../housing-ads.json';
import "./Carrousel.css";
import VectorR from '../../assets/VectorR.svg';
import VectorL from '../../assets/VectorL.svg';

function Slider() {
  const url = window.location.href;
  const urlPart = url.split('/');
  const id = urlPart[urlPart.length - 1];
  const logement = HousingAds.find(ad => ad.id === id);
  const slides = logement.pictures;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      {slides.length > 0 && <img className='carousel-slide' src={slides[currentIndex]} alt={`Slide ${currentIndex + 1} sur ${slides.length}`}/>}
      
      {slides.length > 1 && (
        <div className="carousel-controls">
          <button className="carousel-button" onClick={prevSlide}>
            <img src={VectorL} alt="Previous Slide" />
          </button>
          <span className="slide-counter">{`${currentIndex + 1}/${slides.length}`}</span>
          <button className="carousel-button" onClick={nextSlide}>
            <img src={VectorR} alt="Next Slide" />
          </button>
        </div>
      )}   
    </div>
    
  );
}

export default Slider;
