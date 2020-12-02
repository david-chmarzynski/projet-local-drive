import { combineReducers } from 'redux';

// IMPORT REDUCERS FROM './'
import Signup from './Signup';
import Signin from './Signin';
import Products from './Products';
import App from './App';

// COMBINE REDUCERS
const reducer = combineReducers({
  // PLACE REDUCERS IMPORTED PREVIOUSLY HERE
  Signup,
  Signin,
  Products,
  App
});

export default reducer;