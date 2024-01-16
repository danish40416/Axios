import React from 'react';
import { FaHeart } from "react-icons/fa6";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidDislike } from "react-icons/bi";

export default function RightSide({ showImages, generatedImages }) {
  return (
    <div>
      <div className='right-side'>
        <div className="textarea" style={{ position: 'relative' }}>
          {showImages &&
            generatedImages.map((image, index) => (
              <img
                key={index}
                src={image.imageURL}
                style={{
                  width: image.width,
                  height: image.height,
                  left: image.left,
                  top: image.top,
                  position: 'absolute',
                }}
                alt={`Generated Image ${index + 1}`}
              />
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
            <button className="previous-btn me-2" type="button">Previous </button>
            <button className="next-btn" type="button">Next</button>
          </div>
        </div>
        <div>
          <button className="generate-btn2 " type="button">
            <span className='cart'><FaShoppingCart /></span>
          </button>
        </div>
      </div>
    </div>
  );
}
