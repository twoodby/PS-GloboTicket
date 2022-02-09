/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StatusBar } from 'react-native';
import Home from './Home';

const App: () => Node = () => {
  
  return (
    <>
      <StatusBar barStyle='dark-content' hidden />
      <Home username='Not A Sports Fan' />
    
    </>
  );
};



export default App;
