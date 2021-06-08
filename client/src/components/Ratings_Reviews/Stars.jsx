import React, { useState, useEffect } from 'react';

const Stars = ({number}) => {
  const [percentage, setPercent] = useState(85);

  useEffect(() => {
    setPercent(number);
  });

  return (
    <div className="star-ratings-css">
      <div className="star-ratings-css-top" style={{
        color: 'black',
        width: `${percentage}%`,
        padding: 0,
        position: 'absolute',
        'zindex': 1,
        display: 'block',
        top: 0,
        left: 0,
        overflow: 'hidden',
      }}
      ><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default Stars;