import React from 'react';

const ArrowRight = ({ handleNextClick, currentCard, currentCardOutfit }) => {

  const addCardLength = document.querySelectorAll('.yo .add-to-outfit-card');
  const outfitCardLength = document.querySelectorAll('.yo .yo-card');

  return (
    <div className="arrow" onClick={handleNextClick}>
      <i className={
        document.querySelectorAll('.rp .rp-card').length - currentCard <= 2
        // || (document.querySelectorAll('.yo .card-container').children.length - currentCardOutfit) <= 2
          ? 'arrow-no-show fa fa-angle-right fa-5x'
          : 'fa fa-angle-right fa-5x'
      }></i>
    </div>
  );
};

export default ArrowRight;