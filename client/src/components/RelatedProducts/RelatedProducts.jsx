import React, { useState } from 'react';
import RelatedProductsCarousel from './RelatedProductsCarousel.jsx';
import RPModal from './RPModal.jsx';

const RelatedProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <RPModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <RelatedProductsCarousel title='RELATED PRODUCTS' setModalOpen={setModalOpen}/>
      <RelatedProductsCarousel title='YOUR OUTFIT' />
    </div>
  );
};

export default RelatedProducts;