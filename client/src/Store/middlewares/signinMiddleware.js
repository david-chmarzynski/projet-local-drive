import axios from 'axios';

import { SUBMIT_SIGNIN, changeIsLogged, changeIsShop } from '../reducer/Signin';

const signinMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case SUBMIT_SIGNIN:
      axios({
        method: "POST",
        url: "http://localhost:4000/users/signin",
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