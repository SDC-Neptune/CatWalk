import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';
import Recommend from './Recommend.jsx';

const IndivReview = ({detail}) => {
  const [recommend, setRecommend] = useState(detail.recommend ? true : false);
  const dateTimeFormat = new Date(detail.date);


  return (
    <div className='singleReview'>
      <div className='srHeader'>
        <div className='indivStar'><Stars number={detail.rating * 20}/></div>
        <div className='user'>☑️ {detail.reviewer_name}, {dateTimeFormat.toDateString().slice(4)}</div>
      </div>

      <h3>{detail.summary}</h3>
      <p>
        {detail.body}
      </p>
      <div>{recommend && <Recommend/>}</div>
      <br></br>
      <span className='helpful'>Helpful? <u>Yes</u> ({detail.helpfulness}) </span> <span className='report'>Report</span>
    </div>
  );

};

export default IndivReview;