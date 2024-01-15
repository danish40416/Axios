import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

const App = () => {
  const [showImages, setShowImages] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleGenerateClick = (images) => {
    setGeneratedImages(images);
    setShowImages(true);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <LeftSide onGenerateClick={handleGenerateClick} />
          </Col>
          <Col md={6}>
            <RightSide showImages={showImages} generatedImages={generatedImages} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
