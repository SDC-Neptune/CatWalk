import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewDetail from './ReviewDetail.jsx';

const RatingsReviews = ({productId}) => {

  return (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <ReviewSummary id={productId}/>
      <ReviewDetail/>
    </div>
  );
};

export default RatingsReviews;