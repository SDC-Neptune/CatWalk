import React from 'react';

class AddToCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuantity: 0
    };
    this.updateSize = this.updateSize.bind(this);
    this.removeDuplicateSizes = this.removeDuplicateSizes.bind(this);
    this.addToBag = this.addToBag.bind(this);
    this.updateSelectedQuantity = this.updateSelectedQuantity.bind(this);
  }

  addToBag(e) {

    e.preventDefault();

    var currentValueInDropdown = document.getElementById('select').value;
    var currentSize = this.props.size;
    var selectedQuantity = this.state.selectedQuantity;

    if (currentValueInDropdown === '') {

      // alert('Please select size');
      var element = document.getElementById('select');
      var test = document.createElement('h1');
      test.innerHTML = 'testing';
      document.body.appendChild(test);
      //Unable to determine how to dynamically open size dropdown.
    } else if (currentValueInDropdown !== '' && currentSize !== '' && selectedQuantity > 0) {
      console.log('we will submit a post request');
    }

  }

  removeDuplicateSizes(arrayOfSizes) {

    var arrayOfSizesCopy = arrayOfSizes.slice(0);
    var resultarray = [];
    var sizes = {};

    for (var i = 0; i < arrayOfSizesCopy.length; i++) {
      var currentSize = arrayOfSizesCopy[i]['size'];
      if (sizes[currentSize] === undefined && arrayOfSizes[i]['size'] !== null && arrayOfSizes[i]['quantity'] !== null && arrayOfSizes[i]['quantity'] !== 0) {
        sizes[currentSize] = true;
        resultarray.push(arrayOfSizesCopy[i]);
      }
    }
    return resultarray;
  }

  updateSelectedQuantity(e) {
    e.preventDefault();

    this.setState({
      selectedQuantity: e.target.value
    });

  }

  updateSize(e) {
    e.preventDefault();
    if (this.state.selectedQuantity === 0) {
      this.setState({
        selectedQuantity: 1
      }, () => {
        this.props.fetchQuantitiesHandler(e.target.value);
      });
    } else {
      this.props.fetchQuantitiesHandler(e.target.value);
    }
  }

  render() {
    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    if (this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0)).length === 0) {
      return (
        <div className="cart">
          <select disabled value="" className="select-size" onChange={this.updateSize}>
            <option value="">OUT OF STOCK</option>
          </select>
          <select disabled value="" className="choose-quantity">
            <option disabled value="">-</option>
          </select>
        </div>
      );
    }

    return (
      <div className="cart">
        <select className="select-size" id="select" onChange={this.updateSize}>
          {this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0)).length !== 0 &&
            <option value="">Select Size</option>}
          {this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0)).map((sku, index) => {
            return <option key={index} value={sku.size}>{sku.size}</option>;
          })}
        </select>
        <select className="choose-quantity" onChange={this.updateSelectedQuantity}>
          <option disabled value="">-</option>
          {this.props.quantity > 0 && this.props.quantities.map((quantity) => {
            return <option key={quantity} value={quantity}>{quantity}</option>;
          })}
        </select>
        <button className="add-to-bag" onClick={this.addToBag}>Add To Bag</button>
      </div>
    );
  }
}

export default AddToCart;