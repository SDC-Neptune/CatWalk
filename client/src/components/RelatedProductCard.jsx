import React from 'react';

const RelatedProductCard = () => {
  return (
    <div>
      <div className="image-container">
        <img className="related-product-image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
        <i className="far fa-star related-products-compare"></i>
      </div>
      <div className="product-info">
        <h5 className="product-category">JACKETS</h5>
        <h3 className="product-name">Camo Onesie</h3>
        <p className="product-price">$125</p>
      </div>
    </div>
  );
};

export default RelatedProductCard;