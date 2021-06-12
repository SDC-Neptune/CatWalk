import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';
import Recommend from './Recommend.jsx';
import PicModal from './PicModal.jsx';

const IndivReview = ({detail}) => {
  const [recommend, setRecommend] = useState(detail.recommend ? true : false);
  const [isResponse, setIsResponse] = useState(detail.response ? true : false);
  const [helpful, setHelpful] = useState(Number(detail.helpfulness));
  const [noHelpful, setNoHelpful] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const dateTimeFormat = new Date(detail.date);


  return (
    <div className='singleReview'>
      <div className='srHeader'>
        <div className='indivStar'><Stars number={detail.rating * 20}/></div>
        <div className='user'>☑️ {detail.reviewer_name}, {dateTimeFormat.toDateString().slice(4)}</div>
      </div>

      <h2>{detail.summary}</h2>
      <p>
        {detail.body}
      </p>
      <div>{recommend && <Recommend/>}</div>
      <br></br>
      {isResponse && (<div className='response'>
        <b>Reponse:</b>
        <br></br>
        <br></br>
        {detail.response}
      </div>)}

      <br></br>
      <span className='helpful'> Helpful?
        <span>  <u onClick={() => { !disabled ? setHelpful(helpful + 1) : null; setDisabled(true); }}>Yes</u>({helpful})</span>
        <span>  <u onClick={() => { !disabled ? setNoHelpful(noHelpful + 1) : null; setDisabled(true); }}>No</u>({noHelpful})</span>
      </span>
      <span className='report'>Report</span>
    </div>
  );

};

export default IndivReview;