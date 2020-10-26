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

const App = ({ isLoggedSession, checkSessionConnexion }) => {
  console.log(isLoggedSession)
  // USING REFS
  const ref = useRef(null);
  // USEWINDOWSIZES VARIABLES
  let {width, height, responsive} = useWindowSizes(useState, useLayoutEffect);

  useEffect(() => {
    checkSessionConnexion();
  }, []);

  return (
    <div className="App" ref={ref}>
      <Router>
        <Header responsive={responsive} isLoggedSession={isLoggedSession}/>
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
