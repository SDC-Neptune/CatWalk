import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';

const IndivReview = ({detail}) => {

  return (
    <div className='singleReview'>
      <div className='indivStar'><Stars number={detail.rating * 20}/></div>
      <div className='user'>{detail.reviewer_name}, {detail.date.slice(0, 10)}</div>
    </div>
  );

};

export default IndivReview;