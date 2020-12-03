import axios from 'axios';

import { SUBMIT_SIGNUP } from '../reducer/Signup';

const signupMiddleware = (store) => (next) => (action) => {
  const PROD = "http://local-drive.fr/";
  const DEV = "http://localhost:4000/"
  switch(action.type) {
    case SUBMIT_SIGNUP:
      axios({
        method: "POST",
        url: `${PROD}users/signup`,
        data: {
          email: store.getState().Signup.email,
          password: store.getState().Signup.password,
          isShop: store.getState().Signup.isShop
        }
      })
        .then((response) => {
          // DEBUG
          // console.log(response);
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

export default signupMiddleware;