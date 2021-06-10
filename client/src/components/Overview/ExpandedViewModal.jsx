import React from 'react';

class ExpandedViewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClickOnThumbnail = this.handleClickOnThumbnail.bind(this);
  }

  handleClickOnThumbnail(index) {
    this.props.clickOnThumbnailHandler(index);
  }

  render() {
    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    return (
      <div className="expanded-view-overlay">
        <div className="expanded-view-modal">
          <button type="button" className="expanded-view-modal-button" onClick={this.props.toggleModal}>Close</button>
          <div className="expanded-view-thumbnails">
            {!this.props.firstThumbnailVisible && <i className="expanded-view-up-is-visible expanded-view-arrow-thumbnail" onClick={this.props.previousThumbnailClickHandler}></i>}
            {this.props.productStyles.results[this.props.styleIndex].photos.map((urlObj, index, array) => {
              if (index >= this.props.firstThumbnailIndex && index <= this.props.lastThumbnailIndex && index !== this.props.mainImageThumbnailIndex) {
                return <i className="expanded-view-thumbnail far fa-images" onClick={this.handleClickOnThumbnail.bind(this, index)}></i>;
              } else if (index >= this.props.firstThumbnailIndex && index <= this.props.lastThumbnailIndex && index === this.props.mainImageThumbnailIndex) {
                return <i className="expanded-view-thumbnail far fa-images expanded-view-selected" onClick={this.handleClickOnThumbnail.bind(this, index)}></i>;
              } else if (index > this.props.lastThumbnailIndex && index === array.length - 1) {
                return <i className="expanded-view-down-is-visible expanded-view-arrow-thumbnail" onClick={this.props.nextThumbnailClickHandler} key={index}></i>;
              }
            })}
          </div>
          {this.props.mainImageThumbnailIndex !== 0 && <i className="main-image-arrows left expanded-main-arrow-left" onClick={this.props.previousMainClickHandler}></i>}
          <img src={this.props.productStyles.results[this.props.styleIndex].photos[this.props.mainImageThumbnailIndex].url} className="expanded-view-main-image"></img>
          {this.props.numberOfThumbnails !== (this.props.mainImageThumbnailIndex + 1) && <i className="main-image-arrows right expanded-main-arrow-right" onClick={this.props.nextMainClickHandler}></i>}
        </div>
      </div>);
  }

}

export default ExpandedViewModal;