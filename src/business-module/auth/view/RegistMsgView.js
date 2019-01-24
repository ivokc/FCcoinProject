import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton} from '../../../main/component/UIComponents'


@AutoHideKeyboard
export default class RegistMsgView extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            注册账号
          </Text>
          <View style={styles.underline} />
          <View style={styles.inputBox} >
            <UIIconInput message style={styles.input} icon='mail' placeholder='请输入短信校验码'/>
          </View>

          <UIButton style={styles.button} text='确定' onPress={()=>{}} />
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding:30
  },
  title: {
    fontSize:25,
    fontWeight:'400',
    fontFamily:'PingFangSC-Regular',
    color:'rgba(0,0,0,1)'
  },

  underline: {
    width:30,
    height:5,
    backgroundColor: 'rgba(0,0,0,1)',
    marginTop:10
  },
  
});
