import React from 'react';

const AddQuestionModal = ({ qModalOpen, setQModalOpen }) => {

  if (!qModalOpen) {
    return null;
  }

  const closeModal = () => {
    setQModalOpen(false);
  };

  return (
    <div className="modal-overlay qa-modal">
      <div className="modal qa-modal">
        <div className="modal-header qa-modal">
          <div>Add a Question</div>
          <div onClick={closeModal}>Close</div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;