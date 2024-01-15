import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import DATA from './data';

const LeftSide = ({ onGenerateClick }) => {
  const moodboards = DATA.data.moodboards;
  const layouts = DATA.data.layout;
  const [showImages, setShowImages] = useState(false);

  const findLayout = (moodTemplateID) => layouts.find((layout) => layout.mood_Template_ID === moodTemplateID);

  const handleGenerateClick = () => {
    const generatedImages = moodboards.flatMap((moodboard) =>
      moodboard.Items.map((item) => {
        const layoutItem = findLayout(moodboard.moodboard_Template_ID).items.find((layoutItem) => layoutItem.category === item.category);
        return { imageURL: item.ImageURL, ...layoutItem };
      })
    );

    onGenerateClick(generatedImages);
    setShowImages(true);
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
