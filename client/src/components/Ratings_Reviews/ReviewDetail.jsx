import React, { useState, useEffect } from 'react';
import IndivReview from './IndivReview.jsx';

const RatingsReviews = ({detail}) => {
  const [test, setTest] = useState(null);
  const [count, setCount] = useState(() => {
    if (detail.results.length <= 2) {
      return detail.results.map((item) => {
        return (
          <IndivReview key={item.review_id} detail={item}/>
        );
      });
    }
    if (detail.results.length > 2) {
      return detail.results.slice(0, 2).map((item) => {
        return (
          <IndivReview key={item.review_id} detail={item}/>
        );
      });
    }
  });

  const addReviews = () => {
    let toAdd = count.length;
    setCount(() => {
      return [...count, ...detail.results.slice(toAdd, (toAdd + 2)).map((item) => {
        return (
          <IndivReview key={item.review_id} detail={item}/>
        );
      })];
    });
  };


  return (
    <div className='reviewDetail'>
      <h3>{detail.count} reviews, sorted by <span><u>relevance</u> ⇓ </span></h3>
      <div className='allSingleReviews'>
        {count}
      </div>
      <button className='reviewButton' onClick={addReviews}>MORE REVIEWS</button><button className='reviewButton'>ADD A REVIEW + </button>
    </div>
  );
};

export default RatingsReviews;