// APP REDUCER

// INITIAL APP STATE
const initialState = {};

// ACTIONS TYPES
export const CHECK_SESSION_CONNEXION = "CHECK_SESSION_CONNEXION";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    default:
      return state;
  }
};

// ACTION CREATOR
export const storeCheckSessionConnexion = () => ({
  type: CHECK_SESSION_CONNEXION
});

export default reducer;