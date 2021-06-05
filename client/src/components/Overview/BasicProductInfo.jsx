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
        <div >{this.state.stars} *****
          <a href="">Read all reviews</a>
        </div>
        <div>{this.state.category}</div>
        <div>{this.state.title}</div>
      </div>
    );
  }

}

export default BasicProductInfo;