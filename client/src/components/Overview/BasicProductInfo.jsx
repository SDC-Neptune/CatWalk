import React from 'react';
import axios from 'axios';


class BasicProductInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: 5,
      category: '',
      title: '',
    };
  }

  componentDidMount() {

    axios.get('/api/product', { params: { id: this.props.productId } })
      .then((productInfo) => {
        console.log('productInfo: ', productInfo);
        this.setState({
          category: productInfo.data.category,
          title: productInfo.data.name
        });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
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