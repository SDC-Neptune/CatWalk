import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';
import Recommend from './Recommend.jsx';
import ReviewPics from './ReviewPics.jsx';
import axios from 'axios';

const IndivReview = ({detail}) => {
  console.log(detail);
  const [recommend, setRecommend] = useState(detail.recommend ? true : false);
  const [isResponse, setIsResponse] = useState(detail.response ? true : false);
  const [helpful, setHelpful] = useState(Number(detail.helpfulness));
  const [noHelpful, setNoHelpful] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [repDisabled, setRepDisabled] = useState(false);
  const dateTimeFormat = new Date(detail.date);

  const handleHelpfulClick = () => {
    setNoHelpful(noHelpful + 1);
    axios.put(`/reviews/${detail.review_id}/helpful`)
      .then(res => {
        console.log('SUCCESS', res);
      })
      .catch(res => {
        console.log('FAILURE', res);
      });
  };

  const handleReportClick = () => {
    axios.put(`/reviews/${detail.review_id}/report`)
      .then(res => {
        console.log('SUCCESS', res);
      })
      .catch(res => {
        console.log('FAILURE', res);
      });
  };


  return (
    <div className='singleReview'>
      <div className='srHeader'>
        <div className='indivStar'><Stars number={detail.rating * 20}/></div>
        <div className='user'>☑️ {detail.reviewer_name}, {dateTimeFormat.toDateString().slice(4)}</div>
      </div>

      <div className='indivReviewTitle'>{detail.summary}</div>
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
      <div className='stackPics'>
        {detail.photos.map(image => {
          return (
            <ReviewPics key={image.id} image={image.url}/>
          );
        })}
      </div>
      <br></br>
      <span className='helpful'> Helpful?
        <span>  <u onClick={() => { !disabled ? handleHelpfulClick() : null; setDisabled(true); }}>Yes</u>({helpful})</span>
        <span>  <u onClick={() => { !disabled ? handleReportClick() : null; setDisabled(true); }}>No</u>({noHelpful})</span>
      </span>
      <span className='report' onClick={() => { !repDisabled ? handleReportClick() : null; setRepDisabled(true); }}>Report</span>
    </div>
  );

};

export default IndivReview;