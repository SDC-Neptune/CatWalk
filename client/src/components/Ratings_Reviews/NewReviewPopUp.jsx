import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewReviewPopUp = ({props, handleChange}) => {
  const [productReviews, setProductReviews] = useState(null);

  const getAllReviewsMeta = (id) => {
    axios.get(`/reviews/meta/?product_id=${id}`)
      .then(({data}) => {
        setProductReviews(data);
      });
  };

  useEffect(() => {
    getAllReviewsMeta(props.product);
  }, [props.product]);

  return (
    <div className='modal-overlay-newReview'>
      <div className='modal-newReview'>
        <div>Write Your Review</div>
        <div>About the [Product Name Here]</div>
        <div>☆☆☆☆☆</div>
        <div>
          <span>Would you recommend this product?</span>
          <input type='radio' name='recommend' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='recommend' value='No'/>
          <label>No</label>
        </div>

        {!productReviews ? '' : Object.keys(productReviews.characteristics).map(item => {
          return (
            <div>
              <span>{item}</span>
              <input type='radio' name={item} value='1'/>
              <label>1</label>
              <input type='radio' name={item} value='2'/>
              <label>2</label>
              <input type='radio' name={item} value='3'/>
              <label>3</label>
              <input type='radio' name={item} value='4'/>
              <label>4</label>
              <input type='radio' name={item} value='5'/>
              <label>5</label>
            </div>
          );
        })}
        <div>
          <span>Review Summary</span>
          <input type='text'></input>
        </div>
        <div>
          <span>Review Body</span>
          <input type='text'></input>
        </div>
        <div>
          <span>Nickname</span>
          <input type='text'></input>
        </div>
        <div>
          <span>Email</span>
          <input type='text'></input>
        </div>
        <br></br>
        <button className='reviewButton' onClick={handleChange}>Submit</button>
      </div>
    </div>
  );
};

export default NewReviewPopUp;
