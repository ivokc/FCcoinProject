import React from "react";
import {StyleSheet,TouchableHighlight,Text} from "react-native";

export default class UIButton extends React.Component {
  state = {text:''}
  render() {
    return (
      <TouchableHighlight style={[styles.container,this.props.style,
        this.props.disabled ? {backgroundColor:'rgba(204,204,204,1)'} : {backgroundColor:'rgba(114,109,254,1)'}]} 
        disabled={this.props.disabled || false}
        underlayColor="white"
        onPress={this.props.onPress}>
        <Text style={styles.text}> {this.props.text} </Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height:50,
    borderRadius:45,
    alignItems: 'center',
    justifyContent:'center'
  },
  text:{
    fontSize:18,
    fontFamily:'PingFangSC-Regular',
    color:'rgba(255,255,255,1)'
  }
});
