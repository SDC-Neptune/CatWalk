import React from 'react';


const YourOutfitCard = ({ item, outfitList, setOutfitList }) => {

  const removeClickHandler = (e) => {
    e.stopPropagation();
    const name = e.target.getAttribute('name');
    setOutfitList(outfitList.filter(item => item.name !== name));
  };

  return (
    <div title={item.name} className="yo-card">
      <div className="image-container">
        <img
          className="related-product-image"
          src={item.img ? item.img : ''}
          alt={item.name}
          width="300"
          height="400"
        />
        <i name={item.name} className="fas fa-ban related-products-compare" onClick={removeClickHandler}></i>
      </div>
      <div className="product-info">
        <h5 className="product-category">{item.category.toUpperCase()}</h5>
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