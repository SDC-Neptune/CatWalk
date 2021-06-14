import React from 'react';
import axios from 'axios';
import ExpandedViewModal from './ExpandedViewModal.jsx';

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainImageThumbnailIndex: 0,
      firstThumbnailIndex: 0,
      lastThumbnailIndex: 6,
      firstThumbnailVisible: true,
      lastThumbnailVisible: true,
      numberOfThumbnails: undefined,
      modal: false
    };

    this.previousThumbnailClick = this.previousThumbnailClick.bind(this);
    this.nextThumbnailClick = this.nextThumbnailClick.bind(this);
    this.previousMainClick = this.previousMainClick.bind(this);
    this.nextMainClick = this.nextMainClick.bind(this);
    this.clickOnThumbnail = this.clickOnThumbnail.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    var toggledValue = !this.state.modal;
    this.setState({
      modal: toggledValue
    });
  }

  clickOnThumbnail(index) {
    var countOfThumbnails = this.props.productStyles.results[this.props.styleIndex].photos.length || 0;

    this.setState({
      mainImageThumbnailIndex: index,
      numberOfThumbnails: countOfThumbnails
    });
  }

  nextThumbnailClick() {
    var currentFirst = this.state.firstThumbnailIndex;
    var currentLast = this.state.lastThumbnailIndex;
    var countOfThumbnails = this.props.productStyles.results[this.props.styleIndex].photos.length || 0;

    this.setState({
      firstThumbnailIndex: currentFirst + 1,
      lastThumbnailIndex: currentLast + 1,
      firstThumbnailVisible: false,
      numberOfThumbnails: countOfThumbnails
    });
  }

  previousThumbnailClick() {
    var currentFirst = Math.max(0, this.state.firstThumbnailIndex);
    var currentLast = this.state.lastThumbnailIndex;
    var countOfThumbnails = this.props.productStyles.results[this.props.styleIndex].photos.length || 0;

    if (currentFirst === 0 || currentFirst - 1 === 0) {
      var willFirstBecomeVisible = true;
    } else {
      var willFirstBecomeVisible = false;
    }

    if (currentFirst === 0) {
      this.setState({
        firstThumbnailVisible: true,
        numberOfThumbnails: countOfThumbnails
      });
    } else {
      this.setState({
        firstThumbnailIndex: currentFirst - 1,
        lastThumbnailIndex: currentLast - 1,
        firstThumbnailVisible: willFirstBecomeVisible,
        numberOfThumbnails: countOfThumbnails
      });
    }
  }

  previousMainClick() {
    var currentFirst = this.state.firstThumbnailIndex;
    var currentLast = this.state.lastThumbnailIndex;
    var mainImageIndex = this.state.mainImageThumbnailIndex;
    var countOfThumbnails = this.props.productStyles.results[this.props.styleIndex].photos.length || 0;

    if (this.state.lastThumbnailIndex - this.state.firstThumbnailIndex < 6) {
      this.setState({
        mainImageThumbnailIndex: mainImageIndex - 1,
        numberOfThumbnails: countOfThumbnails
      });
    // if previous main image is in thumbnail list currently
    } else if (this.state.mainImageThumbnailIndex - 1 >= this.state.firstThumbnailIndex && this.state.mainImageThumbnailIndex - 1 <= this.state.lastThumbnailIndex) {
      this.setState({
        mainImageThumbnailIndex: mainImageIndex - 1,
        numberOfThumbnails: countOfThumbnails
      });
    // if previous main image is still behind first thumbnail
    } else if (this.state.mainImageThumbnailIndex - 1 < this.state.firstThumbnailIndex) {
      var distance = this.state.firstThumbnailIndex - (this.state.mainImageThumbnailIndex - 1);
      this.setState({
        mainImageThumbnailIndex: mainImageIndex - 1,
        firstThumbnailIndex: mainImageIndex - 1,
        lastThumbnailIndex: currentLast - distance,
        numberOfThumbnails: countOfThumbnails
      });
    //if previous main image is in front of last thumbnail
    } else if (this.state.mainImageThumbnailIndex - 1 > this.state.lastThumbnailIndex) {
      var distance = (this.state.mainImageThumbnailIndex - 1) - this.state.lastThumbnailIndex;
      this.setState({
        mainImageThumbnailIndex: mainImageIndex - 1,
        firstThumbnailIndex: currentFirst + distance,
        lastThumbnailIndex: mainImageIndex - 1,
        numberOfThumbnails: countOfThumbnails
      });
    }
  }

  nextMainClick() {
    var mainImageIndex = this.state.mainImageThumbnailIndex;
    var currentFirst = this.state.firstThumbnailIndex;
    var currentLast = this.state.lastThumbnailIndex;
    var countOfThumbnails = this.props.productStyles.results[this.props.styleIndex].photos.length || 0;

    // if less than 7 thumbnails on screen
    if (this.state.lastThumbnailIndex - this.state.firstThumbnailIndex < 6) {
      this.setState({
        mainImageThumbnailIndex: mainImageIndex + 1,
        numberOfThumbnails: countOfThumbnails
      });
    // if next main image is in thumbnail list currently
    } else if (this.state.mainImageThumbnailIndex + 1 >= this.state.firstThumbnailIndex && this.state.mainImageThumbnailIndex + 1 <= this.state.lastThumbnailIndex) {
      this.setState({
        mainImageThumbnailIndex: mainImageIndex + 1,
        numberOfThumbnails: countOfThumbnails
      });
    // if next main image is still behind first thumbnail
    } else if (this.state.mainImageThumbnailIndex + 1 < this.state.firstThumbnailIndex) {
      var distance = this.state.firstThumbnailIndex - (this.state.mainImageThumbnailIndex + 1);
      this.setState({
        mainImageThumbnailIndex: mainImageIndex + 1,
        firstThumbnailIndex: mainImageIndex + 1,
        lastThumbnailIndex: currentLast - distance,
        numberOfThumbnails: countOfThumbnails
      }); //if next main image is in front of last thumbnail
    } else if (this.state.mainImageThumbnailIndex + 1 > this.state.lastThumbnailIndex) {
      var distance = (this.state.mainImageThumbnailIndex + 1) - this.state.lastThumbnailIndex;
      this.setState({
        mainImageThumbnailIndex: mainImageIndex + 1,
        firstThumbnailIndex: currentFirst + distance,
        lastThumbnailIndex: mainImageIndex + 1,
        firstThumbnailVisible: false,
        numberOfThumbnails: countOfThumbnails
      });
    }
  }

  render() {

    //Using functional components, you can delay the first render until all props have been received. TBD if can be done with class components?
    console.log('this.id: ', (this.props.productStyles.product_id || 'not there yet'));

    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    return (
      <div className="image-gallery">
        <div className="thumbnails">
          {!this.state.firstThumbnailVisible && <i className="thumbnail-arrows up-is-visible" onClick={this.previousThumbnailClick}></i>}
          {this.props.productStyles.results[this.props.styleIndex].photos.length > 0 && this.props.productStyles.results[this.props.styleIndex].photos[0].thumbnail_url !== null && this.props.productStyles.results[this.props.styleIndex].photos.map((urlObj, index, array) => {
            if (index >= this.state.firstThumbnailIndex && index <= this.state.lastThumbnailIndex && index !== this.state.mainImageThumbnailIndex) {
              return <img className="thumbnail" src={urlObj.thumbnail_url} key={index} onClick={this.clickOnThumbnail.bind(this, index)}></img>;
            } else if (index >= this.state.firstThumbnailIndex && index <= this.state.lastThumbnailIndex && index === this.state.mainImageThumbnailIndex) {
              return <img className="thumbnail current-tn" src={urlObj.thumbnail_url} key={index} onClick={this.clickOnThumbnail.bind(this, index)}></img>;
            } else if (index > this.state.lastThumbnailIndex && index === array.length - 1) {
              return <i className="thumbnail-arrows down-is-visible" onClick={this.nextThumbnailClick} key={index}></i>;
            }
          })}
        </div>
        {this.state.mainImageThumbnailIndex !== 0 && <i className="main-image-arrows left" onClick={this.previousMainClick}></i>}
        {this.props.productStyles.results[this.props.styleIndex].photos.length > 0 && this.props.productStyles.results[this.props.styleIndex].photos[0].thumbnail_url !== null && <img src={this.props.productStyles.results[this.props.styleIndex].photos[this.state.mainImageThumbnailIndex].url} className="main-image" onClick={this.toggleModal}></img>}
        {(this.state.numberOfThumbnails !== (this.state.mainImageThumbnailIndex + 1)) && this.props.productStyles.results[this.props.styleIndex].photos.length > 1 && <i className="main-image-arrows right" onClick={this.nextMainClick}></i>}
        {this.state.modal &&
            <ExpandedViewModal toggleModal={this.toggleModal} styleIndex={this.props.styleIndex} productStyles={this.props.productStyles} mainImageThumbnailIndex={this.state.mainImageThumbnailIndex} clickOnThumbnailHandler={this.clickOnThumbnail} previousMainClickHandler={this.previousMainClick} nextMainClickHandler={this.nextMainClick} firstThumbnailIndex={this.state.firstThumbnailIndex} lastThumbnailIndex={this.state.lastThumbnailIndex} numberOfThumbnails={this.state.numberOfThumbnails} nextThumbnailClickHandler={this.nextThumbnailClick} previousThumbnailClickHandler={this.previousThumbnailClick} firstThumbnailVisible={this.state.firstThumbnailVisible} lastThumbnailVisible={this.state.lastThumbnailVisible}/>
        }
      </div>
    );
  }

}

export default ImageGallery;