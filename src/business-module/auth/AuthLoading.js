import React, {Component} from 'react';
import { View, ImageBackground,StyleSheet } from "react-native";

import { loginAction } from './vendor/dataflow/Action';
export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userInfo = await Just.retrieveData('userInfo');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log('AuthLoading=======',userInfo)
    dispatch(loginAction(userInfo));

    this.timer = setTimeout(() => {
      this.props.navigation.navigate(userInfo ? 'App' : 'Auth');
    }, 500);
    // this.props.navigation.navigate(userInfo ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ImageBackground style={styles.splash} source={Img.Splash}>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  splash:{
    width:Constant.deviceWidth,
    height:Constant.deviceHeight
  }
});