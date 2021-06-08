import React from 'react';
import AddToCart from './AddToCart.jsx';
import axios from 'axios';

class StyleSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      selectedStyle: '00',
      selectedStyleName: '',
      styleId: '',
      originalPrice: 0,
      salePrice: null
    };
    this.stylesToRows = this.stylesToRows.bind(this);
    this.updateStyleState = this.updateStyleState.bind(this);
  }

  updateStyleState(selected, styleId, originalPrice, salePrice, styleName, event) {
    this.setState({
      selectedStyle: selected,
      styleId: styleId,
      originalPrice: originalPrice,
      salePrice: salePrice,
      selectedStyleName: styleName
    })
    this.props.styleHandler(selected)
  }

  stylesToRows(styles) {
    var rows = [];
    function innerFunction(row, position) {
        if (position === styles.length) {
            rows.push(row);
            return;
        } else if (row.length === 4) {
            rows.push(row);
            row = [];
            row.push(styles[position])
            innerFunction(row, position + 1)
        } else {
            row.push(styles[position]);
            innerFunction(row, position + 1);
        }
    };
    innerFunction([], 0)
    return rows;
  };

  render() {

    if (!this.props.productStyles.results) {
      return <div></div>;
    }

    return (
      <div className="style-selector">
        {this.state.salePrice &&
          <div>
            <h3 className="original-price-strikethrough">Original Price: ${this.props.productStyles.results[this.props.styleIndex].original_price}</h3>
            <h3 className="sale-price-popup">Sale Price: ${this.props.productStyles.results[this.props.styleIndex].sale_price}</h3>
          </div>
        }
        {!this.state.salePrice &&
          <div>
            <h3>Price: ${this.props.productStyles.results[this.props.styleIndex].original_price}</h3>
            <h3 className="no-sale-message">.</h3>
          </div>
        }
        <h3>STYLE > {this.props.productStyles.results[this.props.styleIndex].name}</h3>
        {this.stylesToRows(this.props.productStyles.results).map((row, index) => {
          if (row[0].photos[0].thumbnail_url === null) {
            return null;
          }
          if (row.length === 1) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '0'), row[0].style_id, row[0].original_price, row[0].sale_price, row[0].name, row[0].photos[0].thumbnail_url)}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          } else if (row.length === 2) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '0'), row[0].style_id, row[0].original_price, row[0].sale_price, row[0].name)}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '1'), row[1].style_id, row[1].original_price, row[1].sale_price, row[1].name)}>
                    <img className="style-image" src={row[1].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '1') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '1') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          } else if (row.length === 3) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '0'), row[0].style_id, row[0].original_price, row[0].sale_price, row[0].name)}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '1'), row[1].style_id, row[1].original_price, row[1].sale_price, row[1].name)}>
                    <img className="style-image" src={row[1].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '1') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '1') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '2'), row[2].style_id, row[2].original_price, row[2].sale_price, row[2].name)}>
                    <img className="style-image" src={row[2].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '2') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '2') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          } else if (row.length === 4) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '0'), row[0].style_id, row[0].original_price, row[0].sale_price, row[0].name)}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '1'), row[1].style_id, row[1].original_price, row[1].sale_price, row[1].name)}>
                    <img className="style-image" src={row[1].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '1') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '1') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '2'), row[2].style_id, row[2].original_price, row[2].sale_price, row[2].name)}>
                    <img className="style-image" src={row[2].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '2') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '2') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateStyleState.bind(this, (index + '3'), row[3].style_id, row[3].original_price, row[3].sale_price, row[3].name)}>
                    <img className="style-image" src={row[3].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '3') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '3') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          }
        })}
        <AddToCart productStyles={this.props.productStyles} styleIndex={this.props.styleIndex} fetchQuantitiesHandler={this.props.fetchQuantitiesHandler} quantity={this.props.quantity} quantities={this.props.quantities}/>
      </div>
    );
}

}

export default StyleSelector;