import axios from 'axios';

export const requests = {
  getCart: () => {
    return axios.get('/cart');
  }
};