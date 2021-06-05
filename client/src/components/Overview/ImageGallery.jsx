import React from 'react';


class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
    };
  }

  render() {
    return (
      <div className="image-gallery">
        <div className="thumbnails">
          <i class="thumbnail-arrows up t1"></i>
          <img src={this.state.img} className="thumbnail t2"></img>
          <img src={this.state.img} className="thumbnail t3"></img>
          <img src={this.state.img} className="thumbnail t4"></img>
          <img src={this.state.img} className="thumbnail t5"></img>
          <img src={this.state.img} className="thumbnail t6"></img>
          <img src={this.state.img} className="thumbnail t7"></img>
          <img src={this.state.img} className="thumbnail t8"></img>
          <i class="thumbnail-arrows down t9"></i>
        </div>
        <i className="fa fa-angle-left fa-5x main-image-arrows left"></i>
        <img src={this.state.img} className="main-image"></img>
        <i className="fa fa-angle-right fa-5x main-image-arrows right"></i>
      </div>
    );
  }

}

export default ImageGallery;