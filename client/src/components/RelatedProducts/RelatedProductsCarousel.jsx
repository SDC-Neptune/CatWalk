import React, { useState } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ArrowRight from './ArrowRight.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import RelatedProductAddToOutfitCard from './RelatedProductAddToOutfitCard.jsx';

const RelatedProductsCarousel = ({ title, setModalOpen }) => {
  const [currentcard, setCurrentCard] = useState(1);

  // document.querySelectorAll('.rp .rp-card') will be the length of the relatedproducts state array

  const handleNextClick = () => {
    console.log(document.querySelectorAll('.rp .rp-card').length);
    if (document.querySelectorAll('.rp .rp-card').length - currentcard > 2) {
      document.querySelectorAll('.rp .rp-card').forEach(item => (item.style.transform = `translateX(-${317 * currentcard}px)`, item.style.transitionDuration = '0.5s'));
      setCurrentCard(currentcard + 1);
    }
  };

  const handlePrevClick = () => {
    console.log('Prev product will appear');
    if (currentcard !== 1) {
      document.querySelectorAll('.rp .rp-card').forEach(item => (item.style.transform = `translateX(-${317 * (currentcard - 2)}px)`, item.style.transitionDuration = '0.5s'));
      setCurrentCard(currentcard - 1);
    }
  };

  return (title !== 'YOUR OUTFIT') ?
    (
      <>
        <h2>{title}</h2>
        <div className="rp-carousel rp">
          <ArrowLeft handlePrevClick={handlePrevClick} />
          <div className="card-container">
            <RelatedProductCard setModalOpen={setModalOpen}/>
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
          </div>
          <ArrowRight handleNextClick={handleNextClick} />
        </div>
      </>
    ) : (
      <>
        <h2>{title}</h2>
        <div className="rp-carousel">
          <ArrowLeft handlePrevClick={handlePrevClick} />
          <div className="card-container">
            <RelatedProductCard />
            <RelatedProductAddToOutfitCard />
          </div>
          <ArrowRight handleNextClick={handleNextClick} />
        </div>
      </>
    );
};

export default RelatedProductsCarousel;