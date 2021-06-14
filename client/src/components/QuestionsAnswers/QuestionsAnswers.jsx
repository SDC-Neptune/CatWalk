import React from 'react';
import QuestionsView from './QuestionsView.jsx';
const QuestionsAnswers = ({productId, questionData, productInfo}) => {

  return (
    <div className="qa-container" id="questions-answers">
      <h2>QUESTIONS & ANSWERS</h2>
      < QuestionsView
        productId={productId}
        questionData={questionData}
        productInfo={productInfo}
      />
    </div>
  );


};

export default QuestionsAnswers;
