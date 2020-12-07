import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import ProductCard from '../Components/Admin/ProductCard/ProductCard';

import { storeDeleteProduct } from '../Store/reducer/ProductCard';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (productId) => {
    dispatch(storeDeleteProduct(productId));
    dispatch(axiosDeleteProduct());
  },
});

// CONNECT COMPONENT/CONTAINER
const ProductCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);

export default ProductCardContainer;