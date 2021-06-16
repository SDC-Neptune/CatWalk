import React, { useState, useEffect } from 'react';
import IndivReview from './IndivReview.jsx';
import NewReviewPopUp from './NewReviewPopUp.jsx';

const ReviewDetail = ({detail, filter, isFiltered, summaryData, productInfo, allRatings}) => {
  if (!detail) {
    return 'Still loading';
  }
  const [moreReview, setMoreReview] = useState(detail.results.length > 2 ? true : false);
  const [noReview, setNoReview] = useState(detail.results.length === 0 ? true : false);
  const [isReview, setIsReview] = useState(detail.results.length > 0 ? true : false);
  const [sorted, setSorted] = useState('relevance');
  const [newReview, setNewReview] = useState(false);
  const [filterReviews, setFilterReviews] = useState();

  const loadReviews = () => {
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
  };

  const [count, setCount] = useState(loadReviews());

  useEffect(() => {
    setCount(loadReviews());
  }, [detail]);

  useEffect(() => {
    setMoreReview(detail.results.length === count.length ? false : true);
    setNoReview(detail.results.length > 0 ? false : true);
  }, [count]);

  useEffect(() => {
    setFilterReviews(() => {
      if (isFiltered) {
        return count.map((item) => {
          if (filter.includes(item.props.detail.rating)) {
            return item;
          }
          return null;
        });
      }
    });
  }, [filter, count]);

  const sortBySelect = (tempCount = count, value = sorted) => {
    let newSort = [...tempCount];

    if (value === 'helpful') {
      newSort.sort((a, b) => {
        return b.props.detail.helpfulness - a.props.detail.helpfulness;
      });
      setCount(newSort);
    }
    if (value === 'newest') {
      newSort.sort((a, b) => {
        a = new Date(a.props.detail.date.slice(0, 10));
        b = new Date(b.props.detail.date.slice(0, 10));
        return b - a;
      });
      setCount(newSort);
    }
    if (value === 'relevance') {
      newSort.sort((a, b) => {
        let aDate = new Date(a.props.detail.date.slice(0, 10));
        let bDate = new Date(b.props.detail.date.slice(0, 10));

        if (JSON.stringify(bDate) === JSON.stringify(aDate)) {
          return b.props.detail.helpfulness - a.props.detail.helpfulness;
        }
        return bDate - aDate;
      });
      setCount(newSort);
    }
  };

  useEffect(() => {
    sortBySelect();
  }, []);

  const addReviews = () => {
    let tempCount;
    let toAdd = count.length;
    setCount(() => {
      tempCount = [...count, ...detail.results.slice(toAdd, (toAdd + 2)).map((item) => {
        return (
          <IndivReview key={item.review_id} detail={item}/>
        );
      })];
      return tempCount;
    });
    sortBySelect(tempCount);
  };

  const changeSort = (e) => {
    setSorted(e.target.outerText);
    let temp = e.target.outerText;
    sortBySelect(count, temp);
  };

  const addNewReview = (e) => {
    setNewReview(true);
  };

  const showModal = (e) => {
    setNewReview(!newReview);
  };

  return (
    <div className='reviewDetail'>
      <div className='singleReviewTitle'>{allRatings || 0} reviews, sorted by
        <div className='dropdown'>
          <button className='dropdownbtn'>
            <u>{sorted}</u>
          </button>
          <div className='dropdown-content' >
            <div onClick={changeSort}>relevance</div>
            <div onClick={changeSort}>helpful</div>
            <div onClick={changeSort}>newest</div>
          </div>
           ⇓
        </div>
      </div>
      <div className='allSingleReviews'>
        {newReview && (<NewReviewPopUp
          props={detail}
          handleChange={showModal}
          summaryData={summaryData}
          productInfo={productInfo}
        />)}
        {!isFiltered && count}
        {isFiltered && filterReviews}
      </div>
      {moreReview && <button className='reviewButton' onClick={addReviews} >MORE REVIEWS</button>}
      {isReview && <button className='reviewButton' onClick={addNewReview}>ADD A REVIEW + </button>}
      {newReview && (<NewReviewPopUp
        props={detail}
        handleChange={showModal}
        summaryData={summaryData}
        productInfo={productInfo}
      />)}
    </div>
  );
};

export default ReviewDetail;