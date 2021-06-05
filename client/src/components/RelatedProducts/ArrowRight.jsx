import React from 'react';

const ArrowRight = ({handleNextClick}) => {
  return (
    <div className="arrow" onClick={handleNextClick}>
      <i className="fa fa-angle-right fa-5x"></i>
    </div>
  );
};

export default ArrowRight;