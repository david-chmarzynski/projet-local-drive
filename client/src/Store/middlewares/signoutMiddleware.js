import axios from 'axios';

import { SUBMIT_LOGOUT } from '../reducer/Menu';
import { changeIsLogged, changeIsShop, changeUser } from '../reducer/Signin';

const signoutMiddleware = (store) => (next) => (action) => {
  const URL = "http://local-drive.fr/";
  switch(action.type) {
    case SUBMIT_LOGOUT:
      axios({
        method: "GET",
        url: 'http://local-drive.fr/users/signout'
      })
        .then((response) => {
          // DEBUG
          // console.log(response);
          store.dispatch(changeIsLogged(response.data.isLogged));
          store.dispatch(changeIsShop(null));
          store.dispatch(changeUser(null));
      })
        .catch((error) => {
          console.log(error)
      })
        .finally(() => {});
        break;

    default:
      next(action);
  }
};

export default signoutMiddleware;