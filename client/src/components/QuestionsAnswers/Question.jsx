import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';


const Question = ({item}) => {

  const [answerCount, setAnswerCount] = useState(2);
  const [answerData, setAnswers] = useState([]);

  const getAnswersList = (id) => {
    axios.get(`/qa/questions/${id}/answers`)
      .then(({data}) => setAnswers(data.results));
  };

  useEffect(() => {
    getAnswersList(item.question_id);
  });

  const sortAnswersList = () => {
    questionData = questionData.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  };

  return (
    <div>
      <h3 className="qa-question"><strong>Q: </strong>{item.question_body}</h3>
      <span className="qa-r2">Helpful? <u>Yes </u>{item.question_helpfulness} </span>
      <div className="qa-answer-container">
        <h3><strong>A:</strong></h3>
        {answerData.slice(0, answerCount).map((answer) => {
          return <Answer
            key={answer.answer_id}
            answer={answer}/>;
        })};
      </div>
    </div>
  );
};

export default Question;