import React from 'react';


class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="col1-overview image-gallery">
        <i className="fa fa-angle-left fa-5x overview-arrows left"></i>
        <img src="https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-red-canvas-sneaker.slideshow1_1f09ae39-2cf4-458a-974a-1673f9f61291.jpg?v=1610695036" className="main-image"></img>
        <i className="fa fa-angle-right fa-5x overview-arrows right"></i>
      </div>
    );
  }

}

export default ImageGallery;