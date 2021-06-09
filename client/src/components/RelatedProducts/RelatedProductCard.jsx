import React, { useState } from 'react';

const RelatedProductCard = ({
  item,
  featureData,
  setProductId,
  setModalOpen,
  setCompareProd,
  setFeatureData,
  setAllRelatedProductsDetails
}) => {

  const compareClickHandler = (e) => {
    e.stopPropagation();
    setCompareProd(e.target.title);
    setModalOpen(true);
  };

  const newProductClickHandler = (e) => {
    setAllRelatedProductsDetails([]);
    setFeatureData([]);
    setCompareProd('');
    setProductId(item.id);
  };

  return (
    <div title={item.name} className="rp-card" onClick={newProductClickHandler}>
      <div className="image-container">
        <img
          className="related-product-image"
          alt={item.name}
          src={item.img ? item.img : ''}
        />
        <i className="fas fa-star related-products-compare" title={item.id} onClick={compareClickHandler} ></i>
      </div>
      <div className="product-info">
        <h5 className="product-category">{item.category}</h5>
        <h3 className="product-name">{item.name}</h3>
        <p className="product-price">
          ${item.originalPrice}
          <span className="original-price-related-product">
            {item.currentPrice !== null ? '$' + item.currentPrice : ''}
          </span>
        </p>
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