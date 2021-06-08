import React from 'react';
import IndivReview from './IndivReview.jsx';

const RatingsReviews = ({detail}) => {

  return (
    <div className='reviewDetail'>
      <h3>{detail.count} reviews, sorted by <span><u>relevance</u> ⇓ </span></h3>
      <div>
        {detail.results.map((item) => {
          return (
            <IndivReview key={item.review_id} detail={item}/>
          );
        })}
      </div>
      <button className='reviewButton'>MORE REVIEWS</button><button className='reviewButton'>ADD A REVIEW + </button>
    </div>
  );
};

export default RatingsReviews;