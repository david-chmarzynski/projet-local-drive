import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

// IMPORT MIDDLEWARES
import signupMiddleware from './middlewares/signupMiddleware';
import signinMiddleware from './middlewares/signinMiddleware';
import checkUserMiddleware from './middlewares/checkUserMiddleware';
import signoutMiddleware from './middlewares/signoutMiddleware';
import createProductMiddleware from './middlewares/createProductMiddleware';
import getProductsMiddleware from './middlewares/getProductsMiddleware';
import deleteProductMiddleware from './middlewares/deleteProductMiddleware';

// IMPORT REDUCERS
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // PLACE MIDDLEWARES TO USE HERE /!\ WARNING ON ORDER
    checkUserMiddleware,
    getProductsMiddleware,
    signupMiddleware,
    signinMiddleware,
    signoutMiddleware,
    createProductMiddleware,
    deleteProductMiddleware
  ),
);

const store = createStore(
  reducer,
  enhancers
);

export default store;
