import { connect } from 'react-redux';

// IMPORT COMPONENT
import Login from '../Components/Login/Login';

// IMPORT SIGNUP ACTIONS & STATE
import { changeEmail, changePassword, changePasswordVerify, changeIsShop, submitSignup } from '../Store/reducer/Signup';

const mapStateToProps = (state) => ({
  // PROPS TO PASS (FROM REDUCER TO COMPONENT)
  email: state.Signup.email,
  password: state.Signup.password,
  passwordVerify: state.Signup.passwordVerify,
  isShop: state.Signup.isShop
});

const mapDispatchToProps = (dispatch) => ({
  // FUNCTIONS TO PASS (FROM REDUCER TO COMPONENT)
  handleChangeStoreEmail: (email) => {
    dispatch(changeEmail(email));
  },

  handleChangeStorePassword: (password) => {
    dispatch(changePassword(password));
  },

  handleChangeStorePasswordVerify: (passwordVerify) => {
    dispatch(changePasswordVerify(passwordVerify));
  },

  handleChangeStoreIsShop: () => {
    dispatch(changeIsShop());
  },

  handleStoreSubmitSignup: () => {
    dispatch(submitSignup());
  },
});

// CONNECT COMPONENT/CONTAINER
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;