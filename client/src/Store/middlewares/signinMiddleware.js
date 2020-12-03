import axios from 'axios';

import { SUBMIT_SIGNIN, changeIsLogged, changeIsShop, changeUser } from '../reducer/Signin';
import { storeCheckSessionConnexion } from '../reducer/App';

const signinMiddleware = (store) => (next) => (action) => {
  const PROD = "http://local-drive.fr/";
  const DEV = "http://localhost:80/"
  switch(action.type) {
    case SUBMIT_SIGNIN:
      axios({
        method: "POST",
        url: `${PROD}users/signin`,
        data: {
          email: store.getState().Signin.email,
          password: store.getState().Signin.password
        }
      })
        .then((response) => {
          // DEBUG
          console.log(response);
          store.dispatch(changeIsLogged(response.data.isLogged));
          store.dispatch(changeIsShop(response.data.user.isShop));
          store.dispatch(changeUser(response.data.user._id));
          store.dispatch(storeCheckSessionConnexion())
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

export default signinMiddleware;