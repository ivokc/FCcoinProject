import React from "react";
import {StyleSheet,TextInput,View,Text} from "react-native";

export default class UILabelInput extends React.Component {
  state = {text:''}
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput 
          {...this.props}
          style={styles.input} 
          placeholderTextColor='#CCCCCC' 
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'rgba(255,255,255,1)',
    shadowOffset:{width: 0,height: 1},
    shadowColor:'rgba(186,186,186,0.5)',
    borderBottomWidth:1,
    borderBottomColor:'rgba(186,186,186,0.5)',
  },
  label:{
    paddingLeft:15,
    fontSize:17,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'#333333',
  },
  input:{
    fontSize:17,
    paddingRight:15,
    fontFamily:'PingFangSC-Regular'
  }
  
});
