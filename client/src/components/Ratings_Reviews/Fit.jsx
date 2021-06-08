import React, { useState, useEffect } from 'react';

const Fit = ({chars}) => (
  <div>
    <b>Fit</b>
    <div>
      <input className='feedbackChars' readOnly type="range" min="1" max="5" value={chars.characteristics.Fit.value} name="fit"></input>
      <div className='parent'><span className='r1'>Too tight</span> <span className='r2'>Perfect</span> <span className='r3'>Too loose</span></div>
    </div>
  </div>
);

export default Fit;