import React, { useState, useEffect } from 'react';
import { FaArrowUpFromBracket, FaHeart } from "react-icons/fa6";
import { FaShoppingCart, FaRegBookmark } from "react-icons/fa";
import { BiSolidDislike } from "react-icons/bi";

const RightSide = ({ showImages, generatedImages }) => {
  const imagesPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalImages = generatedImages.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  useEffect(() => {
    setCurrentPage(1); 
  }, [showImages]);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = generatedImages.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = currentImages.reduce((total, image) => total + (image.price || 0), 0);
    return totalPrice.toFixed(2); 
  };

  return (
    <div>
      <div className='right-side'>
        <div className="textarea" style={{ position: 'relative' }}>
          {showImages && currentImages.map((image, index) => (
              <img key={startIndex + index} src={image.imageURL}
                style={{ width: image.width, height: image.height, 
                  left: image.left, top: image.top, position: 'absolute',  }}
                alt={`Generated Image ${startIndex + index + 1}`} />
            ))}
        </div>
        <div className="next-previous d-flex justify-content-between ">
          <div className="icons d-flex fs-3">
            <BiSolidDislike />
            <FaHeart />
            <FaArrowUpFromBracket />
            <FaRegBookmark />
          </div>
          <div>
            <button className="previous-btn me-2" type="button" onClick={handlePreviousPage}> Previous </button>
            <button className="next-btn" type="button" onClick={handleNextPage}> Next </button>
          </div>
        </div>
        <div>
        <button className="generate-btn2 d-flex justify-content-between" type="button">
            <span>${calculateTotalPrice()}</span>
            <span><FaShoppingCart /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
