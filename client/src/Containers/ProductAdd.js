import { connect } from 'react-redux';

// IMPORT ORIGINAL COMPONENT
import ProductAdd from '../Components/Admin/ProductAdd/ProductAdd';

import { changeNameProductAdd, changeDescriptionProductAdd, changePriceProductAdd, changeStockProductAdd, changeImageProductAdd, changeCategoryProductAdd, changeUnitProductAdd, submitProductAdd } from '../Store/reducer/Products';

const mapStateToProps = (state) => ({
  name: state.Products.name,
  unit: state.Products.unit,
  category: state.Products.category
});

const mapDispatchToProps = (dispatch) => ({
  handleStoreChangeName: (name) => {
    dispatch(changeNameProductAdd(name));
  },

  handleStoreChangeDescription: (description) => {
    dispatch(changeDescriptionProductAdd(description));
  },

  handleStoreChangePrice: (price) => {
    dispatch(changePriceProductAdd(price));
  },

  handleStoreChangeStock: (stock) => {
    dispatch(changeStockProductAdd(stock));
  },

  handleStoreChangeImage: (image) => {
    dispatch(changeImageProductAdd(image));
  },

  handleStoreChangeCategory: (category) => {
    dispatch(changeCategoryProductAdd(category));
  },

  handleStoreChangeUnit: (unit) => {
    dispatch(changeUnitProductAdd(unit));
  },

  handleStoreSubmitProduct: () => {
    dispatch(submitProductAdd());
  }
});

// CONNECT COMPONENT/CONTAINER
const ProductAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductAdd);

export default ProductAddContainer;