import React from 'react';
import Search from './questions_answers/Search.jsx';
import QuestionsView from './questions_answers/QuestionsView.jsx';

const QuestionsAnswers = ({questionData}) => {
  return (
    <div className="QnA-container">
      <h1>Questions & Answers</h1>
      < Search />
      < QuestionsView questionData={questionData}/>
    </div>
  );


};

export default QuestionsAnswers;
