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
import RootRouter from './src/router/RootRouter';
import store from './src/dataflow/Store';

export default class App extends Component {

  
  render() {
    
    return (
      <Provider store={store}>
          {/* <Modal
              refs={(ref) => global.showLoading = ref}
              animationType="slide"
              transparent={true}
              visible={Constant.showLoading}
              onRequestClose={() => {
                alert("Modal has been closed.");
              }}
            >
              <ActivityIndicator style={{ marginTop: 220,width:50,height:50,backgroundColor:'#000000',opacity:0.5 }} size="large" color="#0000ff" />
          </Modal> */}
          <RootRouter/>

      </Provider>
    );
  }
}





