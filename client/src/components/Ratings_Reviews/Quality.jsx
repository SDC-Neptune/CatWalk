import React, { useState, useEffect } from 'react';

const Quality = ({chars}) => {
  return (
    <div>
      <b>Quality</b>
      <div>
        <input className='feedbackChars'readOnly type="range" min="1" max="5" value={chars.characteristics.Quality.value} name="quality"></input>
        <div className='parent'><span className='r1'>Poor</span> <span className='r2'>OK</span> <span className='r3'>Perfect</span></div>
      </div>
    </div>
  );

};

export default Quality;