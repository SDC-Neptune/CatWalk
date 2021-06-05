import React from 'react';
import ViewContainer from './questions_answers/ViewContainer.jsx';

const QuestionsAnswers = ({productId}) => {

  return (
    <div>
      <h1>QuestionsAnswers</h1>
      <ViewContainer productId={productId}/>
    </div>
  );


};

export default QuestionsAnswers;
