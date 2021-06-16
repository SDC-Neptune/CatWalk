import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';
import Size from './Size.jsx';
import Comfort from './Comfort.jsx';
import Quality from './Quality.jsx';
import Length from './Length.jsx';
import Fit from './Fit.jsx';
import Width from './Width.jsx';


const ReviewSummary = ({data, filter, isFiltered, triggerFilter, removeFilter}) => {
  if (!data) {
    return 'Still Loading';
  }

  const [totalStars, setTotalStars] = useState(null);
  const [rating, setRating] = useState(null);
  const [size, setSize] = useState(data.characteristics.Size ? true : false);
  const [comfort, setComfort] = useState(data.characteristics.Comfort ? true : false);
  const [quality, setQuality] = useState(data.characteristics.Quality ? true : false);
  const [width, setWidth] = useState(data.characteristics.Width ? true : false);
  const [fit, setFit] = useState(data.characteristics.Fit ? true : false);
  const [length, setLength] = useState(data.characteristics.Length ? true : false);

  useEffect(() => {
    setFit(data.characteristics.Fit ? true : false);
    setLength(data.characteristics.Length ? true : false);
    setQuality(data.characteristics.Quality ? true : false);
    setSize(data.characteristics.Size ? true : false);
    setWidth(data.characteristics.Width ? true : false);
    setComfort(data.characteristics.Comfort ? true : false);

    setRating(Math.round((((1 * Number(data.ratings['1']) || null)) + (2 * Number(data.ratings['2']) || null) + (3 * Number(data.ratings['3']) || null) + (4 * Number(data.ratings['4']) || null) + (5 * Number(data.ratings['5'])) || null) / totalStars * 10) / 10);

    setTotalStars(Number(data.ratings['5'] || null) + Number(data.ratings['4'] || null) + Number(data.ratings['3'] || null) + Number(data.ratings['2'] || null) + Number(data.ratings['1'] || null));
  });


  return (
    <div className='reviewSummary'>
      <div className='reviewTest'>
        <font className="rating">{rating || ''}</font>
        <div className='summaryStar'><Stars number={(rating) * 20} /></div>
      </div>
      <br></br>
      <div>
        {Math.round(Number(data.recommended.true) / (Number(data.recommended.true) + Number(data.recommended.false)) * 100, 0) || '0'}% of reviews recommend this product
      </div>
      <br></br>
      <span><b>Rating Breakdown</b></span>
      { isFiltered && (<div>{filter.join(',')} star reviews are being shown</div>)}
      { isFiltered && (<div><button className='reviewButton' onClick={removeFilter}>Remove all filters</button></div>)}
      <div className='ratingBars'>
        <div className='reviewBarText'>
          <span className='reviewText' onClick={triggerFilter}>5 stars </span>
          <progress className='reviewBarFill' value={(Number(data.ratings['5']) / totalStars) || '0'} max='1'></progress>
          <span className='reviewCount'>{data.ratings['5'] || '0'}</span>
        </div>
        <br/>
        <div className='reviewBarText'>
          <span className='reviewText' onClick={triggerFilter}>4 stars </span>
          <progress className='reviewBarFill' value={(Number(data.ratings['4']) / totalStars) || '0'} max='1'></progress>
          <span className='reviewCount'>{data.ratings['4'] || '0'}</span>
        </div>
        <br/>
        <div className='reviewBarText'>
          <span className='reviewText' onClick={triggerFilter}>3 stars </span>
          <progress value={(Number(data.ratings['3']) / totalStars) || '0'} max='1'></progress>
          <span>{data.ratings['3'] || '0'}</span>
        </div>
        <br/>
        <div className='reviewBarText'>
          <span className='reviewText' onClick={triggerFilter}>2 stars </span>
          <progress value={(Number(data.ratings['2']) / totalStars) || '0'} max='1'></progress>
          <span>{data.ratings['2'] || '0'}</span>
        </div>
        <br/>
        <div className='reviewBarText'>
          <span className='reviewText' onClick={triggerFilter}>1 stars </span>
          <progress value={(Number(data.ratings['1']) / totalStars) || '0'} max='1'></progress>
          <span>{data.ratings['1'] || '0'}</span>
        </div>
      </div>
      <br></br>
      <div>
        {comfort && <Comfort chars={data}/>}
        {width && <Width chars={data}/>}
        {quality && <Quality chars={data}/>}
        {fit && <Fit chars={data}/>}
        {length && <Length chars={data}/>}
      </div>
    </div>

  );

};

export default ReviewSummary;