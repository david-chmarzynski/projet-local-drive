import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import Header from '../Components/Header/Header';

const mapStateToProps = (state) => ({
  // PROPS TO PASS
  isLogged: state.Signin.isLogged
});

const mapDispatchToProps = (dispatch) => ({});

// CONNECT COMPONENT/CONTAINER
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;