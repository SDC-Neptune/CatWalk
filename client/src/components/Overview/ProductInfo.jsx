import React from 'react';

class ProductInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: 5,
      category: 'Jackets',
      title: 'Camo Onesie'
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.stars} *****</div>
        <div>{this.state.category}</div>
        <div>{this.state.title}</div>
      </div>
    );
  }

}

export default ProductInfo;