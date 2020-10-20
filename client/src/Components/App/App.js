import React, { useState, useLayoutEffect, useRef } from 'react';
import './App.css';

// IMPORT REACT ROUTER
import { BrowserRouter as Router } from 'react-router-dom';

// IMPORT UTILS
import { useWindowSizes } from './App.utils';

// IMPORT COMPONENTS
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

const App = () => {

  // USING REFS
  const ref = useRef(null);

  // USEWINDOWSIZES VARIABLES
  let {width, height, responsive} = useWindowSizes(useState, useLayoutEffect);

  return (
    <div className="App" ref={ref}>
      <Router>
        <Header responsive={responsive}/>
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
