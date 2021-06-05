import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

const App = () => {

  const [productId, setProductId] = useState('19089');

  return (
    <div>
      <Overview productId={productId}/>
      <RelatedProducts productId={productId}/>
      <QuestionsAnswers productId={productId}/>
      <RatingsReviews productId={productId}/>
    </div>);
};

ReactDOM.render(<App/>, document.getElementById('app'));