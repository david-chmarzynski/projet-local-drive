import { combineReducers } from 'redux';

// IMPORT REDUCERS FROM './'
import Signup from './Signup';
import Signin from './Signin';

// COMBINE REDUCERS
const reducer = combineReducers({
  // PLACE REDUCERS IMPORTED PREVIOUSLY HERE
  Signup,
  Signin
});

export default reducer;