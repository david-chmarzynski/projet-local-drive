// APP REDUCER

// INITIAL APP STATE
const initialState = {
  isLoggedSession: false
};

// ACTIONS TYPES
export const CHECK_SESSION_CONNEXION = "CHECK_SESSION_CONNEXION";
const CHANGE_IS_LOGGED_SESSION = "CHANGE_IS_LOGGED_SESSION";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    case CHANGE_IS_LOGGED_SESSION:
      return {
        ...state,
        isLoggedSession: action.isLoggedSession
      }
    default:
      return state;
  }
};

// ACTION CREATOR
export const changeIsLoggedSession = (isLoggedSession) => ({
  type: CHANGE_IS_LOGGED_SESSION,
  isLoggedSession
});

export const storeCheckSessionConnexion = () => ({
  type: CHECK_SESSION_CONNEXION
});

export default reducer;