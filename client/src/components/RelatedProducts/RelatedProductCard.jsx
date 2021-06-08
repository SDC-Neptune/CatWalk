import React, { useState } from 'react';


const RelatedProductCard = ({
  item,
  setProductId,
  setModalOpen,
  goToNewProduct,
  setAllRelatedProductsDetails
}) => {

  const compareClickHandler = (e) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const newProductClickHandler = (e) => {
    goToNewProduct();
    setAllRelatedProductsDetails([]);
    setProductId(item.id);
  };

  return (
    <div title={item.name} className="rp-card" onClick={newProductClickHandler}>
      <div className="image-container">
        <img
          className="related-product-image"
          alt={item.name}
          src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
        />
        <i className="fas fa-star related-products-compare" onClick={compareClickHandler} ></i>
      </div>
      <div className="product-info">
        <h5 className="product-category">{item.category}</h5>
        <h3 className="product-name">{item.name}</h3>
        <p className="product-price">${item.default_price}</p>
        <div style={{display: 'flex', marginBottom: '15px'}}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductCard;