import React from 'react';
import AddToCart from './AddToCart.jsx';

class StyleSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="style-selector">
        <h3>$100</h3>
        <h3>STYLE > Selected Style</h3>
        <div className="style-row">
          <div className="style-option"><div className="selected-style"></div></div>
          <div className="style-option"><div className="selected-style"></div></div>
          <div className="style-option"><div className="selected-style"></div></div>
          <div className="style-option"><div className="selected-style"></div></div>
        </div>
        <div className="style-row">
          <div className="style-option"><div className="selected-style"></div></div>
          <div className="style-option"><div className="selected-style"></div></div>
          <div className="style-option"><div className="selected-style"></div></div>
          <div className="style-option"><div className="selected-style"></div></div>
        </div>
        <AddToCart />
      </div>
    );
  }

}

export default StyleSelector;