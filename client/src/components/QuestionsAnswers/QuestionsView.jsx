import React, { useState } from 'react';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';

const QuestionsView = ({productId, productName, questionData}) => {
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [questionCount, setQuestionCount] = useState(4);

  const questionModalHandler = (e) => {
    setQuestionModalOpen(true);
  };

  const answerModalHandler = (e) => {
    setAnswerModalOpen(true);
  };

  const sortQuestionsList = () => {
    questionData = questionData.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  };

  if (!questionData) {
    return (
      <>
        <h2>There are no questions for this item</h2>
        <button className="qa-ask-btn">Ask a question</button>
      </>
    );
  }

  return (
    <div className="qa-question">
      <AddQuestionModal questionModalOpen={questionModalOpen}
        setQuestionModalOpen={setQuestionModalOpen}
        productId={productId}
        productName={productName} />
      <AddAnswerModal answerModalOpen={answerModalOpen}
        setAnswerModalOpen={setAnswerModalOpen}
        questionData={questionData}
        productName={productName}/>
      { sortQuestionsList(),
      questionData.slice(0, questionCount).map((item) => {
        return <Question
          productId={productId}
          key={item.question_id}
          item={item}
          answerModalHandler={answerModalHandler}
          setAnswerModalOpen={setAnswerModalOpen}
        />;
      })}
      <button className="qa-more-questions-btn" onClick={ () => setQuestionCount(questionCount + 4)}>See more answered questions</button>
      <button className="qa-add-question-btn" onClick={questionModalHandler}>Add a question</button>
    </div>
  );
};

export default QuestionsView;