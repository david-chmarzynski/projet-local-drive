// SIGNIN REDUCER

// INITIAL SIGNIN STATE
const initialState = {
  email: null,
  password: null,
  isLogged: false,
  isShop: null
};

// ACTION TYPES
const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const CHANGE_ISLOGGED = "CHANGE_ISLOGGED";
const CHANGE_ISSHOP = "CHANGE_ISSHOP";

// MIDDLEWARE ACTION TYPE
export const SUBMIT_SIGNIN = "SUBMIT_SIGNIN";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    // CASES
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case CHANGE_ISLOGGED:
      return {
        ...state,
        isLogged: action.isLogged
      }
    case CHANGE_ISSHOP:
      return {
        ...state,
        isShop: action.isShop
      }
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const changeEmailSignin = (email) => ({
  type: CHANGE_EMAIL,
  email
});

export const changePasswordSignin = (password) => ({
  type: CHANGE_PASSWORD,
  password
});

export const submitSignin = () => ({
  type: SUBMIT_SIGNIN
});

export const changeIsLogged = (isLogged) => ({
  type: CHANGE_ISLOGGED,
  isLogged
});

export const changeIsShop = (isShop) => ({
  type: CHANGE_ISSHOP,
  isShop
});

// EXPORT DEFAULT
export default reducer;