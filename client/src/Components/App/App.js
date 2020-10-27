import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// IMPORT REACT ROUTER
import { BrowserRouter as Router } from 'react-router-dom';

// IMPORT UTILS
import { useWindowSizes } from './App.utils';

// IMPORT COMPONENTS
import Header from '../../Containers/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

const App = ({ isLogged, checkSessionConnexion }) => {
  console.log(isLogged)
  // USING REFS
  const ref = useRef(null);
  // USEWINDOWSIZES VARIABLES
  let {width, height, responsive} = useWindowSizes(useState, useLayoutEffect);

  useEffect(() => {
    // TRY TO CONNECT WITH SESSION
    checkSessionConnexion();
  }, []);

  return (
    <div className="App" ref={ref}>
      <Router>
        <Header responsive={responsive} isLogged={isLogged}/>
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
