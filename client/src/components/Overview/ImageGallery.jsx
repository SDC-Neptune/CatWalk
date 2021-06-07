import React from 'react';
import axios from 'axios';

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainImageThumbnailIndex: 0,
      firstThumbnailIndex: 0,
      lastThumbnailIndex: 6,
      firstThumbnailVisible: false,
      lastThumbnailVisible: true
    };

    this.showPreviousThumbnail = this.showPreviousThumbnail.bind(this);
    this.showNextThumbnail = this.showNextThumbnail.bind(this);

  }

  showNextThumbnail() {

    var currentFirst = this.state.firstThumbnailIndex;
    var currentLast = this.state.lastThumbnailIndex;
    var mainImageIndex = this.state.mainImageThumbnailIndex;

    this.setState({
      firstThumbnailIndex: currentFirst + 1,
      lastThumbnailIndex: currentLast + 1,
      mainImageThumbnailIndex: mainImageIndex + 1
    });
  }

  showPreviousThumbnail() {

    var currentFirst = this.state.firstThumbnailIndex;
    var currentLast = this.state.lastThumbnailIndex;
    var mainImageIndex = this.state.mainImageThumbnailIndex;

    this.setState({
      firstThumbnailIndex: currentFirst - 1,
      lastThumbnailIndex: currentLast - 1,
      mainImageThumbnailIndex: mainImageIndex - 1
    });
  }

  render() {

    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    return (
      <div className="image-gallery">
        <div className="thumbnails">
          {!this.state.firstThumbnailVisible && <i className="thumbnail-arrows up-is-not-visible t1"></i>}
          {this.state.firstThumbnailVisible && <i className="thumbnail-arrows up-is-visible t1" onClick={this.showPreviousThumbnail}></i>}
          {this.props.productStyles.results[this.props.styleIndex].photos.map((urlObj, index) => {
            if (index >= this.state.firstThumbnailIndex && index <= this.state.lastThumbnailIndex) {
              return <img className="thumbnail" src={urlObj.thumbnail_url}></img>;
            }
          })}
          {!this.state.lastThumbnailVisible && <i className="thumbnail-arrows down-is-not-visible t9"></i>}
          {this.state.lastThumbnailVisible && <i className="thumbnail-arrows down-is-visible t9" onClick={this.showNextThumbnail}></i>}
        </div>
        <i className="thumbnail-arrows left" onClick={this.showPreviousThumbnail}></i>
        <img src={this.props.productStyles.results[this.props.styleIndex].photos[this.state.mainImageThumbnailIndex].url} className="main-image"></img>
        <i className="thumbnail-arrows right" onClick={this.showNextThumbnail}></i>
      </div>
    );
  }

}

export default ImageGallery;