import React, { useState, useEffect } from 'react';
import Stars from '../Ratings_Reviews/Stars.jsx';

const RelatedProductCard = ({
  item,
  featureData,
  setProductId,
  setModalOpen,
  setCompareProd,
  setFeatureData,
}) => {

  const compareClickHandler = (e) => {
    e.stopPropagation();
    setCompareProd(e.target.title);
    setModalOpen(true);
  };

  const newProductClickHandler = (e) => {
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
          width="300"
          height="400"
        />
        <i className="fas fa-star related-products-compare" title={item.id} onClick={compareClickHandler} ></i>
      </div>
      <div className="product-info">
        <h5 className="product-category">{item.category}</h5>
        <h3 className="product-name">{item.name}</h3>
        <p className="product-price">
          {item.currentPrice !== null ? '$' + item.currentPrice : '$' + item.originalPrice}
          <span className="original-price-related-product">
            {
              (item.currentPrice === null || parseInt(item.originalPrice) < parseInt(item.currentPrice))
                ? ''
                : ' $' + item.originalPrice}
          </span>
        </p>
        <div style={{display: 'flex', marginBottom: '15px'}}>
          <Stars number={(item.ratings) * 20}/>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductCard;