import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ArrowRight from './ArrowRight.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import RelatedProductAddToOutfitCard from './RelatedProductAddToOutfitCard.jsx';

const RelatedProductsCarousel = ({ title }) => {
  return (title === 'YOUR OUTFIT') ?
    (
      <>
        <h2>{title}</h2>
        <div className="rp-carousel">
          <ArrowLeft />
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
          <ArrowRight />
        </div>
      </>
    ) : (
      <>
        <h2>{title}</h2>
        <div className="rp-carousel">
          <ArrowLeft />
          <RelatedProductCard />
          <RelatedProductAddToOutfitCard />
          <ArrowRight />
        </div>
      </>
    );
};

export default RelatedProductsCarousel;