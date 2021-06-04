import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedProducts = () => {

  return (
    <div style={{display: 'flex'}}>
      <RelatedProductCard />
      <RelatedProductCard />
      <RelatedProductCard />
      <RelatedProductCard />
    </div>
  );
};

export default RelatedProducts;