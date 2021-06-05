import React from 'react';

class DescriptiveProductInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.'
    };
  }

  render() {
    return (
      <div className="descriptive-info">
        <div>Slogan: {this.state.slogan}</div>
        <div>Description: {this.state.description}</div>
        <h3>Share</h3>
        <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
        <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
        <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
      </div>
    );
  }

}

export default DescriptiveProductInfo;