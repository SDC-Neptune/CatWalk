import React from 'react';
import Answer from './Answer.jsx';

const Question = ({productId}) => {
  return (
    <div>
      <div className="txtQA"><strong>Q:</strong> This is hardcoded question data</div>
      <span>Helpful? <u>Yes</u> </span>
      <span>25</span>
      <Answer />
      <span>Helpful? <u>Yes</u> </span>
      <span>5</span>
    </div>
  );
};

export default Question;