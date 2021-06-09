import React, { useState, useEffect } from 'react';

const Size = ({chars}) => (
  <div>
    <b>Size</b>
    <div>
      <input className='feedbackChars'readOnly type="range" min="1" max="5" value={chars.characteristics.Size ? chars.characteristics.Size.value : '2.5'} name="size"></input>
      <div className='parent'><span className='r1'>Too small</span> <span className='r2'>Perfect</span> <span className='r3'>Too wide</span></div>
    </div>
  </div>
);

export default Size;