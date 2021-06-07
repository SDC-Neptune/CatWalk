import React from 'react';
import axios from 'axios';

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      mainImageThumbnailIndex: 0,
      firstThumbnailIndex: 0,
      lastThumbnailIndex: 6,
      firstThumbnailVisible: true,
      lastThumbnailVisible: false
    };
  }

  render() {

    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    return (
      <div className="image-gallery">
        <div className="thumbnails">
          {!this.state.firstThumbnailVisible && <i className="thumbnail-arrows up t1"></i>}
          {this.props.productStyles.results[this.props.styleIndex].photos.map((urlObj, index) => {
            if (index >= this.state.firstThumbnailIndex && index <= this.state.lastThumbnailIndex) {
              return <img className="thumbnail" src={urlObj.thumbnail_url}></img>;
            }
          })}
          {!this.state.lastThumbnailVisible && <i className="thumbnail-arrows down t9"></i>}
        </div>
        <i className="thumbnail-arrows left"></i>
        <img src={this.props.productStyles.results[this.props.styleIndex].photos[this.state.mainImageThumbnailIndex].url} className="main-image"></img>
        <i className="thumbnail-arrows right"></i>
      </div>
    );
  }

}

export default ImageGallery;