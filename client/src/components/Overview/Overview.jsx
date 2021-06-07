import React from 'react';
import BasicProductInfo from './BasicProductInfo.jsx';
import DescriptiveProductInfo from './DescriptiveProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';


class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleIndex: 0
    };

    this.updateStyleId = this.updateStyleId.bind(this);
  }

  updateStyleId(stringIndex) {

    var stringArray = stringIndex.split('');
    var number = 0;

    number += Number(stringArray[0]) * 4;
    number += Number(stringArray[1]);

    this.setState({
      styleIndex: number
    });
  }

  render() {
    return (
      <div className="overview">
        <ImageGallery styleIndex={this.state.styleIndex} productStyles={this.props.productStyles}/>
        <BasicProductInfo productId={this.props.productId} productInfo={this.props.productInfo}/>
        <StyleSelector styleHandler={this.updateStyleId} productStyles={this.props.productStyles} styleIndex={this.state.styleIndex}/>
        <DescriptiveProductInfo productId={this.props.productId} productInfo={this.props.productInfo}/>
      </div>
    );
  }

}

export default Overview;