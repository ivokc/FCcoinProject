import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput} from '../../../main/component/UIComponents'


@AutoHideKeyboard
export default class LoginView extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            登录
          </Text>
          <View style={styles.underline} />
          <View style={styles.inputBox} >
            <UIIconInput style={styles.input} icon='mobile1' placeholder='请输入邮箱或手机号'/>
            <UIIconInput style={styles.input} icon='lock' placeholder='请输入登录密码'/>
          </View>
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
    color:'rgba(0,0,0,1)'
  },
  underline: {
    width:30,
    height:5,
    backgroundColor: 'rgba(0,0,0,1)',
    marginTop:10
  },
  inputBox:{
    marginTop:80
  }
});
