import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import App from '../Components/App/App';

import { storeCheckUser } from '../Store/reducer/App';

const mapStateToProps = (state) => ({
  isLogged: state.Signin.isLogged,
  isShop: state.Signin.isShop
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => {
    dispatch(storeCheckUser())
  },
});

// CONNECT COMPONENT/CONTAINER
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;