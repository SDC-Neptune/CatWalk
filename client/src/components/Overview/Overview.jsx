import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';


class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleId: '103466'
    };

    this.updateStyleId.bind(this);
  }

  updateStyleId(id) {
    this.setState({
      styleId: id
    });
  }

  render() {
    return (
      <div>
        <ProductInfo productId={this.props.productId}/>
        <ImageGallery styleId={this.state.styleId}/>
        <StyleSelector styleHandler={this.updateStyleId}/>
      </div>
    );
  }

}

export default Overview;