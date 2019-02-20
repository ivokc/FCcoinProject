/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import './main/global/Just';
import './main/global/Decorator';
import './main/global/Constant';
import './main/global/Url';
import './main/global/Img';
import './main/global/Regex';
import RootRouter from './router/RootRouter';
import {UILoading,UIMessage,UIDialog} from './main/component/UIComponents'
import store from './dataflow/Store';

export default class App extends Component {

  
  render() {
    
    return (
      <Provider store={store}>
          {/* <UILoading ref={(ref) => {global.Myloading = ref}}/> */}
          <UIMessage ref={(ref) => {global.Mymessage = ref}}/>
          <UIDialog ref={(ref) => {global.Mydialog = ref}}/>
          <RootRouter/>
      </Provider>
    );
  }
}





