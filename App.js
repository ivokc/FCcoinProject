/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Modal,ActivityIndicator,View} from 'react-native';
import { Provider } from 'react-redux'
import './src/main/global/Just';
import './src/main/global/Decorator';
import './src/main/global/Constant';
import './src/main/global/Url';
import './src/main/global/Img';
import './src/main/global/Regex';
import RootRouter from './src/router/RootRouter';
import {UILoading,UIMessage,UIDialog} from './src/main/component/UIComponents'
import store from './src/dataflow/Store';

export default class App extends Component {

  
  render() {
    
    return (
      <Provider store={store}>
          <UILoading ref={(ref) => {global.Myloading = ref}}/>
          <UIMessage ref={(ref) => {global.Mymessage = ref}}/>
          <UIDialog ref={(ref) => {global.Mydialog = ref}}/>
          <RootRouter/>
      </Provider>
    );
  }
}





