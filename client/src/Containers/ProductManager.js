import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import ProductManager from '../Components/Admin/ProductManager/ProductManager';

import { fetchProducts } from '../Store/reducer/Products';

const mapStateToProps = (state) => ({
  products: state.Products.products
});

const mapDispatchToProps = (dispatch) => ({
  fetchStoreProducts: () => {
    dispatch(fetchProducts());
  }
});

// CONNECT COMPONENT/CONTAINER
const ProductManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductManager);

export default ProductManagerContainer;