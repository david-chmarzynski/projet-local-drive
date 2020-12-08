import axios from 'axios';

import { AXIOS_DELETE_PRODUCT } from '../reducer/ProductCard';
import { changeProducts } from '../reducer/Products';

const updateProductMiddleware = (store) => (next) => (action) => {
  const PROD = "http://local-drive.fr/";
  const DEV = "http://localhost:80/";
  switch(action.type) {
    case AXIOS_DELETE_PRODUCT:
      axios({
        method: "DELETE",
        url: `${PROD}api/products/update`,
      })
        .then((response) => {
          // DEBUG
          console.log(response);
          store.dispatch(changeProducts(response.data.products));
      })
        .catch((error) => {
          console.log(error);
      })
        .finally(() => {});
        break;

    default:
      next(action);
  }
};

export default updateProductMiddleware;