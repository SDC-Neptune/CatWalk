import React from 'react';

class AddToCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.updateSize = this.updateSize.bind(this);
    this.removeDuplicateSizes = this.removeDuplicateSizes.bind(this);
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

  updateSize(e) {
    e.preventDefault();
    this.props.fetchQuantitiesHandler(e.target.value);
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
          <button className="add-to-bag">Add To Bag</button>
          <button className="favourite">Star</button>
        </div>
      );
    }

    return (
      <div className="cart">
        <select className="select-size" onChange={this.updateSize}>
          {this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0)).length !== 0 &&
            <option value="">Select Size</option>}
          {this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus).slice(0)).map((sku, index) => {
            return <option key={index} value={sku.size}>{sku.size}</option>;
          })}
        </select>
        <select className="choose-quantity">
          <option disabled value="">-</option>
          {this.props.quantity > 0 && this.props.quantities.map((quantity) => {
            return <option key={quantity} value={quantity}>{quantity}</option>;
          })}
        </select>
        <button className="add-to-bag">Add To Bag</button>
        <button className="favourite">Star</button>
      </div>
    );
  }
}

export default AddToCart;