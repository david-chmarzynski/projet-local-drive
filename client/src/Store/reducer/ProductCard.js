// PRODUCTCARD REDUCER

// INITIAL PRODUCT CARD STATE
const initialState = {
  productId: null
};

// ACTIONS TYPES
const STORE_DELETE_PRODUCT = "STORE_DELETE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    case STORE_DELETE_PRODUCT:
      return {
        ...state,
        productId: action.productId
      }
    default:
      return state;
  }
};

// ACTION CREATOR
export const deleteProductAxios = () =>({
  type: DELETE_PRODUCT,
});

export const storeDeleteProduct = (productId) => ({
  type: STORE_DELETE_PRODUCT,
  productId
});



export default reducer;