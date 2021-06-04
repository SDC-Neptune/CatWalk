import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ArrowRight from './ArrowRight.jsx';
import ArrowLeft from './ArrowLeft.jsx';

const RelatedProductsCarousel = () => {
  return (
    <div className="rp-carousel">
      <ArrowLeft />
      <RelatedProductCard />
      <RelatedProductCard />
      <RelatedProductCard />
      <ArrowRight />
    </div>
  );
};

export default RelatedProductsCarousel;