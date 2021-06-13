import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';


const Question = ({item, answerModalHandler, productId}) => {
  if (item.reported) {
    return null;
  }
  const [answerCount, setAnswerCount] = useState(2);
  const [answerData, setAnswers] = useState([]);
  const [isReported, setIsReported] = useState('Report');
  const [helpful, setHelpful] = useState(item.helpfulness);
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [changeName, setChangeName] = useState('See more answers');
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

  const showAnswers = () => {
    if (answerCount === 2) {
      setAnswerCount(answerData.length);
      setChangeName('Collapse answers');
      // let answr = document.getElementById('qa-answer-container');
      // answr.style.className = 'qa-scrollable';
    } else {
      setAnswerCount(2);
      setChangeName('See more Answers');
    }
  };

  useEffect(() => {
    getAnswersList(item.question_id);
  }, [productId]);


  return (
    <div id={item.question_id} className={`qa-question-container ${answerCount > 2 ? 'qa-scrollable' : ''}`}>
      <div className="qa-question qa-question-body">
        <span className="qa-question qa-question-data">Q: {item.question_body}</span>
        <span className="qa-question qa-r2 qa-helpful">Helpful?</span>
        <button className="qa-span-btn qa-small-span qa-helpful" disabled={helpful > item.helpfulness} onClick={() => markAsHelpful(item.question_id)}> Yes </button>
        <span className="qa-r2 qa-helpful">({item.question_helpfulness}) </span>
        <span className="qa-question qa-r2 qa-report" onClick={() => handleReport(item.question_id)}>{isReported}</span>
      </div>
      <div className="qa-answer-container">
        <span className="qa-answer">A:</span>
        {answerData.slice(0, answerCount).map((answer) => {
          return <Answer
            key={answer.answer_id}
            answer={answer}
            item={item}
            answerModalHandler={answerModalHandler}
          />;
        })}
      </div>
      <button className="qa-span-btn" onClick={showAnswers}>{changeName}</button>
    </div>
  );
};

export default Question;