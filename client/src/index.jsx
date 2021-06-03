import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';

const App = () => {

  return (
    <div>
      <Overview/>
      <RelatedProducts/>
      <QuestionsAnswers/>
      <RatingsReviews/>
    </div>);
};

ReactDOM.render(<App/>, document.getElementById('app'));