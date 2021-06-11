import React from 'react';

const ArrowRight = ({ handleNextClick, currentCard }) => {
  return (
    <div className="arrow" onClick={handleNextClick}>
      <i className={
        document.querySelectorAll('.rp .rp-card').length - currentCard <= 2
          ? 'arrow-no-show fa fa-angle-right fa-5x'
          : 'fa fa-angle-right fa-5x'
      }></i>
    </div>
  );
};

export default ArrowRight;