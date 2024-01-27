import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

const App = () => {
 

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <LeftSide />
          </Col>
          <Col md={6}>
            <RightSide
            
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
