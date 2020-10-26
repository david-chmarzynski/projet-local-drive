import axios from 'axios';

import { CHECK_SESSION_CONNEXION, changeIsLoggedSession } from '../reducer/App';

const appSigninMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case CHECK_SESSION_CONNEXION:
      axios({
        method: "GET",
        url: "http://localhost:4000/users/me"
      })
        .then((response) => {
          console.log(response);
          // setIsLogged(response.data.user.isLogged);
          store.dispatch(changeIsLoggedSession(response.data.isLogged));
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