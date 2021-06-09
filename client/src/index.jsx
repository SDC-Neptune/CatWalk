import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingsReviews from './components/Ratings_Reviews/RatingsReviews.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

const App = () => {

  const [productId, setProductId] = useState('19091');
  const [allRelatedProducts, setAllRelatedProducts] = useState([]);
  const [allRelatedProductsDetails, setAllRelatedProductsDetails] = useState([]);
  const [allRelatedProductsStylesDetails, setAllRelatedProductsStylesDetails] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [productStyles, setProductStyles] = useState([]);

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
      .then(({data}) => setAllRelatedProducts([...new Set(data)]));
  };

  // const getAllReviews = (id) => {
  //   axios.get(`/reviews/?product_id=${id}`)
  //     .then(({data}) => console.log(data));
  // };

  // const getAllReviewsMeta = (id) => {
  //   axios.get(`/reviews/meta/?product_id=${id}`)
  //     .then(({data}) => console.log(data));
  // };

  const [questionData, setQuestions] = useState([]);

  const getQuestionsList = (id) => {
    axios.get(`/qa/questions?product_id=${id}`)
      .then(({data}) =>
        setQuestions(data.results)
      );
  };



  // const getCart = () => {
  //   axios.get('/cart')
  //     .then(({data}) => console.log('cart:', data));
  // };

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
    // getRelatedProducts(productId);

    // getAllReviews(productId);
    // getAllReviewsMeta(productId);
    getQuestionsList(productId);
    // getAnswersList(questionData.question_id);
    // getCart(); //empty list
  }, [productId]);


  return (
    <div>
      <Overview productId={productId} productInfo={productInfo} productStyles={productStyles}/>
      <RelatedProducts
        productId={productId}
        setProductId={setProductId}
        allRelatedProducts={allRelatedProducts}
        allRelatedProductsDetails={allRelatedProductsDetails}
        setAllRelatedProductsDetails={setAllRelatedProductsDetails}
        allRelatedProductsStylesDetails={allRelatedProductsStylesDetails}
        setAllRelatedProductsStylesDetails={setAllRelatedProductsStylesDetails}
      />
      <QuestionsAnswers questionData={questionData}/>
      <br></br>
      <RatingsReviews productId={productId}/>
    </div>);
};

ReactDOM.render(<App/>, document.getElementById('app'));