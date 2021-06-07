import React from 'react';


const YourOutfitCard = () => {

  const removeClickHandler = () => {
    console.log('remove me');
  };

  return (
    <div className="yo-card">
      <div className="image-container">
        <img className="related-product-image" src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80" />
        <i className="fas fa-ban related-products-compare" onClick={removeClickHandler}></i>
      </div>
      <div className="product-info">
        <h5 className="product-category">JACKETS</h5>
        <h3 className="product-name">Camo Onesie</h3>
        <p className="product-price">$125</p>
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

export default YourOutfitCard;