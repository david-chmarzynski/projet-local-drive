import axios from 'axios';

import { CHECK_SESSION_CONNEXION } from '../reducer/App';
import { changeIsLogged } from '../reducer/Signin';

const appSigninMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case CHECK_SESSION_CONNEXION:
      axios({
        method: "GET",
        url: "http://localhost:4000/users/me"
      })
        .then((response) => {
          console.log(response);
          store.dispatch(changeIsLogged(response.data.isLogged));
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