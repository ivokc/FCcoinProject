import React from "react";
import {StyleSheet,Picker,View,Text} from "react-native";
export default class UILabelPicker extends React.Component {
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Picker
          selectedValue={this.props.selectedValue}
          style={styles.picker}
          onValueChange={this.props.onValueChange}>
          {
            
            this.props.data.map((ele,index) => 
              <Picker.Item key={index} label={ele.text} value={ele.value} />
            )
          }
        </Picker>
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
  picker:{
    width:130,
    paddingRight:15,
    color:'#999999'
  }
  
});
