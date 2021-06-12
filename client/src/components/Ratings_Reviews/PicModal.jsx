import React, { useState, useEffect } from 'react';


const PicModal = ({image, handleChange}) => {

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='reviewButton' onClick={handleChange}>Close</button>
        <img src={image} alt='Product review image' />
      </div>
    </div>
  );
};

export default PicModal;