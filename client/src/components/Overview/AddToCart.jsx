import React from 'react';
import axios from 'axios';

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

      if (document.getElementById('no-selected-size-message') === null) {
        var message = document.createElement('h4');
        message.innerHTML = 'Please select size!';
        message.id = 'no-selected-size-message';
        document.getElementById('checkout-cart').append(message);
      }
    } else if (currentValueInDropdown !== '' && currentSize !== '' && selectedQuantity > 0) {

      if (document.getElementById('no-selected-size-message') !== null) {
        document.getElementById('no-selected-size-message').remove();
      }

      var index;
      var skuObjValues = Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0);
      var skuIds = Object.keys(this.props.productStyles.results[this.props.styleIndex].skus);

      for (var k = 0; k < skuObjValues.length; k++) {
        if (skuObjValues[k]['size'] === this.props.size) {
          index = k;
        }
      }

      var skuId = skuIds[index];

      var options = {
        'sku_id': skuId,
      };

      axios.post('/cart', options)
        .then((response) => {
          var successMessage = document.createElement('h3');
          successMessage.innerHTML = 'Added to cart!';
          successMessage.id = 'added-to-cart-success-message';
          document.getElementById('checkout-cart').append(successMessage);
          setTimeout(() => {
            document.getElementById('added-to-cart-success-message').remove();
          }, 2000);
          document.getElementById('select').value = '';
          this.props.resetQuantityAndSizeHandler();
        })
        .catch((error) => {
          var errorMessage = document.createElement('h3');
          errorMessage.innerHTML = 'Unable to add to cart';
          errorMessage.id = 'added-to-cart-error-message';
          document.getElementById('checkout-cart').append(errorMessage);
          setTimeout(() => {
            document.getElementById('added-to-cart-error-message').remove();
          }, 2000);
        });
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
      <div className="cart" id="checkout-cart">
        <select className="select-size" role="select-size" data-testid="select-size" id="select" onChange={this.updateSize}>
          {this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0)).length !== 0 &&
            <option value="">Select Size</option>}
          {this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0)).map((sku, index) => {
            return <option key={index} value={sku.size}>{sku.size}</option>;
          })}
        </select>
        <select className="choose-quantity" id="select-quantity" role="choose-quantity" data-testid="choose-quantity" onChange={this.updateSelectedQuantity}>
          <option disabled value="">-</option>
          {this.props.quantity > 0 && this.props.quantities.map((quantity) => {
            return <option key={quantity} value={quantity}>{quantity}</option>;
          })}
        </select>
        <button className="add-to-bag-button" onClick={this.addToBag} role="add-to-bag">Add To Bag</button>
      </div>
    );
  }
}

export default AddToCart;