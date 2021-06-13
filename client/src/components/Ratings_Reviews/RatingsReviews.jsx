import React, { useState, useEffect } from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewDetail from './ReviewDetail.jsx';
import axios from 'axios';


const RatingsReviews = ({props}) => {
  if (!props) {
    return 'Still Loading';
  }
  const [data, setData] = useState(props);
  const [id, setProductId] = useState(props.product_id);
  const [reviewDetailData, setReviewDetailData] = useState();

  const getAllReviews = () => {
    axios.get(`/reviews/?product_id=${id}`)
      .then(({data}) => setReviewDetailData(data));
  };

  useEffect(() => {
    getAllReviews();
  }, [id]);

  return (
    <div className='ratings_reviews' id='ratings-reviews'>
      <h2>RATINGS & REVIEWS</h2>
      <div className='parentReview'>
        <ReviewSummary data={data}/>
        <ReviewDetail detail={reviewDetailData}/>
      </div>
    </div>
  );
};

export default RatingsReviews;