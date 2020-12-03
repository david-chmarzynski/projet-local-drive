import axios from 'axios';

import { CHECK_SESSION_CONNEXION } from '../reducer/App';
import { changeIsLogged, changeIsShop, changeUser } from '../reducer/Signin';

const appSigninMiddleware = (store) => (next) => (action) => {
  const PROD = "http://local-drive.fr/";
  const DEV = "http://localhost:80/"
  switch(action.type) {
    case CHECK_SESSION_CONNEXION:
      axios({
        method: "GET",
        url: `${PROD}users/me`
      })
        .then((response) => {
          // DEBUG
          console.log(response);
          store.dispatch(changeIsLogged(response.data.isLogged));
          if (response.data.user) {
            store.dispatch(changeIsShop(response.data.isShop));
            store.dispatch(changeUser(response.data.user));
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

export default appSigninMiddleware;