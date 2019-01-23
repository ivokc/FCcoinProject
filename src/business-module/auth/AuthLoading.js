import React, {Component} from 'react';
import { View, ActivityIndicator,StatusBar } from "react-native";
import { loginAction } from './vendor/dataflow/Action';
export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userInfo = await Just.retrieveData('userInfo');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log('userInfo------',userInfo)
    dispatch(loginAction(userInfo));
    this.props.navigation.navigate(userInfo ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}