import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton,UICheckBox} from '../../../main/component/UIComponents'

@CommonHead('')
@AutoHideKeyboard
export default class RegistView extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            注册账号
          </Text>
          <View style={styles.underline} />
          <View style={styles.inputBox} >
            <UIIconInput style={styles.input} icon='mobile1' placeholder='请输入手机号'/>
            <UIIconInput style={styles.input} icon='mail' placeholder='请输入邮箱'/>
            <UIIconInput style={styles.input} icon='lock' placeholder='请输入登录密码'/>
            <UIIconInput style={styles.input} icon='lock' placeholder='请输入重复密码'/>
            <UIIconInput style={styles.input} icon='contacts' placeholder='请输入昵称'/>
          </View>

          <UIButton style={styles.button} text='下一步' onPress={()=>{}} />

          <View style={styles.row} >
            <UICheckBox
              label={this.props.label}
              onChange={this.props.checkBoxOnChange}
              checked={this.props.checked}
              checkboxStyle={{height:20,width:20}}/>
            <Text style={styles.plainText}>注册FPAY钱包表示同意FPAY<Text style={styles.clickText}>《服务协议》</Text></Text>
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
    marginTop:10,
    flexDirection:'row'
  },
  underline: {
    width:30,
    height:5,
    backgroundColor: 'rgba(0,0,0,1)',
    marginTop:10
  },
  inputBox:{
    marginTop:60
  },
  button:{
    marginTop:35
  },
  plainText:{
    marginLeft:10,
    color:'rgba(187,187,187,1)',
    fontSize:15,
    fontFamily:'PingFangSC-Regular',
  },
  clickText:{
    color:'rgba(114,109,254,1)',
    fontSize:15,
    fontFamily:'PingFangSC-Regular',
  }
});
