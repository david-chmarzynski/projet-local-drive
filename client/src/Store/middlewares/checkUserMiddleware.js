import axios from 'axios';

import { CHECK_USER } from '../reducer/App';
import { changeIsLogged, changeIsShop, changeUser } from '../reducer/Signin';

const checkUserMiddleware = (store) => (next) => (action) => {
  const PROD = "http://local-drive.fr/";
  const DEV = "http://localhost:80/"
  switch(action.type) {
    case CHECK_USER:
      axios({
        method: "GET",
        url: `${DEV}api/users/me`
      })
        .then((response) => {
          // DEBUG
          console.log(response);
          store.dispatch(changeIsLogged(response.data.isLogged));
          if (response.data.user) {
            store.dispatch(changeIsShop(response.data.user.isShop));
            store.dispatch(changeUser(response.data.user._id));
          }
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

export default checkUserMiddleware;