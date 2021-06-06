import React from 'react';
import AddToCart from './AddToCart.jsx';
import axios from 'axios';

class StyleSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      selectedStyle: '03'
    };
    this.stylesToRows = this.stylesToRows.bind(this);
  }

  updateSelectedStyle(selected, event) {
    this.setState({
      selectedStyle: selected
    })
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

  componentDidMount() {

    var options = {};

    axios.get('/api/styles')
      .then((styles) => {
        return this.stylesToRows(styles.data.results)
      })
      .then((sortedStyles) => {
        this.setState({
          styles: sortedStyles
        })
      })
      .catch((error) => {
        console.log('error: ', error);
      })
  }

  render() {
    return (
      <div className="style-selector">
        <h3>$100</h3>
        <h3>STYLE > Selected Style</h3>
        {this.state.styles.map((row, index) => {
          if (row.length === 1) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '0'))}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          } else if (row.length === 2) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '0'))}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '1'))}>
                    <img className="style-image" src={row[1].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '1') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '1') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          } else if (row.length === 3) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '0'))}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '1'))}>
                    <img className="style-image" src={row[1].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '1') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '1') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '2'))}>
                    <img className="style-image" src={row[2].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '2') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '2') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          } else if (row.length === 4) {
            return (
              <div key={index}>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '0'))}>
                    <img className="style-image" src={row[0].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '0') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '0') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '1'))}>
                    <img className="style-image" src={row[1].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '1') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '1') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '2'))}>
                    <img className="style-image" src={row[2].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '2') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '2') && <div className="selected-style-unchecked"></div>}
                </div>
                <div className="style-option-inline" onClick={this.updateSelectedStyle.bind(this, (index + '3'))}>
                    <img className="style-image" src={row[3].photos[0].thumbnail_url}></img>
                    {this.state.selectedStyle === (index + '3') && <div className="selected-style-checked"></div>}
                    {this.state.selectedStyle !== (index + '3') && <div className="selected-style-unchecked"></div>}
                </div>
              </div>
            )
          }
        })}
        <AddToCart />
      </div>
    );
  }

}

export default StyleSelector;