import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';

const RatingsReviews = () => {

  const [recommend, setRecommed] = useState(100);
  const [fiveStar, setfiveStar] = useState(55);
  const [fourStar, setfourStar] = useState(0);
  const [threeStar, sethreeStar] = useState(20);
  const [twoStar, settwoStar] = useState(6);
  const [oneStar, setoneStar] = useState(1);
  const [totalStars, setTotalStars] = useState(
    (fiveStar + fourStar + threeStar + twoStar + oneStar)
  );

  return (
    <div>
      <font className="rating"> {

      } </font>
      <Stars/>
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
            <input className='feedbackChars' type="range" min="0" max="5" value="2.5" name="tooSmall"></input>
            <div className='parent'><span className='r1'>Too small</span> <span className='r2'>Perfect</span> <span className='r3'>Too wide</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Comfort</b>
          <div>
            <input className='feedbackChars' type="range" min="0" max="5" value="2.7" name="poor"></input>
            <div className='parent'><span className='r1'>Uncomfortable</span> <span className='r2'>OK</span> <span className='r3'>Perfect</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Width</b>
          <div>
            <input className='feedbackChars' type="range" min="0" max="5" value="2" name="poor"></input>
            <div className='parent'><span className='r1'>Too narrow</span> <span className='r2'>Perfect</span> <span className='r3'>Too wide</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Quality</b>
          <div>
            <input className='feedbackChars' type="range" min="0" max="5" value="4" name="poor"></input>
            <div className='parent'><span className='r1'>Poor</span> <span className='r2'>OK</span> <span className='r3'>Perfect</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Fit</b>
          <div>
            <input className='feedbackChars' type="range" min="0" max="5" value="1.3" name="poor"></input>
            <div className='parent'><span className='r1'>Too tight</span> <span className='r2'>Perfect</span> <span className='r3'>Too loose</span></div>
          </div>
        </div>
        <br></br>
        <div>
          <b>Length</b>
          <div>
            <input className='feedbackChars' type="range" min="0" max="5" value="4.9" name="poor"></input>
            <div className='parent'><span className='r1'>Runs short</span> <span className='r2'>Perfect</span> <span className='r3'>Runs Long</span></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RatingsReviews;