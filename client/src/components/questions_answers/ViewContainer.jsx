import React from 'react';
import Search from './Search.jsx';
import QuestionsView from './QuestionsView.jsx';

const ViewContainer = ({productId}) => {
  return (
    <>
      < Search />
      < QuestionsView productId={productId}/>
    </>
  );

};

export default ViewContainer;