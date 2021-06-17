import React, { useState, useEffect } from 'react';
import PicModal from './PicModal.jsx';


const ReviewPics = ({image}) => {
  const [showImage, setShowImage] = useState(false);

  if (!image) {
    return null;
  }

  if (image.includes('placeholder')) {
    return null;
  }

  if (image.includes('blob')) {
    return null;
  }

  const showModal = (e) => {
    setShowImage(!showImage);
  };

  return (
    <div onClick={showModal} className='smallThumbs'>
      {showImage && (<PicModal image={image} handleChange={showModal}/>)}
      <img src={image} alt='Product review image' width="60" height="60"/>
    </div>
  );
};

export default ReviewPics;