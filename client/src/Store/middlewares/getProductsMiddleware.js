import axios from 'axios';

import { changeProducts, FETCH_PRODUCTS } from '../reducer/Products';

const getProductsMiddleware = (store) => (next) => (action) => {
  const URL = "http://local-drive.fr/";
  switch(action.type) {
    case FETCH_PRODUCTS:
      axios({
        method: "POST",
        url: `${URL}products`,
      })
        .then((response) => {
          // DEBUG
          console.log(response);
          store.dispatch(changeProducts(response.data.products));
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

export default getProductsMiddleware;