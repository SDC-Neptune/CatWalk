import React from 'react';
import axios from 'axios';

const DescriptiveProductInfo = (props) => (

  <div className="descriptive-info">
    <div className="slogan">{props.productInfo.slogan}</div>
    <div className="description">{props.productInfo.description}</div>
    <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" onClick={()=> window.open("http://www.facebook.com", "_blank")}></img>
    <img className="social" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png" onClick={()=> window.open("http://www.twitter.com", "_blank")}></img>
    <img className="social" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c52e.png" onClick={()=> window.open("http://www.pinterest.com", "_blank")}></img>
  </div>

);

export default DescriptiveProductInfo;