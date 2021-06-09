import React, { useState, useEffect } from 'react';
import IndivReview from './IndivReview.jsx';

const RatingsReviews = ({detail}) => {
  const [moreReview, setMoreReview] = useState(detail.results.length > 2 ? true : false);
  const [noReview, setNoReview] = useState(detail.results.length === 0 ? true : false);
  const [isReview, setIsReview] = useState(detail.results.length > 0 ? true : false);
  const [sorted, setSorted] = useState('relevance');

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

  useEffect(() => {
    setMoreReview(detail.results.length === count.length ? false : true);
    setNoReview(detail.results.length > 0 ? false : true);

  }, [count]);

  return (
    <div className='reviewDetail'>
      <h3>{detail.count} reviews, sorted by
        <div className='dropdown'>
          <button className='dropdownbtn'>
            <u>{sorted}</u>
          </button>
          <div className='dropdown-content'>
            <div>relevance</div>
            <div>helpful</div>
            <div>newest</div>
          </div>
           ⇓
        </div>
      </h3>
      <div className='allSingleReviews'>
        {noReview && <button className='reviewButton'>ADD A REVIEW + </button>}
        {count}
      </div>
      {moreReview && <button className='reviewButton' onClick={addReviews}>MORE REVIEWS</button>}
      {isReview && <button className='reviewButton'>ADD A REVIEW + </button>}
    </div>
  );
};

export default RatingsReviews;