import React from 'react';

const AddAnswerModal = ({ answerModalOpen, setAnswerModalOpen }) => {

  if (!answerModalOpen) {
    return null;
  }

  const closeModal = () => {
    setAnswerModalOpen(false);
  };

  return (
    <div className="modal-overlay qa-modal">
      <div className="modal qa-modal">
        <div className="modal-header qa-modal">
          <div>Add an Answer</div>
          <div onClick={closeModal}>Close</div>
        </div>
      </div>
    </div>
  );
};

export default AddAnswerModal;