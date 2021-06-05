import React from 'react';

const ArrowLeft = ({handlePrevClick}) => {
  return (
    <div className="arrow" onClick={handlePrevClick}>
      <i className="fa fa-angle-left fa-5x"></i>
    </div>
  );
};

export default ArrowLeft;