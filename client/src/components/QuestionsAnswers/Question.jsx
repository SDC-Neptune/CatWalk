import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';


const Question = (props) => {
  const {item, answerModalHandler, productId} = props;

  if (item.reported) {
    return null;
  }
  const [answerCount, setAnswerCount] = useState(2);
  const [answerData, setAnswers] = useState([]);
  const [helpful, setHelpful] = useState(item.question_helpfulness);
  const [isReported, setIsReported] = useState('Report');
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [changeName, setChangeName] = useState('See more answers');
  const getAnswersList = (id) => {
    axios.get(`/qa/questions/${id}/answers`)
      .then(({data}) => setAnswers(data.results));
  };

  const markAsHelpful = (id) => {
    setHelpful(helpful + 1);
    axios.put(`/qa/questions/${id}/helpful`, item.question_helpfulness + 1)
      .then(res => {
        if (res.status !== 200) {
          setHelpful(helpful - 1);
        }
      });
  };

  const handleReport = (id) => {
    axios.put(`/qa/questions/${id}/report`, true)
      .then(res => {
        setIsReported('Reported');
      });
  };


  const sortAnswersList = () => {
    item = item.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  };

  const showAnswers = () => {
    if (answerCount === 2) {
      setAnswerCount(answerData.length);
      setChangeName('Collapse answers');
    } else {
      setAnswerCount(2);
      setChangeName('See more Answers');
    }
  };

  useEffect(() => {
    getAnswersList(item.question_id);
  }, [productId]);

  //console.log(item);
  return (
    <div id={item.question_id} className={`qa-question-container ${answerCount > 2 ? 'qa-scrollable' : ''}`}>
      <div className="qa-question qa-question-body">
        <span className="qa-question qa-question-data">Q: {item.question_body}</span>
        <div className='qa-r2'>
          <span className="qa-question  qa-helpful qa-r2">Helpful?</span>
          <button className="qa-span-btn qa-small-span qa-helpful" disabled={helpful > item.question_helpfulness} onClick={() => markAsHelpful(item.question_id)}> Yes </button>
          <span className="qa-r2 qa-helpful qa-border">({item.question_helpfulness}) </span>
          <span className="qa-question qa-r2 qa-report" onClick={() => handleReport(item.question_id)}>{isReported}</span>
        </div>
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