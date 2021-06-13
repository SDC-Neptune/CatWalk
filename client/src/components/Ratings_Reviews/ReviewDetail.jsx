import React, { useState, useEffect } from 'react';
import IndivReview from './IndivReview.jsx';

const RatingsReviews = ({detail}) => {
  if (!detail) {
    return 'Still loading';
  }
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

  useEffect(() => {
    setMoreReview(detail.results.length === count.length ? false : true);
    setNoReview(detail.results.length > 0 ? false : true);
  }, [count]);

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

  return (
    <div className='reviewDetail'>
      <h3>{detail.count} reviews, sorted by
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
      </h3>
      <div className='allSingleReviews'>
        {noReview && <button className='reviewButton'>ADD A REVIEW + </button>}
        {count}
      </div>
      {moreReview && <button className='reviewButton' onClick={addReviews} >MORE REVIEWS</button>}
      {isReview && <button className='reviewButton'>ADD A REVIEW + </button>}
    </div>
  );
};

export default RatingsReviews;