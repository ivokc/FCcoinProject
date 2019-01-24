/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import './src/main/global/Just';
import './src/main/global/Decorator';
import './src/main/global/Constant';
import './src/main/global/Url';
import './src/main/global/Img';
import RootRouter from './src/router/RootRouter';
import store from './src/dataflow/Store';

export default class App extends Component {

  render() {
    
    return (
      <Provider store={store}>
        <RootRouter/>
      </Provider>
    );
  }
}





