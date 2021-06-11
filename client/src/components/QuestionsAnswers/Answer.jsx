import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Answer = ({answer, answerModalHandler}) => {
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [isReported, setIsReported] = useState('Report');

  const markAsHelpful = (id) => {
    setHelpful(helpful + 1);
    axios.put(`/qa/answers/${id}/helpful`, answer.helpfulness + 1)
      .then(res => {
        console.log(res);
        if (res.status !== 200) {
          setHelpful(helpful - 1);
        }
      });
  };

  const handleReport = (id) => {
    axios.put(`/qa/answers/${id}/report`, true)
      .then(res => {
        setIsReported('Reported');
      });
  };

  return (
    <>
      <span className="qa-body">{answer.body}</span>
      <div></div>
      <span className="qa-r2  qa-border">By {answer.answerer_name} on {answer.date.slice(0, 10)}</span>
      <span className="qa-r2  "> Helpful? </span>
      <button className="qa-r2 qa-span-btn  qa-border" disabled={helpful > answer.helpfulness} onClick={() => markAsHelpful(answer.answer_id)}> Yes </button>
      <span className="qa-r2 qa-border"> ({helpful}) </span>
      <span className="qa-r2 qa-question qa-r2 qa-report qa-border" onClick={() => handleReport(item.question_id)}> {isReported}</span>
      <button className="qa-r2 qa-span-btn qa-add-answer-btn " onClick={() => answerModalHandler(item.question_body)}>Add Answer</button>
      {
        answer.photos.map((photo) => {
          return <img
            className="answer-photo"
            key={photo.id}
            src={photo.url ? photo.url : ''}
          />;
        })}
      <div></div>
    </>
  );
};


export default Answer;