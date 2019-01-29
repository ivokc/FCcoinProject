import React from "react";
import {StyleSheet,TouchableHighlight,Text} from "react-native";

export default class UIButton extends React.Component {
  state = {text:''}
  render() {
    return (
      <TouchableHighlight style={[styles.container,this.props.style,
        this.props.disabled ? {backgroundColor:'rgba(204,204,204,1)',borderWidth:0} :
         this.props.outline ? {backgroundColor:'transparent'} : {backgroundColor:'#726DFE'}]} 
        disabled={this.props.disabled || false}
        underlayColor="rgba(104,104,104,1)"
        onPress={this.props.onPress}>
        <Text style={[styles.text,this.props.outline ? {color:'#7359FF'} : {color:'white'}]}> {this.props.text} </Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height:50,
    borderRadius:45,
    alignItems: 'center',
    justifyContent:'center',
    borderColor:'#7359FF',
    borderWidth:1,
  },
  text:{
    fontSize:18,
    fontFamily:'PingFangSC-Regular',
    
  }
});
