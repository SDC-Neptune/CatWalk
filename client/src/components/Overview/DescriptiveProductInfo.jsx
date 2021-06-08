import React from 'react';
import axios from 'axios';

const DescriptiveProductInfo = (props) => (

  <div className="descriptive-info">
    <div className="slogan">{props.productInfo.slogan}</div>
    <div className="description">{props.productInfo.description}</div>
    <i className="fab fa-facebook fa-2x social" onClick={()=> window.open('http://www.facebook.com', '_blank')}></i>
    <i className="fab fa-twitter fa-2x social" onClick={()=> window.open('http://www.twitter.com', '_blank')}></i>
    <i className="fab fa-pinterest fa-2x social" onClick={()=> window.open('http://www.pinterest.com', '_blank')}></i>
  </div>

);

export default DescriptiveProductInfo;