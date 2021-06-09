import React, { useState } from 'react';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
const QuestionsView = ({questionData}) => {
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [answerModalOpen, setAnswerModalOpen] = useState(false);

  const questionModalHandler = (e) => {
    e.stopPropagation();
    setQuestionModalOpen(true);
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
      <AddQuestionModal questionModalOpen={questionModalOpen} setQuestionModalOpen={setQuestionModalOpen} />
      <AddAnswerModal answerModalOpen={answerModalOpen} setAnswerModalOpen={setAnswerModalOpen} />
      { sortQuestionsList(),
      questionData.map((item) => {
        return <Question
          key={item.question_id}
          item={item}
        />
      })}
      <button className="qa-more-questions-btn">See more answered questions</button>
      <button className="qa-add-question-btn" onClick={questionModalHandler}>Add a question</button>
    </div>
  );
};

export default QuestionsView;