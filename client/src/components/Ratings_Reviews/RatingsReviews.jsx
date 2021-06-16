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
  const [allRatings, setAllRatings] = useState('');

  console.log(allRatings);

  const getAllReviews = () => {
    axios.get(`/reviews/?product_id=${id}&count=75`)
      .then(({data}) => {
        setReviewDetailData(data);
      });
  };

  useEffect(() => {
    setProductId(props.product_id);
    setData(props);
    setAllRatings(() => {
      return Number(props.ratings['1']) + Number(props.ratings['2']) + Number(props.ratings['3']) + Number(props.ratings['4']) + Number(props.ratings['5']);
    });
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
          allRatings={allRatings}
        />
      </div>
    </div>
  );
};

export default RatingsReviews;