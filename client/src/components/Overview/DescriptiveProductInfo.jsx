import React from 'react';
import axios from 'axios';

class DescriptiveProductInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slogan: '',
      description: ''
    };
  }

  componentDidMount() {

    axios.get('/api/product', { params: { id: this.props.productId } })
      .then((productInfo) => {
        this.setState({
          slogan: productInfo.data.slogan,
          description: productInfo.data.description
        });
      })
      .catch((error) => {
        console.log('error: ', error);
      });

  }

  render() {
    return (
      <div className="descriptive-info">
        <div className="slogan">{this.state.slogan}</div>
        <div className="description">{this.state.description}</div>
        <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
        <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
        <img className="social" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
      </div>
    );
  }

}

export default DescriptiveProductInfo;