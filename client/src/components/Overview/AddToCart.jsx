import React from 'react';

class AddToCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    console.log('cart productStyles: ', this.props.productStyles.results);
    console.log('cart styleId: ', this.props.styleId);

    return (
      <div className="cart">
        <select className="select-size">
          <option value="selectSize">Select Size</option>;
          <option value="A">A</option>;
          <option value="B">B</option>;
          <option value="C">C</option>;
          <option value="D">D</option>;
        </select>
        <select className="choose-quantity">
          <option value="quantity">-</option>;
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