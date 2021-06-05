import React from 'react';


class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="image-gallery">
        <div className="thumbnails">
          <i className="fa fa-angle-up fa-3x thumbnail-arrows"></i>
          <img src="https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-red-canvas-sneaker.slideshow1_1f09ae39-2cf4-458a-974a-1673f9f61291.jpg?v=1610695036" className="thumbnail"></img>
          <img src="https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-red-canvas-sneaker.slideshow1_1f09ae39-2cf4-458a-974a-1673f9f61291.jpg?v=1610695036" className="thumbnail"></img>
          <img src="https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-red-canvas-sneaker.slideshow1_1f09ae39-2cf4-458a-974a-1673f9f61291.jpg?v=1610695036" className="thumbnail"></img>
          <img src="https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-red-canvas-sneaker.slideshow1_1f09ae39-2cf4-458a-974a-1673f9f61291.jpg?v=1610695036" className="thumbnail"></img>
          <img src="https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-red-canvas-sneaker.slideshow1_1f09ae39-2cf4-458a-974a-1673f9f61291.jpg?v=1610695036" className="thumbnail"></img>
          <i className="fa fa-angle-down fa-3x thumbnail-arrows"></i>
        </div>
        <i className="fa fa-angle-left fa-5x overview-arrows"></i>
        <img src="https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-red-canvas-sneaker.slideshow1_1f09ae39-2cf4-458a-974a-1673f9f61291.jpg?v=1610695036" className="main-image"></img>
        <i className="fa fa-angle-right fa-5x overview-arrows"></i>
      </div>
    );
  }

}

export default ImageGallery;