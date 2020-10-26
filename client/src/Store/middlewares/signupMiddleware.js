import axios from 'axios';

import { SUBMIT_SIGNUP } from '../reducer/Signup';

const signupMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case SUBMIT_SIGNUP:
      axios({
        method: "POST",
        url: "http://localhost:4000/users/signup",
        data: {
          email: store.getState().Signup.email,
          password: store.getState().Signup.password,
          isShop: store.getState().Signup.isShop
        }
      })
        .then((response) => {
          console.log(response);
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