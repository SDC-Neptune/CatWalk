import React from 'react';

const Answer = ({answer}) => {
  return (
    <>
      <div className="qa-body">{answer.body}</div>
      <div className="qa-r2">By {answer.answerer_name} on {answer.date.slice(0, 10)}</div>
      <span>Helpful? <u>Yes</u> </span>
      <span>{answer.helpfulness} </span>
      <span className="qa-add-answer-btn">Add Answer</span>

    </>
  );
};

export default Answer;