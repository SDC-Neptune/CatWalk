import React from 'react';
import axios from 'axios';

const DescriptiveProductInfo = (props) => (

  <div className="descriptive-info">
    <div className="slogan">{props.productInfo.slogan}</div>
    <div className="description">{props.productInfo.description}</div>
    <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
    <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
    <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
  </div>

);

export default DescriptiveProductInfo;