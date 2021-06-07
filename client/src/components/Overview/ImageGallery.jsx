import React from 'react';
import axios from 'axios';

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
    };

    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="image-gallery">
        <div className="thumbnails">
          <i className="thumbnail-arrows up t1"></i>
          <img src={this.state.img} className="thumbnail t2"></img>
          <img src={this.state.img} className="thumbnail t3"></img>
          <img src={this.state.img} className="thumbnail t4"></img>
          <img src={this.state.img} className="thumbnail t5"></img>
          <img src={this.state.img} className="thumbnail t6"></img>
          <img src={this.state.img} className="thumbnail t7"></img>
          <img src={this.state.img} className="thumbnail t8"></img>
          <i className="thumbnail-arrows down t9"></i>
        </div>
        <i className="thumbnail-arrows left"></i>
        <img src={this.state.img} className="main-image"></img>
        <i className="thumbnail-arrows right"></i>
      </div>
    );
  }

}

export default ImageGallery;