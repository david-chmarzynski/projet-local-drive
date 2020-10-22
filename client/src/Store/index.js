import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

// IMPORT MIDDLEWARES
import signupMiddleware from './middlewares/signupMiddleware';
import signinMiddleware from './middlewares/signinMiddleware';

// IMPORT REDUCERS
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // PLACE MIDDLEWARES TO USE HERE /!\ WARNING ON ORDER
    signupMiddleware,
    signinMiddleware
  ),
);

const store = createStore(
  reducer,
  enhancers
);

export default store;
