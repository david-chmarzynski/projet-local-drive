import axios from 'axios';

import { changeProducts, FETCH_PRODUCTS } from '../reducer/Products';

const getProductsMiddleware = (store) => (next) => (action) => {
  const PROD = "http://local-drive.fr/";
  const DEV = "http://localhost:80/"
  switch(action.type) {
    case FETCH_PRODUCTS:
      axios({
        method: "GET",
        url: `${PROD}products/get`,
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