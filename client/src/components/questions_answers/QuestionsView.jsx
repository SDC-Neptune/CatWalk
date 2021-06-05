import React from 'react';
import Question from './Question.jsx';

const QuestionsView = ({productId}) => {
  console.log(productId);
  return (
    <div>
      <Question />

      <button>See more answered questions</button>
    </div>
  );
};

export default QuestionsView;