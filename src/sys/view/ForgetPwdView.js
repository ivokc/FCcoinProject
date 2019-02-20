import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton} from '../../main/component/UIComponents'

@CommonHead('')
@AutoHideKeyboard
export default class ForgetPwdView extends React.Component {

  state = {
    mobile:'',
    smsCode:'',
    newpassword:'',
    newpasswordAgain:'',
  }

  validateForm = () => {
    let {smsCode,newpassword,newpasswordAgain} = this.state;
    if (Object.keys(this.state).some((key) => this.state[key] === '')){
      return false;
    }else{
      if (newpassword !== newpasswordAgain) {
        return false;
      }
      return true;
    }
  }

  handleForgetPwd = () => {
    this.props.handleForgetPwd({...this.state});
  }

  handleSms = () => {
    if (!Regex.mobile.test(this.state.mobile)) {
      Mymessage.showMsg('手机号码不正确');
      return false;
    }
    this.props.handleSms(this.state);
    return true;
  }
  
  render() {
    let validateOk = this.validateForm();
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            忘记密码
          </Text>
          <View style={styles.underline} />
          <View style={styles.inputBox} >
            <UIIconInput style={styles.input} icon='mobile1' placeholder='请输入手机号'
              onChangeText={(text) => this.setState({mobile:text})}
            />
            <UIIconInput action='sms' icon='mail' placeholder='请输入短信校验码' 
              handleActionPress={this.handleSms}
              onChangeText={(text) => this.setState({smsCode:text})}
            />
            <UIIconInput icon='lock' placeholder='请输入新登录密码'
              onChangeText={(text) => this.setState({newpassword:text})}/>
            <UIIconInput icon='lock' placeholder='再次输入新密码'
              onChangeText={(text) => this.setState({newpasswordAgain:text})}/>
          </View>

          <UIButton disabled={!validateOk} style={styles.button} text='确定' onPress={this.handleForgetPwd} />

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
  inputBox:{
    marginTop:20
  },
  button:{
    marginTop:35
  },
  
});
