// MENU REDUCER

// INITIAL STATE
const initialState = {};

// ACTION TYPES
export const SUBMIT_LOGOUT = "SUBMIT_LOGOUT";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    default:
      return state;
  }
};

// ACTION CREATOR
export const submitLogout = () => ({
  type: SUBMIT_LOGOUT
});

export default reducer;