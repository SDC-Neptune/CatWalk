import React from 'react';
import QuestionsView from './QuestionsView.jsx';
const QuestionsAnswers = ({productId, questionData, productInfo}) => {

  return (
    <div className="qa-container">
      <h1>Questions & Answers</h1>
      < QuestionsView
        productId={productId}
        questionData={questionData}
        productInfo={productInfo}
      />
    </div>
  );


};

export default QuestionsAnswers;
