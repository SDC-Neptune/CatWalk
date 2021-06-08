import React from 'react';
import Question from './Question.jsx';

const QuestionsView = ({questionData}) => {
  if (!questionData) {
    return (
      <>
        <h2>There are no questions for this item</h2>
        <button className="QnA-askBtn">Ask a question</button>
      </>
    );
  }

  return (
    <div className="QnA-Question">
      {questionData.map((item) => {
        return <Question
          key={item.question_id}
          item={item}
        />;
      })}
      <button className="QnA-moreQuestionsBtn">See more answered questions</button>
    </div>
  );
};

export default QuestionsView;