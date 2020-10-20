import React, { useState, useLayoutEffect, useRef } from 'react';
import './App.css';

// IMPORT UTILS
import { useWindowSizes } from './App.utils';

// IMPORT COMPONENTS
import Header from '../Header/Header';

const App = () => {
  // USING REFS
  const ref = useRef(null);
  let {width, height, responsive} = useWindowSizes(useState, useLayoutEffect);
  return (
    <div className="App" ref={ref}>
      <Header />
    </div>
  );
}

export default App;
