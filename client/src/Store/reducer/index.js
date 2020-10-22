import { combineReducers } from 'redux';

// IMPORT REDUCERS FROM './'
import Signup from './Signup';

// COMBINE REDUCERS
const reducer = combineReducers({
  // PLACE REDUCERS IMPORTED PREVIOUSLY HERE
  Signup
});

export default reducer;