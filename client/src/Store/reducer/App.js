// APP REDUCER

// INITIAL APP STATE
const initialState = {};

// ACTIONS TYPES
export const CHECK_USER = "CHECK_USER";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    default:
      return state;
  }
};

// ACTION CREATOR
export const storeCheckUser = () => ({
  type: CHECK_USER
});

export default reducer;