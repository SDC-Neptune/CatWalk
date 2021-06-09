import React from 'react';

const RPModal = ({ modalOpen, setModalOpen }) => {

  if (!modalOpen) {
    return null;
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>COMPARING</div>
          <div onClick={closeModal}>Close</div>
        </div>
        <div className="prod-compare-titles">
          <h3>Feature</h3>
          <h3 className="modal-current-prod">Camo Onesie</h3>
          <h3 className="modal-compare-prod">Blue Onesie</h3>
        </div>
        <div className="comparison-area">
          <div className="comparison-wrapper">
            <div>GMO Free</div>
            <div>TRUE</div>
            <div>FALSE</div>
          </div>
          <div className="comparison-wrapper">
            <div>Sustainable</div>
            <div>TRUE</div>
            <div>FALSE</div>
          </div>
          <div className="comparison-wrapper">
            <div>Thread Count</div>
            <div>500</div>
            <div>400</div>
          </div>
          <div className="comparison-wrapper">
            <div>Somthing else</div>
            <div>FALSE</div>
            <div>TRUE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPModal;