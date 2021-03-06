import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import './App.css';

// IMPORT REACT ROUTER
import { Route, Switch} from 'react-router-dom';

// IMPORT UTILS
import { useWindowSizes } from './App.utils';

// IMPORT COMPONENTS
import Header from '../../Containers/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';

// IMPORT ADMIN COMPONENTS
import HomeAdmin from '../Admin/HomeAdmin/HomeAdmin';
import AdminNav from '../Admin/AdminNav/AdminNav';
import ProductManager from '../../Containers/ProductManager';
import ProductAdd from '../../Containers/ProductAdd';

const App = ({ isLogged, isShop, checkUser }) => {
  // USING REFS
  const ref = useRef(null);
  // USEWINDOWSIZES VARIABLES
  let {responsive} = useWindowSizes(useState, useLayoutEffect);

  // ENSURE USER IS SHOP
  const secureRoutes = (isLogged, isShop) => {
    if(isLogged && isShop) {
      return (
        <div id="admin">
          <Route path="/admin" component={AdminNav} />
          <Route exact path="/admin" component={HomeAdmin} />
          <Route exact path="/admin/produits/" component={ProductManager} />
          <Route exact path="/admin/produits/add" component={ProductAdd} />
          <Route exact path="/admin/boutique" />
          <Route exact path="/admin/informations" />
        </div>
      )
    } else {
      return (
        <div id="error">
          <Error />
        </div>
      )
    }
  };

  useEffect(() => {
  // TRY TO CONNECT WITH SESSION
  // DISABLED BECAUSE OF JWT AUTH
    checkUser();
  }, [checkUser]);

  return (
    <div className="App" ref={ref}>
        <Header responsive={responsive}/>
        <Switch>
          <Route exact path="/" component={Home} />
          {secureRoutes(isLogged, isShop)}
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
