import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RPModal from './RPModal.jsx';
import RelatedProductsCarousel from './RelatedProductsCarousel.jsx';

const RelatedProducts = ({
  productId,
  setProductId,
  allRelatedProducts,
  allRelatedProductsStylesDetails,
  setAllRelatedProductsStylesDetails
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [curData, setCurData] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [compareProd, setCompareProd] = useState('');
  const [totalStars, setTotalStars] = useState(null);
  const [rating, setRating] = useState(null);

  const starCalc = (obj) => {
    let totalRating = 0;
    if (Object.keys(obj).length === 0) {
      return totalRating;
    }
    for (let key in obj) {
      totalRating += Number(key) * Number(obj[key]);
    }
    let totalReviews = Object.values(obj).reduce((acc, val) => Number(acc) + Number(val));
    return Math.round(totalRating / totalReviews * 10) / 10;
  };

  useEffect(() => {
    let obj = {};
    axios.get(`/products/${productId}`)
      .then(({data}) => {
        setFeatureData(previous => [...previous, data]);
        obj.id = data.id;
        obj.name = data.name;
        obj.category = data.category;
        axios.get(`/products/${productId}/styles`)
          .then(({data}) => {
            obj.originalPrice = data.results[0].original_price;
            obj.currentPrice = data.results[0].sale_price;
            obj.img = data.results[0].photos[0].url;
            axios.get(`/reviews/meta/?product_id=${productId}`)
              .then(({data}) => {
                obj.ratings = starCalc(data.ratings);
              });
          });
      });
    setCurData(obj);
  }, [productId]);

  useEffect(() => {
    const tempRelatedData = [];
    allRelatedProducts.forEach((item) => {
      let obj = {};
      axios.get(`/products/${item}`)
        .then(({data}) => {
          setFeatureData(previous => [...previous, data]);
          obj.id = data.id;
          obj.name = data.name;
          obj.category = data.category;

          axios.get(`/products/${item}/styles`)
            .then(({data}) => {
              obj.originalPrice = data.results[0].original_price;
              obj.currentPrice = data.results[0].sale_price;
              obj.img = data.results[0].photos[0].url;
              setAllRelatedProductsStylesDetails(previous => [...previous, data]);
              axios.get(`/reviews/meta/?product_id=${item}`)
                .then(({data}) => {
                  obj.ratings = starCalc(data.ratings);
                });
            });
        });
      tempRelatedData.push(obj);
    });
    setFinalData(tempRelatedData);
  }, [allRelatedProducts]);

  return (
    <div className="related-products-component" id="related-products">
      <RPModal
        featureData={featureData}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        compareProd={compareProd}
        productId={productId}
      />
      <RelatedProductsCarousel
        title='RELATED PRODUCTS'
        setModalOpen={setModalOpen}
        setProductId={setProductId}
        finalData={finalData}
        curData={curData}
        featureData={featureData}
        setFeatureData={setFeatureData}
        setCompareProd={setCompareProd}
      />
      <RelatedProductsCarousel
        title='YOUR OUTFIT'
        setProductId={setProductId}
        curData={curData}
      />
    </div>
  );
};

export default RelatedProducts;