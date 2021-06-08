import React, { useState, useEffect } from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewDetail from './ReviewDetail.jsx';
import axios from 'axios';


const RatingsReviews = ({productId}) => {
  const [data, setData] = useState({
    'product_id': '19089',
    'ratings': {
      '1': '100',
      '2': '1',
      '3': '30',
      '4': '0',
      '5': '0'
    },
    'recommended': {
      'false': '21',
      'true': '41'
    },
    'characteristics': {
      'Fit': {
        'id': 64059,
        'value': '5'
      },
      'Length': {
        'id': 64060,
        'value': '5'
      },
      'Comfort': {
        'id': 64061,
        'value': '5'
      },
      'Quality': {
        'id': 64062,
        'value': '5'
      }
    }});

  const getAllReviewsMeta = () => {
    axios.get(`/reviews/meta/?product_id=${productId}`)
      .then(({data}) => {
        setData(data);
      });
  };

  useEffect(() => {
    getAllReviewsMeta();
  }, []);

  return (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <ReviewSummary data={data}/>
      <ReviewDetail/>
    </div>
  );
};

export default RatingsReviews;