import React from 'react';
import IndivReview from './IndivReview.jsx';

const RatingsReviews = ({detail}) => {

  return (
    <div className='reviewDetail'>
      <h3>{detail.count} reviews, sorted by <span>relevance</span></h3>
      <div>
        {detail.results.map((item) => {
          return (
            <IndivReview key={item.review_id} detail={item}/>
          );
        })}
      </div>


    </div>
  );
};

export default RatingsReviews;