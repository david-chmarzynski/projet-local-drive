// SIGNUP REDUCER

// INITIAL SIGNUP STATE
const initialState = {
  email: null,
  password: null,
  passwordVerify: null,
  isShop: false
};

// ACTION TYPES
const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const CHANGE_PASSWORD_VERIFY = "CHANGE_PASSWORD_VERIFY";
const CHANGE_ISSHOP = "CHANGE_ISSHOP";

// MIDDLEWARE ACTION TYPE
export const SUBMIT_SIGNUP = "SUBMIT_SIGNUP";

// REDUCER
const reducer = (state = initialState, action = {}) => {
  switch (action.type){
    // CASES
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case CHANGE_PASSWORD_VERIFY:
      return {
        ...state,
        passwordVerify: action.passwordVerify,
      };
    case CHANGE_ISSHOP:
      return {
        ...state,
        isShop: !state.isShop,
      };
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password,
});

export const changePasswordVerify = (passwordVerify) => ({
  type: CHANGE_PASSWORD_VERIFY,
  passwordVerify,
});

export const changeIsShop = () => ({
  type: CHANGE_ISSHOP,
});

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP
});

// EXPORT DEFAULT
export default reducer;