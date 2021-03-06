import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default (WrappedComponent) => class AutoHideKeyboard extends React.Component{
  render() {
    return (
      <KeyboardAwareScrollView style={{flex:1}}>
          <WrappedComponent {...this.props}/>
      </KeyboardAwareScrollView >
    )
  }
}
