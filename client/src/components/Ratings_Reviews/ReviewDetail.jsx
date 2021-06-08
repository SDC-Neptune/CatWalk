import React from 'react';

const RatingsReviews = ({detail}) => {

  return (
    <div className='reviewDetail'>
      <h3>{detail.count} reviews, sorted by <span>relevance</span></h3>


    </div>
  );
};

export default RatingsReviews;