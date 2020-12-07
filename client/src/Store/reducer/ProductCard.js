// PRODUCTCARD REDUCER

// INITIAL PRODUCT CARD STATE
const initialState = {
  productId: null
};

// ACTIONS TYPES
const DELETE_PRODUCT = "DELETE_PRODUCT";
export const AXIOS_DELETE_PRODUCT = "AXIOS_DELETE_PRODUCT";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        productId: action.productId
      }
    default:
      return state;
  }
};

// ACTION CREATOR
export const axiosDeleteProduct = () => ({
  type: AXIOS_DELETE_PRODUCT,
});

export const storeDeleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId
});

export default reducer;