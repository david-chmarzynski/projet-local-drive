import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import App from '../Components/App/App';

import { storeCheckUser } from '../Store/reducer/App';
import { fetchProducts } from '../Store/reducer/Products';

const mapStateToProps = (state) => ({
  isLogged: state.Signin.isLogged,
  isShop: state.Signin.isShop,
  products: state.Products.products
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => {
    dispatch(storeCheckUser())
  },
  fetchStoreProducts: () => {
    dispatch(fetchProducts());
  }
});

// CONNECT COMPONENT/CONTAINER
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;