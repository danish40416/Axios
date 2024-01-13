import React, { useState, useEffect } from 'react';
import { Image, Spinner } from 'react-bootstrap'; 
import axios from 'axios';

export default function LeftSide() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleGenerateClick = async () => {
    setLoading(true); 
    try {
      const response = await axios.get('https://recommendation.decorist.ai:5000/api/v1/generate?style=bohemian&color=1&user_id=1', {
      
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
   
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
   
  }, []);

  return (
    <div className='text-container position-relative'>
      <Image src={require('../images/abc.jpg')} className="design ms-5" alt="Design" />
      <div className="text">
              <span className="overlay-text position-absolute top-0 img-text">Get Your Design in </span>
              a Second
            </div>
      <div className="inputs flex-column d-flex justify-content-center align-items-center">
        <div>
        <select className="home-inputs-dropdown">
                  <option value="bohemian">Bohemian</option>
                  <option value="Scandinavian">Scandinavian</option>
                  <option value="new classic">New Classic</option>
                </select>
                <select className="home-inputs-dropdown">
                  <option>Room</option><option>Room1</option>
                  <option>Room2</option>
                </select>
                <select className="home-inputs-dropdown">
                  <option value="bohemian">Budget</option>
                  <option value="Scandinavian">Budget1</option>
                  <option value="new classic">Budget1</option>
                </select>
                <select className="home-inputs-dropdown">
                  <option>Color</option><option>Color1</option>
                  <option>Color2</option>
                </select>
        </div>
        <div>
        <button className="generate-btn1 me-3 mt-4" onClick={handleGenerateClick} disabled={loading}>
            <div className="button-content">
              {loading && <Spinner animation="border" variant="light" size="sm" />}
              <span className="button-text">{loading ? ' Generating...' : 'Generate'}</span>
            </div>
          </button>
        </div>
      </div>
      {data && (
        <div className="result-container">
       
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
