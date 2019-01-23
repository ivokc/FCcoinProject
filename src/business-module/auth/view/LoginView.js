import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton} from '../../../main/component/UIComponents'


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

          <UIButton style={styles.button} text='登录' onPress={()=>{}} />

          <View style={styles.row} >
            <Text style={styles.clickText}>注册账号</Text>
            <Text style={styles.clickText}>忘记秘密</Text>
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
    fontFamily:'PingFangSC-Regular',
    color:'rgba(0,0,0,1)'
  },
  row:{
    margin:13,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  underline: {
    width:30,
    height:5,
    backgroundColor: 'rgba(0,0,0,1)',
    marginTop:10
  },
  inputBox:{
    marginTop:80
  },
  button:{
    marginTop:45
  },
  clickText:{
    color:'rgba(114,109,254,1)',
    fontSize:18,
    fontFamily:'PingFangSC-Regular',
  }
});
