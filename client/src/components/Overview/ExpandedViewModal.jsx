import React from 'react';

class ExpandedViewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    return (
      <div className="expanded-view-overlay">
        <div className="expanded-view-modal">
          <button type="button" className="expanded-view-modal-button" onClick={this.props.toggleModal}>Close</button>
          {this.props.mainImageThumbnailIndex !== 0 && <i className="main-image-arrows left expanded-main-arrow-left" onClick={this.props.previousMainClickHandler}></i>}
          <img src={this.props.productStyles.results[this.props.styleIndex].photos[this.props.mainImageThumbnailIndex].url} className="expanded-view-main-image"></img>
          {this.props.numberOfThumbnails !== (this.props.mainImageThumbnailIndex + 1) && <i className="main-image-arrows right expanded-main-arrow-right" onClick={this.props.nextMainClickHandler}></i>}
        </div>
      </div>);
  }

}

export default ExpandedViewModal;