import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Stars from '../Ratings_Reviews/Stars.jsx';

const BasicProductInfo = (props) => {

  if (!props.productInfo || !props.productReviews) {
    return <div></div>;
  }

  const [totalStars, setTotalStars] = useState(null);
  const [rating, setRating] = useState(null);
  const redirectToReviews = (e) => {
    e.preventDefault();
    var element = document.getElementById('ratings-reviews');
    element.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    setRating(Math.round((((1 * Number(props.productReviews.ratings['1']) || null)) + (2 * Number(props.productReviews.ratings['2']) || null) + (3 * Number(props.productReviews.ratings['3']) || null) + (4 * Number(props.productReviews.ratings['4']) || null) + (5 * Number(props.productReviews.ratings['5'])) || null) / totalStars * 10) / 10);

    setTotalStars(Number(props.productReviews.ratings['5'] || null) + Number(props.productReviews.ratings['4'] || null) + Number(props.productReviews.ratings['3'] || null) + Number(props.productReviews.ratings['2'] || null) + Number(props.productReviews.ratings['1'] || null));
  });

  return (
    <div className="basic-info">
      {Object.keys(props.productReviews.ratings).length > 0 &&
      <div>
        <div className='overviewStar'><Stars number={(rating) * 20}/></div>
        <a href="" onClick={redirectToReviews}> Read all reviews</a>
      </div>}
      <h2>{`${props.productInfo.category}`.toUpperCase()}</h2>
      <h1>{props.productInfo.name}</h1>
    </div>
  );

};


export default BasicProductInfo;