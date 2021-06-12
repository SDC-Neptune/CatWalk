import React from 'react';
import Search from './Search.jsx';
import QuestionsView from './QuestionsView.jsx';
const QuestionsAnswers = ({productId, questionData}) => {

  return (
    <div className="qa-container" id="questions-answers">
      <h1>Questions & Answers</h1>
      < Search
        questionData={questionData}
      />
      < QuestionsView
        productId={productId}
        questionData={questionData}
      />
    </div>
  );


};

export default QuestionsAnswers;
