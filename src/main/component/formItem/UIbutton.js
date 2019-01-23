import React from "react";
import { View,StyleSheet,TouchableHighlight,Text} from "react-native";

export default class UIIconInput extends React.Component {
  state = {text:''}
  render() {
    return (
      <TouchableHighlight style={[styles.container,this.props.style]} underlayColor="white"
        onPress={this.props.onPress}>
        <Text style={styles.text}> {this.props.text} </Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height:55,
    backgroundColor:'rgba(114,109,254,1)',
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
