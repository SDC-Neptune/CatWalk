import React from 'react';

const Answer = ({answer}) => {
  return (
    <>
      <div className="txtQA">{answer.body}</div>
      <div className="txtQA">By {answer.answerer_name} on {answer.date.slice(0, 10)}</div>
      <span>Helpful? <u>Yes</u> </span>
      <span>{answer.helpfulness}</span>
    </>
  );
};

export default Answer;