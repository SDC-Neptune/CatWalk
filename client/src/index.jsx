import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers.jsx';
import RatingsReviews from './components/Ratings_Reviews/RatingsReviews.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

const App = () => {

  const [productId, setProductId] = useState('19089');
<<<<<<< HEAD
  const [allRelatedProducts, setAllRelatedProducts] = useState([]);
  const [allRelatedProductsDetails, setAllRelatedProductsDetails] = useState([]);
  const [allRelatedProductsStylesDetails, setAllRelatedProductsStylesDetails] = useState([]);
=======
  const [productInfo, setProductInfo] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
>>>>>>> 9cf87b7b39092e6c7e4c24e2c947a1e3752de1e9

  const getAllProducts = () => {
    axios.get('/products')
      .then(({data}) => console.log(data));
  };

  const getProduct = (id) => {
    axios.get(`/products/${id}`)
      .then(({data}) => {
        setProductInfo(data);
      });
  };

  const getProductStyles = (id) => {
    axios.get(`/products/${productId}/styles`)
      .then(({data}) => {
        setProductStyles(data);
      });
  };

  const getRelatedProducts = (id) => {
    axios.get(`/products/${productId}/related`)
      .then(({data}) => setAllRelatedProducts(data));
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
    // getAllProducts();
    // getProduct(productId);
    // getProductStyles(productId);
    getRelatedProducts(productId);
    // getAllReviews(productId);
    // getAllReviewsMeta(productId);
    // getQuestionsList(productId);
    // getAnswersList(productId); // empty list
    // getCart(); //empty list
  }, [productId]);

  return (
    <div>
<<<<<<< HEAD
      <Overview productId={productId}/>
      <RelatedProducts
        productId={productId}
        setProductId={setProductId}
        allRelatedProductsDetails={allRelatedProductsDetails}
        allRelatedProducts={allRelatedProducts}
        setAllRelatedProductsDetails={setAllRelatedProductsDetails}
        allRelatedProductsStylesDetails={allRelatedProductsStylesDetails}
        setAllRelatedProductsStylesDetails={setAllRelatedProductsStylesDetails}
      />
=======
      <Overview productId={productId} productInfo={productInfo} productStyles={productStyles}/>
      <RelatedProducts productId={productId}/>
>>>>>>> 9cf87b7b39092e6c7e4c24e2c947a1e3752de1e9
      <QuestionsAnswers productId={productId}/>
      <RatingsReviews productId={productId}/>
    </div>);
};

ReactDOM.render(<App/>, document.getElementById('app'));