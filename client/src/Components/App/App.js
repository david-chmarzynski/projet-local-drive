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
import AdminHome from '../Admin/AdminHome/AdminHome';

const App = ({ isLogged, checkSessionConnexion }) => {
  // USING REFS
  const ref = useRef(null);
  // USEWINDOWSIZES VARIABLES
  let {responsive} = useWindowSizes(useState, useLayoutEffect);

  useEffect(() => {
    // TRY TO CONNECT WITH SESSION
    checkSessionConnexion();
  }, [checkSessionConnexion]);

  return (
    <div className="App" ref={ref}>
        <Header responsive={responsive}/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
