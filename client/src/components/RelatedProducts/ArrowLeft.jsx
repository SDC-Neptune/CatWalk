import React from 'react';

const ArrowLeft = ({ handlePrevClick, currentCard, currentCardOutfit }) => {
  return (
    <div className="arrow" onClick={handlePrevClick} >
      <i className={
        currentCard === 1 ||
        currentCardOutfit === 1
          ? 'arrow-no-show fa fa-angle-left fa-5x'
          : 'fa fa-angle-left fa-5x'
      }></i>
    </div>
  );
};

export default ArrowLeft;