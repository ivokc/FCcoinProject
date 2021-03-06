import React from "react";
import { View,StyleSheet,TextInput,Text} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default class UITextInput extends React.Component {

  renderMessage = () => {
    if (this.props.message) {
      return (
        <View style={styles.message}>
          <Text style={styles.clickable}>重新发送</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    //('23423423423',this.props.textInputstyles);

    return (

      <View style={[styles.container,this.props.textInputstyles]}>
        <Icon style={styles.icon} name={this.props.icon} size={30} color="#CCCCCC" />
        <TextInput
          {...this.props}
          style={[styles.textInput,this.props.message ? {flex:6}: {flex:9}]}
          placeholderTextColor='rgba(204,204,204,1)'
          onChangeText={this.props.onChangeText}
        />
          {
            this.renderMessage()
          }

      </View>


    );
  }
}
const styles = StyleSheet.create({
  container:{
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    // borderColor:'rgba(237,237,237,1)'
  },
  icon:{
    flex:1
  },
  textInput:{
    fontSize:15,
    fontFamily:'PingFangSC-Regular'
  },
  message: {
    flex:3,
    height:40,
    flexDirection: 'row',
    alignItems:'center',

  },
  clickable:{
    borderColor:'#EDEDED',
    borderLeftWidth:1,
    paddingLeft:10,
    fontSize:15,
    fontFamily:'PingFangSC-Regular',
    color:'rgba(114,109,254,1)'
  }
});
