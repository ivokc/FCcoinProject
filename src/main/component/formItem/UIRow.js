import React from "react";
import {StyleSheet,TouchableWithoutFeedback,View} from "react-native";

export default class UIRow extends React.Component {
  state = {text:''}
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={[styles.container,this.props.style]}>
          {this.props.children}

        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:50,
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255,1)',
    shadowOffset:{width: 0,height: 1},
    shadowColor:'rgba(186,186,186,0.5)',
    borderBottomWidth:1,
    borderBottomColor:'rgba(186,186,186,0.5)'

  },
  
});
