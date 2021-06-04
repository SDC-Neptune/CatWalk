import React from 'react';
// import RelatedProductCard from './RelatedProductCard.jsx';
import RelatedProductsCarousel from './RelatedProductsCarousel.jsx';

const RelatedProducts = () => {

  return (
    <div>
      <RelatedProductsCarousel title='YOUR OUTFIT' />
      <RelatedProductsCarousel title='RELATED PRODUCTS' />
    </div>
  );
};

export default RelatedProducts;