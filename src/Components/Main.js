import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import DATA from './data'; 

const App = () => {
  const moodboards = DATA.data.moodboards;
  const layouts = DATA.data.layout; 

  const findLayout = (moodTemplateID) =>
    layouts.find((layout) => layout.mood_Template_ID === moodTemplateID);

  const [generatedImages, setGeneratedImages] = useState([]);
  const [currentMoodboardIndex, setCurrentMoodboardIndex] = useState(0);
  const generateImagesForMoodboard = (index) => { 
    const moodboard = moodboards[index];
    const generatedImages = moodboard.Items.map((item, index) => {
      const layoutItem = findLayout(moodboard.moodboard_Template_ID).items.find( 
        (layoutItem) => layoutItem.category === item.category
      );
      return { imageURL: item.ImageURL, ...layoutItem, id: index + 1 };
    }).reverse();
    setGeneratedImages(generatedImages);
    setCurrentMoodboardIndex(index);
  };

  const handleGenerateClick = () => generateImagesForMoodboard(0);

  const handleNextClick = () => {
    const nextIndex = (currentMoodboardIndex + 1) % moodboards.length;
    generateImagesForMoodboard(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex = (currentMoodboardIndex - 1 + moodboards.length) % moodboards.length;
    generateImagesForMoodboard(previousIndex);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <LeftSide onGenerateClick={handleGenerateClick} currentMoodboardIndex={currentMoodboardIndex} />
          </Col>
          <Col md={6}>
            <RightSide
              showImages={true}
              generatedImages={generatedImages}
              handleNextClick={handleNextClick}
              handlePreviousClick={handlePreviousClick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
