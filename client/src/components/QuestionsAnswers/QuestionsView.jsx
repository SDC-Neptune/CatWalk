import React, { useState } from 'react';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';

const QuestionsView = ({questionData}) => {
  const [qModalOpen, setQModalOpen] = useState(true);

  const modalHandler = (e) => {
    console.log('Add question Button clicked');
    e.stopPropagation();
    setQModalOpen(true);
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
      <AddQuestionModal qModalOpen={qModalOpen} setQModalOpen={setQModalOpen} />
      { sortQuestionsList(),
      questionData.map((item) => {
        return <Question
          key={item.question_id}
          item={item}
        />;
      })}
      <button className="qa-more-questions-btn">See more answered questions</button>
      <button className="qa-add-question-btn" onClick={modalHandler}>Add a question</button>
    </div>
  );
};

export default QuestionsView;