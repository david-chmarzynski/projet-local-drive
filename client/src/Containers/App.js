import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import App from '../Components/App/App';

import { storeCheckSessionConnexion } from '../Store/reducer/App';

const mapStateToProps = (state) => ({
  isLoggedSession: state.App.isLoggedSession
});

const mapDispatchToProps = (dispatch) => ({
  checkSessionConnexion: () => {
    dispatch(storeCheckSessionConnexion())
  }
});

// CONNECT COMPONENT/CONTAINER
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;