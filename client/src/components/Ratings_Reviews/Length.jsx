import React, { useState, useEffect } from 'react';

const Length = ({chars}) => (
  <div>
    <b>Length</b>
    <div>
      <input className='feedbackChars' readOnly type="range" min="1" max="5" value={chars.characteristics.Length ? chars.characteristics.Length.value : '2.5'} name="length"></input>
      <div className='parent'><span className='r1'>Runs short</span> <span className='r2'>Perfect</span> <span className='r3'>Runs Long</span></div>
    </div>
  </div>
);

export default Length;