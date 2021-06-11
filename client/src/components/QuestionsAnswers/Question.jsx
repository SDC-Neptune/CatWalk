import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';


const Question = ({key, item, answerModalHandler, productId}) => {
  if (item.reported) {
    return null;
  }
  const [answerCount, setAnswerCount] = useState(2);
  const [answerData, setAnswers] = useState([]);
  const [isReported, setIsReported] = useState('Report');
  const [helpful, setHelpful] = useState(item.helpfulness);

  const getAnswersList = (id) => {
    axios.get(`/qa/questions/${id}/answers`)
      .then(({data}) => setAnswers(data.results));
  };


  const handleReport = (id) => {
    axios.put(`/qa/questions/${id}/report`, true)
      .then(res => {
        setIsReported('Reported');
      });
  };

  const markAsHelpful = (id) => {
    setHelpful(helpful + 1);
    axios.put(`/qa/questions/${id}/helpful`, item.helpfulness + 1)
      .then(res => {
        if (res.status !== 200) {
          setHelpful(helpful - 1);
        }
      });
  };

  const sortAnswersList = () => {
    item = item.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  };

  useEffect(() => {
    getAnswersList(item.question_id);
  }, [productId]);

  return (
    <div id={item.question_id} className="qa-question-container">
      <span className="qa-question qa-question-body">Q: {item.question_body}</span>
      <span className="qa-question qa-r2 qa-helpful">Helpful?</span>
      <button className="qa-span-btn qa-small-span qa-helpful" disabled={helpful > item.helpfulness} onClick={() => markAsHelpful(item.question_id)}> Yes </button>
      <span className="qa-r2 qa-helpful">({item.question_helpfulness}) </span>
      <span className="qa-question qa-r2 qa-report" onClick={() => handleReport(item.question_id)}>{isReported}</span>
      <div className="qa-answer-container">
        <span className="qa-answer-body">A:</span>
        {answerData.slice(0, answerCount).map((answer) => {
          return <Answer
            key={answer.answer_id}
            answer={answer}
            answerModalHandler={answerModalHandler}/>;
        })};
      </div>
    </div>
  );
};

export default Question;