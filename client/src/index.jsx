import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import SalesArea from './components/SalesArea.jsx';
import Navbar from './components/Navbar.jsx';
import RatingsReviews from './components/Ratings_Reviews/RatingsReviews.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

const App = () => {

  //const [productId, setProductId] = useState('19089');
  const [productId, setProductId] = useState((Math.floor(Math.random() * (20000 - 19089 + 1)) + 19089).toString());

  const [allRelatedProducts, setAllRelatedProducts] = useState([]);
  const [allRelatedProductsStylesDetails, setAllRelatedProductsStylesDetails] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [productReviews, setProductReviews] = useState(null);
  const [questionData, setQuestions] = useState([]);

  // const getAllProducts = () => {
  //   axios.get('/products')
  //     .then(({data}) => console.log(data));
  // };

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

  const getAllReviewsMeta = (id) => {
    axios.get(`/reviews/meta/?product_id=${id}`)
      .then(({data}) => {
        setProductReviews(data);
      });
  };

  const getQuestionsList = (id) => {
    axios.get(`/qa/questions?product_id=${id}`)
      .then(({data}) =>
        setQuestions(data.results)
      );
  };

  const postInteractions = (data) => {
    axios.post('/interactions', data)
      .then((response) => console.log(response))
      .catch((err) => console.log('Error: ', err));
  };


  useEffect(() => {
    getProduct(productId);
    getProductStyles(productId);
    getRelatedProducts(productId);
    getAllReviewsMeta(productId);
    getQuestionsList(productId);
  }, [productId]);


  const handleAllClicks = (e) => {
    e.stopPropagation();
    const el = e.target.localName;
    const d = new Date();
    const t = d.toString().slice(0, 24);
    let w;
    if (e.target.closest('#overview')) {
      w = 'Overview';
    }
    if (e.target.closest('#related-products')) {
      w = 'Related Products';
    }
    if (e.target.closest('#questions-answers')) {
      w = 'Questions and Answers';
    }
    if (e.target.closest('#ratings-reviews')) {
      w = 'Ratings';
    }
    const interaction = {
      'element': el,
      'time': t,
      'widget': w
    };
    postInteractions(interaction);

  };

  return (
    <div onClick={handleAllClicks}>
      <Navbar setProductId={setProductId} />
      <Overview productId={productId} productInfo={productInfo} productStyles={productStyles} productReviews={productReviews}/>
      <RelatedProducts
        productId={productId}
        setProductId={setProductId}
        allRelatedProducts={allRelatedProducts}
        allRelatedProductsStylesDetails={allRelatedProductsStylesDetails}
        setAllRelatedProductsStylesDetails={setAllRelatedProductsStylesDetails}
      />
      <SalesArea />
      <QuestionsAnswers questionData={questionData}
        productId={productId}
        productInfo={productInfo} />
      <RatingsReviews props={productReviews}
        productInfo={productInfo}
      />
    </div>);
};

ReactDOM.render(<App/>, document.getElementById('app'));