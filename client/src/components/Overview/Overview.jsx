import React from 'react';
import BasicProductInfo from './BasicProductInfo.jsx';
import DescriptiveProductInfo from './DescriptiveProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';


class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: '',
      styleIndex: 0,
      quantity: undefined,
      quantities: []
    };

    this.updateStyleId = this.updateStyleId.bind(this);
    this.fetchQuantities = this.fetchQuantities.bind(this);
    this.resetQuantityAndSize = this.resetQuantityAndSize.bind(this);
  }

  updateStyleId(stringIndex) {

    var stringArray = stringIndex.split('');
    var number = 0;

    number += Number(stringArray[0]) * 4;
    number += Number(stringArray[1]);

    this.setState({
      styleIndex: number
    }, () => {
      this.fetchQuantities(this.state.size);
    });
  }

  resetQuantityAndSize() {
    this.setState({
      quantity: undefined,
      quantities: [],
      size: ''
    });
  }

  fetchQuantities(size) {

    var input = (Object.values(this.props.productStyles.results[this.state.styleIndex].skus).slice(0));

    var currentSizeQuantity = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i]['size'] === size) {
        currentSizeQuantity += input[i]['quantity'];
      }
    }

    var arrayOfQuantities = [];

    for (var j = 1; j <= currentSizeQuantity; j++) {
      if (j <= 15) {
        arrayOfQuantities.push(j);
      } else {
        break;
      }
    }

    this.setState({
      size: size,
      quantity: currentSizeQuantity,
      quantities: arrayOfQuantities
    });
  }

  render() {
    return (
      <div className="overview">
        <ImageGallery styleIndex={this.state.styleIndex} productStyles={this.props.productStyles}/>
        <BasicProductInfo productId={this.props.productId} productInfo={this.props.productInfo} productReviews={this.props.productReviews}/>
        <StyleSelector styleHandler={this.updateStyleId} productStyles={this.props.productStyles} styleIndex={this.state.styleIndex} fetchQuantitiesHandler={this.fetchQuantities} quantity={this.state.quantity} quantities={this.state.quantities} size={this.state.size} resetQuantityAndSizeHandler={this.resetQuantityAndSize}/>
        <DescriptiveProductInfo productId={this.props.productId} productInfo={this.props.productInfo}/>
      </div>
    );
  }

}

export default Overview;