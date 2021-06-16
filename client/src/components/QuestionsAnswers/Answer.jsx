import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Answer = (props) => {
  const {answer, item, answerModalHandler} = props;

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
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleReport = (id) => {
    axios.put(`/qa/answers/${id}/report`, true)
      .then(res => {
        setIsReported('Reported');
      });
  };

  const isSeller = () => {
    return answer.answerer_name.toLowerCase() === 'seller' ?
      <strong> {answer.answerer_name}</strong> : answer.answerer_name;
  };

  return (
    <div className="qa-answer-container">
      <span className="qa-body">{answer.body}</span>
      <div className="qa-answer-body">
        {
          answer.photos.map((photo) => {
            return <img
              className="answer-photo"
              key={photo.id}
              src={photo.url ? photo.url : ''}
            />;
          })}
        <div></div>
        <span className="qa-r2  qa-border">By {isSeller()} on {answer.date.slice(0, 10)}</span>
        <span className="qa-r2  "> Helpful? </span>
        <button className="qa-r2 qa-span-btn  qa-border" disabled={helpful > answer.helpfulness} onClick={() => markAsHelpful(answer.answer_id)}> Yes </button>
        <span className="qa-r2 qa-border"> ({helpful}) </span>
        <span className="qa-r2 qa-question qa-r2 qa-report" onClick={() => handleReport(item.question_id)}> {isReported}</span>
      </div>
      <div/>
    </div>
  );
};


export default Answer;