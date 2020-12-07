// PRODUCTCARD REDUCER

// INITIAL PRODUCT CARD STATE
const initialState = {};

// ACTIONS TYPES
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    default:
      return state;
  }
};

// ACTION CREATOR
export const storeDeleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId
});

export default reducer;