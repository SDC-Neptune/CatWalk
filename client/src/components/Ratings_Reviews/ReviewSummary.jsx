import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';
import axios from 'axios';

const RatingsReviews = ({id}) => {
  const [rating, setRating] = useState(1);
  const [recommend, setRecommed] = useState(1);
  const [fiveStar, setfiveStar] = useState(null);
  const [fourStar, setfourStar] = useState(null);
  const [threeStar, sethreeStar] = useState(null);
  const [twoStar, settwoStar] = useState(null);
  const [oneStar, setoneStar] = useState(null);
  const [totalStars, setTotalStars] = useState(1);

  const getAllReviewsMeta = () => {
    axios.get(`/reviews/meta/?product_id=${id}`)
      .then(({data}) => {
        setfiveStar(Number(data.ratings['5']));
        setfourStar(Number(data.ratings['4']));
        sethreeStar(Number(data.ratings['3']));
        settwoStar(Number(data.ratings['2']));
        setoneStar(Number(data.ratings['1']));
        setRecommed(() => {
          let yesRec = Number(data.recommended.true);
          let noRec = Number(data.recommended.false);
          return Math.round(yesRec / (yesRec + noRec) * 100, 0);
        });
      })
      .then(() => {
        setTotalStars(fiveStar + fourStar + threeStar + twoStar + oneStar);
      })
      .then(() => {
        setRating( Math.round(((1 * oneStar) + (2 * twoStar) + (3 * threeStar) + (4 * fourStar) + (5 * fiveStar)) / totalStars * 10) / 10);
      })
      .catch((err) => {
        console.log('ERROR!:', err);
      });
  };

  useEffect(() => {
    getAllReviewsMeta();
  }, [oneStar, twoStar, threeStar, fourStar, fiveStar, totalStars]);

  return (
    <div>
      <font className="rating"> {rating <= 5 ? rating : 0} </font>
      <Stars number={rating * 20}/>
      <div>
        {recommend}% of reviews recommend this product
      </div>
      <div className='test'>
        <span className='reviewBarText'>5 stars</span> <progress value={(fiveStar / totalStars) * 100} max={totalStars}></progress><span>{fiveStar}</span>
        <br/>
        <span className='reviewBarText'>4 stars</span> <progress value={(fourStar / totalStars) * 100} max={totalStars}></progress><span>{fourStar}</span>
        <br/>
        <span className='reviewBarText'>3 stars</span> <progress value={(threeStar / totalStars) * 100} max={totalStars}></progress><span>{threeStar}</span>
        <br/>
        <span className='reviewBarText'>2 stars</span> <progress value={(twoStar / totalStars) * 100} max={totalStars}></progress><span>{twoStar}</span>
        <br/>
        <span className='reviewBarText'>1 stars</span> <progress value={(oneStar / totalStars) * 100} max={totalStars}></progress><span>{oneStar}</span>
      </div>
      <br></br>
      <div >
        <div>
          <b>Size</b>
          <div>
            <input className='feedbackChars'readOnly type="range" min="0" max="5" value="2.5" name="size"></input>
            <div className='parent'><span className='r1'>Too small</span> <span className='r2'>Perfect</span> <span className='r3'>Too wide</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Comfort</b>
          <div>
            <input className='feedbackChars' readOnly type="range" min="0" max="5" value="2.7" name="comfort"></input>
            <div className='parent'><span className='r1'>Uncomfortable</span> <span className='r2'>OK</span> <span className='r3'>Perfect</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Width</b>
          <div>
            <input className='feedbackChars'readOnly type="range" min="0" max="5" value="2" name="width"></input>
            <div className='parent'><span className='r1'>Too narrow</span> <span className='r2'>Perfect</span> <span className='r3'>Too wide</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Quality</b>
          <div>
            <input className='feedbackChars'readOnly type="range" min="0" max="5" value="4" name="quality"></input>
            <div className='parent'><span className='r1'>Poor</span> <span className='r2'>OK</span> <span className='r3'>Perfect</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Fit</b>
          <div>
            <input className='feedbackChars' readOnly type="range" min="0" max="5" value="1.3" name="fit"></input>
            <div className='parent'><span className='r1'>Too tight</span> <span className='r2'>Perfect</span> <span className='r3'>Too loose</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Length</b>
          <div>
            <input className='feedbackChars' readOnly type="range" min="0" max="5" value="4.9" name="length"></input>
            <div className='parent'><span className='r1'>Runs short</span> <span className='r2'>Perfect</span> <span className='r3'>Runs Long</span></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RatingsReviews;