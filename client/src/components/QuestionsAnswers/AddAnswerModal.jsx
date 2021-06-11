import React, {useState} from 'react';

const AddAnswerModal = ({ answerModalOpen, setAnswerModalOpen, questionData, productName}) => {

  if (!answerModalOpen) {
    return null;
  }

  const closeModal = () => {
    setAnswerModalOpen(false);
  };
  const getQuestion = () => {
    var questionBody = document.getElementById(questionData.)
    console.log(questionBody);
    var
  };
  return (
    <div className="modal-overlay qa-modal">
      <div className="modal qa-modal">
        <span className="modal-header qa-modal">Submit your Answer</span>
        <span>{productName} : {questionData.question_body}</span>
        <input placeholder={'Share your knowledge'}></input>
        <div onClick={closeModal}>Close</div>
      </div>
    </div>
  );
};

export default AddAnswerModal;