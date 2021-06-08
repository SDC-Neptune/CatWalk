import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';
import Size from './Size.jsx';
import Comfort from './Comfort.jsx';
import Quality from './Quality.jsx';
import Length from './Length.jsx';
import Fit from './Fit.jsx';
import Width from './Width.jsx';


const RatingsReviews = ({data}) => {

  const [totalStars, setTotalStars] = useState(5);
  const [rating, setRating] = useState(5);
  const [size, setSize] = useState(data.characteristics.Size ? true : false);
  const [comfort, setComfort] = useState(data.characteristics.Comfort ? true : false);
  const [quality, setQuality] = useState(data.characteristics.Quality ? true : false);
  const [width, setWidth] = useState(data.characteristics.Width ? true : false);
  const [fit, setFit] = useState(data.characteristics.Fit ? true : false);
  const [length, setLength] = useState(data.characteristics.Length ? true : false);

  useEffect(() => {
    setRating(Math.round(((1 * Number(data.ratings['1'])) + (2 * Number(data.ratings['2'])) + (3 * Number(data.ratings['3'])) + (4 * Number(data.ratings['4'])) + (5 * Number(data.ratings['5']))) / totalStars * 10) / 10);

    setTotalStars(Number(data.ratings['5']) + Number(data.ratings['4']) + Number(data.ratings['3']) + Number(data.ratings['2']) + Number(data.ratings['1']));

  });

  return (
    <div className='reviewSummary'>
      <div className='reviewTest'>
        <font className="rating"> {rating} </font>
        <div className='summaryStar'><Stars number={rating * 20} /></div>
      </div>
      <br></br>
      <div>
        {Math.round(Number(data.recommended.true) / (Number(data.recommended.true) + Number(data.recommended.false)) * 100, 0)}% of reviews recommend this product
      </div>
      <br></br>
      <div className='test'>
        <span className='reviewBarText'>5 stars</span> <progress value={(Number(data.ratings['5']) / totalStars) * 100} max={totalStars}></progress><span>{data.ratings['5']}</span>
        <br/>
        <span className='reviewBarText'>4 stars</span> <progress value={(Number(data.ratings['4']) / totalStars) * 100} max={totalStars}></progress><span>{data.ratings['4']}</span>
        <br/>
        <span className='reviewBarText'>3 stars</span> <progress value={(Number(data.ratings['3']) / totalStars) * 100} max={totalStars}></progress><span>{data.ratings['3']}</span>
        <br/>
        <span className='reviewBarText'>2 stars</span> <progress value={(Number(data.ratings['2']) / totalStars) * 100} max={totalStars}></progress><span>{data.ratings['2']}</span>
        <br/>
        <span className='reviewBarText'>1 stars</span> <progress value={(Number(data.ratings['1']) / totalStars) * 100} max={totalStars}></progress><span>{data.ratings['1']}</span>
      </div>
      <br></br>
      <div >
        {comfort && <Comfort chars={data}/>}
        {width && <Width chars={data}/>}
        <br></br>
        {quality && <Quality chars={data}/>}
        <br></br>
        {fit && <Fit chars={data}/>}
        <br></br>
        {length && <Length chars={data}/>}
      </div>
    </div>

  );

};

export default RatingsReviews;