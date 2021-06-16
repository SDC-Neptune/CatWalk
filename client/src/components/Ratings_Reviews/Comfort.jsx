import React, { useState, useEffect } from 'react';

const Comfort = ({chars}) => {

  return (
    <div className='charStyle'>
      <b>Comfort</b>
      <div>
        <input className='feedbackChars' readOnly type="range" min="1" max="5" value={chars.characteristics.Comfort ? chars.characteristics.Comfort.value : '2.5'} name="comfort"></input>
        <div className='parent'><span className='r1'>Uncomfortable</span> <span className='r2'>OK</span> <span className='r3'>Perfect</span></div>
      </div>
    </div>
  );
};

export default Comfort;