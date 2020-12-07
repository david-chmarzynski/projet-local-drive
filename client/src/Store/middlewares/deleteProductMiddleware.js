import axios from 'axios';

import { DELETE_PRODUCT } from '../reducer/ProductCard';
// import { changeIsLogged, changeIsShop, changeUser } from '../reducer/Signin';

const deleteProductMiddleware = (store) => (next) => (action) => {
  const PROD = "http://local-drive.fr/";
  const DEV = "http://localhost:80/";
  console.log("action.productId :",action);
  switch(action.type) {
    case DELETE_PRODUCT:
      axios({
        method: "DELETE",
        url: `${PROD}api/products/delete/${action.productId}`,
      })
        .then((response) => {
          // DEBUG
          console.log(response);
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

export default deleteProductMiddleware;