import React, {useEffect } from 'react';

const RelatedProductAddToOutfitCard = ({ curData, outfitList, setOutfitList }) => {

  const addToYourOutfitHandler = () => {
    const idArr = outfitList.map(item => item.id);
    if (!idArr.includes(curData.id)) {
      setOutfitList(prev => [...prev, curData]);
    }
  };

  useEffect(() => {
    localStorage.setItem('yourOutfitList', JSON.stringify(outfitList));
  }, [outfitList]);

  return (
    <div className="add-to-outfit-card">
      <i className="fas fa-plus fa-5x add-icon" onClick={addToYourOutfitHandler}></i>
      <div className="add-to-outfit">Add to Outfit</div>
    </div>
  );
};

export default RelatedProductAddToOutfitCard;