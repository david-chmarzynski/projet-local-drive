import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import Login from '../Components/Login/Login';

// IMPORT SIGNUP ACTIONS
import { changeEmail, changePassword, changePasswordVerify, changeIsShop, submitSignup } from '../Store/reducer/Signup';

// IMPORT SIGNIN ACTIONS
import { changeEmailSignin, changePasswordSignin, submitSignin } from '../Store/reducer/Signin';

const mapStateToProps = (state) => ({
  // PROPS TO PASS (FROM REDUCER TO COMPONENT)
  email: state.Signup.email,
  password: state.Signup.password,
  passwordVerify: state.Signup.passwordVerify,
  isShop: state.Signup.isShop,
});

const mapDispatchToProps = (dispatch) => ({
  // FUNCTIONS TO PASS (FROM REDUCER TO COMPONENT)
  // SIGNUP REDUCER
  handleChangeStoreEmailSignup: (email) => {
    dispatch(changeEmail(email));
  },

  handleChangeStorePasswordSignup: (password) => {
    dispatch(changePassword(password));
  },

  handleChangeStorePasswordVerifySignup: (passwordVerify) => {
    dispatch(changePasswordVerify(passwordVerify));
  },

  handleChangeStoreIsShopSignup: () => {
    dispatch(changeIsShop());
  },

  handleStoreSubmitSignup: () => {
    dispatch(submitSignup());
  },

  // SIGNIN FUNCTION
  handleChangeStoreEmailSignin: (email) => {
    dispatch(changeEmailSignin(email));
  },

  handleChangeStorePasswordSignin: (password) => {
    dispatch(changePasswordSignin(password));
  },

  handleStoreSubmitSignin: () => {
    dispatch(submitSignin());
  }
});

// CONNECT COMPONENT/CONTAINER
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;