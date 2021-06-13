import React, { useState, useEffect } from 'react';


const PicModal = ({image, handleChange}) => {

  return (
    <div className='modal-overlay-reviews'>
      <div className='modal-reviews'>
        <button className='reviewButton' onClick={handleChange}>Close</button>
        <img src={image} alt='Product review image' height='700'/>
      </div>
    </div>
  );
};

export default PicModal;