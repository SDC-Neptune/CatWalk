import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers.jsx';
import RatingsReviews from './components/RatingsReviews.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

const App = () => {

  const [productId, setProductId] = useState('19089');
  const [productInfo, setProductInfo] = useState([]);

  const getAllProducts = () => {
    axios.get('/products')
      .then(({data}) => console.log(data));
  };

  const getProduct = (id) => {
    axios.get(`/products/${id}`)
      .then(({data}) => {
        console.log(data);
        setProductInfo(data);
      });
  };

  const getProductStyles = (id) => {
    axios.get(`/products/${productId}/styles`)
      .then(({data}) => console.log(data));
  };

  const getRelatedProducts = (id) => {
    axios.get(`/products/${productId}/related`)
      .then(({data}) => console.log(data));
  };

  const getAllReviews = (id) => {
    axios.get(`/reviews/?product_id=${id}`)
      .then(({data}) => console.log(data));
  };

  const getAllReviewsMeta = (id) => {
    axios.get(`/reviews/meta/?product_id=${id}`)
      .then(({data}) => console.log(data));
  };

  const getQuestionsList = (id) => {
    axios.get(`/qa/questions?product_id=${id}`)
      .then(({data}) => console.log(data));
  };

  const getAnswersList = (id) => {
    axios.get(`/qa/questions/${id}/answers`)
      .then(({data}) => console.log(data));
  };

  const getCart = () => {
    axios.get('/cart')
      .then(({data}) => console.log(data));
  };

  // Add a Review
  // Mark Review as Helpful
  // Report Review
  // Add a Question
  // Add an Answer
  // Mark Question as Helpful
  // Report Question
  // Mark Answer as Helpful
  // Report Answer
  // Add to Cart
  // Report Answer
  // Log an Interaction

  useEffect(() => {
    getAllProducts();
    getProduct(productId);
    getProductStyles(productId);
    getRelatedProducts(productId);
    getAllReviews(productId);
    getAllReviewsMeta(productId);
    getQuestionsList(productId);
    getAnswersList(productId); // empty list
    getCart(); //empty list
  }, []);

  return (
    <div>
      <Overview productId={productId} productInfo={productInfo}/>
      <RelatedProducts productId={productId}/>
      <QuestionsAnswers productId={productId}/>
      <RatingsReviews productId={productId}/>
    </div>);
};

ReactDOM.render(<App/>, document.getElementById('app'));