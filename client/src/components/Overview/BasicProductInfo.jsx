import React from 'react';

class BasicProductInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: 5,
      category: 'Jackets',
      title: 'Camo Onesie',
    };
  }

  render() {
    return (
      <div className="basic-info">
        <div className="overview-rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <a href=""> Read all reviews</a>
        <h2>{this.state.category.toUpperCase()}</h2>
        <h1>{this.state.title}</h1>
      </div>
    );
  }

}

export default BasicProductInfo;