import React from 'react';
import BasicProductInfo from './BasicProductInfo.jsx';
import DescriptiveProductInfo from './DescriptiveProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';


class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleId: '103466'
    };

    this.updateStyleId = this.updateStyleId.bind(this);
  }

  updateStyleId(id) {
    this.setState({
      styleId: id
    });
  }

  render() {
    return (
      <div className="overview">
        <ImageGallery styleId={this.state.styleId}/>
        <BasicProductInfo productId={this.props.productId}/>
        <StyleSelector styleHandler={this.updateStyleId} productId={this.props.productId}/>
        <DescriptiveProductInfo productId={this.props.productId}/>
      </div>
    );
  }

}

export default Overview;