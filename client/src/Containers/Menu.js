import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import Menu from '../Components/Menu/Menu';

import { submitLogout } from '../Store/reducer/Menu';

const mapStateToProps = (state) => ({
  isLogged: state.Signin.isLogged
});

const mapDispatchToProps = (dispatch) => ({
  handleStoreSubmitLogout: () => {
    dispatch(submitLogout())
  }
});

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;