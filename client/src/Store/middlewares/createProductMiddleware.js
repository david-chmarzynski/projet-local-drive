import axios from 'axios';

import { fetchProducts, SUBMIT_PRODUCT } from '../reducer/Products';

const createProductMiddleware = (store) => (next) => (action) => {
  const URL = "http://local-drive.fr/";
  switch(action.type) {
    case SUBMIT_PRODUCT:
      console.log(store.getState().Signin.user)
      axios({
        method: "POST",
        url: 'http://local-drive.fr/api/products/add',
        data: {
          name: store.getState().Products.name,
          description: store.getState().Products.description,
          price: store.getState().Products.price,
          stock: store.getState().Products.stock,
          image: store.getState().Products.image,
          category_id: store.getState().Products.category,
          // shop_id: store.getState().Signin.user,
          unit: store.getState().Products.unit,
        }
      })
        .then((response) => {
          // DEBUG
          console.log(response);
          // store.dispatch(fetchProducts());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {})
        break;
      
    default:
      next(action);
  }
};

export default createProductMiddleware;