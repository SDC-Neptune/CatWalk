import React from 'react';
import axios from 'axios';


const BasicProductInfo = (props) => {

  const redirectToReviews = (e) => {
    e.preventDefault();
  };

  if (!props.productInfo) {
    return <div></div>;
  }

  return (
    <div className="basic-info">
      <div className="overview-rating">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
      <a href="" onClick={redirectToReviews}> Read all reviews</a>
      <h2>{`${props.productInfo.category}`.toUpperCase()}</h2>
      <h1>{props.productInfo.name}</h1>
    </div>
  );

};


export default BasicProductInfo;