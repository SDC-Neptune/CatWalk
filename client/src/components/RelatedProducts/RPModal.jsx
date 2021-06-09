import React from 'react';

const RPModal = ({ modalOpen, setModalOpen, featureData, productId, compareProd }) => {

  if (!modalOpen) {
    return null;
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  const currentProdFeatures = (featureData.filter(item => item.id.toString() === productId.toString())[0].features);
  const compareProdFeatures = (featureData.filter(item => item.id.toString() === compareProd.toString())[0].features);
  const combinedFeatures = {};
  for (let i = 0; i < currentProdFeatures.length; i++) {
    if (!(currentProdFeatures[i].feature in combinedFeatures)) {
      combinedFeatures[currentProdFeatures[i].feature] = [currentProdFeatures[i].value];
    }
  }
  for (let i = 0; i < compareProdFeatures.length; i++) {
    if (compareProdFeatures[i].feature in combinedFeatures) {
      combinedFeatures[compareProdFeatures[i].feature].push(compareProdFeatures[i].value);
    } else {
      combinedFeatures[compareProdFeatures[i].feature] = [null, compareProdFeatures[i].value];
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>COMPARING</div>
          <div onClick={closeModal}>Close</div>
        </div>
        <div className="prod-compare-titles">
          <h3>Feature</h3>
          <h3>
            {featureData.filter(item => item.id.toString() === productId.toString())[0].name}
          </h3>
          <h3>{featureData.filter(item => item.id.toString() === compareProd.toString())[0].name}</h3>
        </div>
        <div className="comparison-area">
          {Object.entries(combinedFeatures).map((item, index) => (
            <div key={index} className="comparison-wrapper">
              <div>{item[0]}</div>
              <div>{item[1][0]}</div>
              <div>{item[1][1]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RPModal;