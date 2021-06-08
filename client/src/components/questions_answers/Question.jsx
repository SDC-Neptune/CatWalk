import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';


const Question = ({item}) => {

  const [answerData, setAnswers] = useState([]);

  const getAnswersList = (id) => {
    axios.get(`/qa/questions/${id}/answers`)
      .then(({data}) => setAnswers(data.results));
  };

  useEffect(() => {
    getAnswersList(item.question_id);
  });

  return (
    <div>
      <h3 className="QnA-body"><strong>Q: </strong>{item.question_body}</h3>
      <span>Helpful? <u> Yes </u>{item.question_helpfulness}</span>
      <span>By: {item.asker_name}</span>
      <div className="QnA-answer-container">
        <h3><strong>A:</strong></h3>
        {answerData.map((answer) => {
          return <Answer
            key={answer.answer_id}
            answer={answer}/>;
        })};
      </div>
    </div>
  );
};

export default Question;