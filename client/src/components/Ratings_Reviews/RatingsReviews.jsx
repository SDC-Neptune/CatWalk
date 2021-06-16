import React, { useState, useEffect } from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewDetail from './ReviewDetail.jsx';
import axios from 'axios';


const RatingsReviews = ({props, productInfo}) => {
  if (!props) {
    return 'Still Loading';
  }
  const [data, setData] = useState(props);
  const [id, setProductId] = useState(props.product_id);
  const [reviewDetailData, setReviewDetailData] = useState();
  const [filter, setFilter] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const getAllReviews = () => {
    axios.get(`/reviews/?product_id=${id}`)
      .then(({data}) => {
        setReviewDetailData(data);
      });
  };

  useEffect(() => {
    setProductId(props.product_id);
    setData(props);
  }, [props]);

  useEffect(() => {
    getAllReviews();
  }, [id]);

  const triggerFilter = (e) => {
    let temp = Number(e.target.innerText.slice(0, 1));
    let tempFilter;
    setFilter(() => {
      if (filter.includes(temp)) {
        let indexSelect = filter.indexOf(temp);
        filter.splice(indexSelect, 1);
        tempFilter = [...filter];
        return tempFilter;
      } else {
        tempFilter = [...filter, temp];
        return tempFilter;
      }
    });
    setIsFiltered(() => {
      if (tempFilter.length === 0) {
        return false;
      }
      return true;
    });
  };

  const removeFilter = (e) => {
    setFilter([]);
    setIsFiltered(false);
  };

  return (
    <div className='ratings_reviews' id='ratings-reviews'>
      <h2>RATINGS & REVIEWS</h2>
      <div className='parentReview'>
        <ReviewSummary data={data}
          filter={filter}
          isFiltered={isFiltered}
          triggerFilter={triggerFilter}
          removeFilter={removeFilter}
        />
        <ReviewDetail detail={reviewDetailData}
          filter={filter}
          isFiltered={isFiltered}
          summaryData={data}
          productInfo={productInfo}
        />
      </div>
    </div>
  );
};

export default RatingsReviews;