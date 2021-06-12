import React, { useState, useEffect } from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewDetail from './ReviewDetail.jsx';
import axios from 'axios';


const RatingsReviews = ({productId}) => {
  const [data, setData] = useState();
  const [id, setProductId] = useState(productId);

  const [reviewDetailData, setReviewDetailData] = useState();

  const getAllReviewsMeta = () => {
    axios.get(`/reviews/meta/?product_id=${id}`)
      .then(({data}) => {
        setData(data);
      });
  };

  const getAllReviews = () => {
    axios.get(`/reviews/?product_id=${id}`)
      .then(({data}) => setReviewDetailData(data));
  };

  useEffect(() => {
    setProductId(`${productId}`);
  }, [productId]);

  useEffect(() => {
    getAllReviewsMeta();
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