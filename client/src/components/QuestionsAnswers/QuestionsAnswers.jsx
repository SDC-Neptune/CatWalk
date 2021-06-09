import React from 'react';
import Search from './Search.jsx';
import QuestionsView from './QuestionsView.jsx';
const QuestionsAnswers = ({questionData}) => {

  return (
    <div className="qa-container">
      <h1>Questions & Answers</h1>
      < Search />
      < QuestionsView questionData={questionData} />
    </div>
  );


};

export default QuestionsAnswers;
