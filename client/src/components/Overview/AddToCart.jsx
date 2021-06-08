import React from 'react';

class AddToCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: '',
      quantity: '-',

    };
    this.updateSize = this.updateSize.bind(this);
    this.removeDuplicateSizes = this.removeDuplicateSizes.bind(this);
  }

  removeDuplicateSizes(arrayOfSizes) {

    var resultarray = [];
    var sizes = {};

    for (var i = 0; i < arrayOfSizes.length; i++) {
      var currentSize = arrayOfSizes[i]['size'];
      if (sizes[currentSize] === undefined) {
        sizes[currentSize] = true;
        resultarray.push(arrayOfSizes[i]);
      } else {
        var index;
        for (var j = 0; j < resultarray.length; j++) {
          if (resultarray[j]['size'] === currentSize) {
            index = j;
            break;
          }
        }
        resultarray[index]['quantity'] += arrayOfSizes[i]['quantity'];
      }
    }

    return resultarray;
  }

  updateSize(e) {
    e.preventDefault();

    this.setState({
      size: e.target.value
    });
  }

  fetchQuantity() {

  }

  render() {

    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    console.log('hi!: ', Object.values(this.props.productStyles.results[this.props.styleIndex].skus));

    return (
      <div className="cart">
        <select className="select-size" value={this.state.size} onChange={this.updateSize}>
          <option key="default" value="Select Size">Select Size</option>
          {this.removeDuplicateSizes(Object.values(this.props.productStyles.results[this.props.styleIndex].skus)).map((sku, index) => {
            return <option key={index} value={sku.size}>{sku.size}</option>;
          })}
        </select>
        <select className="choose-quantity">
          <option value={this.state.quantity}>-</option>;
          <option value="1">1</option>;
          <option value="2">2</option>;
          <option value="3">3</option>;
          <option value="4">4</option>;
        </select>
        <button className="add-to-bag">Add To Bag</button>
        <button className="favourite">Star</button>
      </div>
    );
  }
}

export default AddToCart;