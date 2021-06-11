import React from 'react';
import Search from './Search.jsx';
import QuestionsView from './QuestionsView.jsx';
const QuestionsAnswers = ({productId, productName, questionData}) => {

  return (
    <div className="qa-container">
      <h1>Questions & Answers</h1>
      < Search />
      < QuestionsView productId={productId}
        productName={productName}
        questionData={questionData}/>
    </div>
  );


};

export default QuestionsAnswers;
