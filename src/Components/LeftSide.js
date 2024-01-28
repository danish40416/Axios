import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

const LeftSide = ({ onGenerateClick }) => {
  const handleGenerateClick = () => {
    onGenerateClick();
  };

  return (
    <div className='text-container position-relative'>
      <Image src={require('../images/abc.jpg')} className="design ms-5" alt="Design" />
      <div className="text">
        <span className="overlay-text position-absolute top-0 img-text">Get Your Design in </span>
        a Second
      </div>
      <div className="inputs flex-column d-flex justify-content-center align-items-center">
        <div>
          {[['bohemian', 'Scandinavian', 'new classic'], ['Room', 'Room1', 'Room2'], ['bohemian', 'Scandinavian', 'new classic'], ['Color', 'Color1', 'Color2']].map((options, index) => (
            <select key={index} className="home-inputs-dropdown">
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ))}
        </div>
        <div>
          <button className="generate-btn1 me-3 mt-4" onClick={handleGenerateClick}>
            <span className="button-text">Generate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
