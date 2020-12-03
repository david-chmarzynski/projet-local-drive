import axios from 'axios';

import { SUBMIT_SIGNIN, changeIsLogged, changeIsShop, changeUser } from '../reducer/Signin';

const signinMiddleware = (store) => (next) => (action) => {
  const URL = "http://local-drive.fr/";
  switch(action.type) {
    case SUBMIT_SIGNIN:
      axios({
        method: "POST",
        url: 'http://local-drive.fr/users/signin',
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