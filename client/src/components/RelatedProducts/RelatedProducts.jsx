import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RPModal from './RPModal.jsx';
import RelatedProductsCarousel from './RelatedProductsCarousel.jsx';

const RelatedProducts = ({
  productId,
  setProductId,
  allRelatedProducts,
  allRelatedProductsDetails,
  setAllRelatedProductsDetails,
  allRelatedProductsStylesDetails,
  setAllRelatedProductsStylesDetails
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [finalData, setFinalData] = useState([]);

  const d = [];

  useEffect(() => {
    allRelatedProducts.forEach((item) => {
      let obj = {};
      axios.get(`/products/${item}`)
        .then(({data}) => {
          obj.id = data.id;
          obj.name = data.name;
          obj.category = data.category;
          obj.currentPrice = data.default_price;

          setAllRelatedProductsDetails(previous => [...previous, data]);
          axios.get(`/products/${item}/styles`)
            .then(({data}) => {
              // const filteredData = data.results[0];
              obj.originalPrice = data.results[0].original_price;
              obj.img = data.results[0].photos[0].url;
              setAllRelatedProductsStylesDetails(previous => [...previous, data]);
            });
        });
      d.push(obj);
    });
    setFinalData(d);
  }, [allRelatedProducts]);

  return (
    <div className="related-products-component">
      <RPModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <RelatedProductsCarousel
        title='RELATED PRODUCTS'
        setModalOpen={setModalOpen}
        setProductId={setProductId}
        finalData={finalData}
        allRelatedProductsDetails={allRelatedProductsDetails}
        setAllRelatedProductsDetails={setAllRelatedProductsDetails}
      />
      <RelatedProductsCarousel title='YOUR OUTFIT' />
    </div>
  );
};

export default RelatedProducts;