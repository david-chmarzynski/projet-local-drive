import axios from 'axios';

import { CHECK_SESSION_CONNEXION } from '../reducer/App';
import { changeIsLogged, changeIsShop, changeUser } from '../reducer/Signin';

const appSigninMiddleware = (store) => (next) => (action) => {
  const URL = "http://local-drive.fr/";
  switch(action.type) {
    case CHECK_SESSION_CONNEXION:
      axios({
        method: "GET",
        url: `${URL}api/users/me`
      })
        .then((response) => {
          // DEBUG
          // console.log(response);
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

export default appSigninMiddleware;