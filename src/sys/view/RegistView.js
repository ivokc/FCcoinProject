import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton,UICheckBox} from '../../main/component/UIComponents'

@CommonHead('')
@AutoHideKeyboard
export default class RegistView extends React.Component {

  state = {
    mobile:'',
    email:'',
    password:'',
    passwordAgain:'',
    userName:'',
    checked:true,
  }

  validateForm = () => {
    let {password,passwordAgain,checked} = this.state;
    if (Object.keys(this.state).some((key) => this.state[key] === '') || !checked){
      return false;
    }else{
     if(password !== passwordAgain){
        return false;
      }else{
        return true;
      }
    }
  }

  handleNextStep = () => {
    let {password,userName,mobile,email} = this.state;
    if(!Regex.mobile.test(mobile)){
      Mymessage.show('手机号格式不正确');
      return false
    }else if( !Regex.email.test(email)) {
      Mymessage.show('邮箱格式不正确');
      return false;
    }else if(password.length > 12 || userName.length > 12 ){
      Mymessage.show('用户名，密码不能超过12位');
      return false;
    }
    this.props.handleNextStep(this.state);

  }

  render() {
    let validateOk = this.validateForm();
    console.log('RegistView|validateOk',validateOk);
    
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            注册账号
          </Text>
          <View style={styles.underline} />
          <View style={styles.inputBox} >
            <UIIconInput style={styles.input} icon='mobile1' placeholder='请输入手机号'
              onChangeText={(text) => this.setState({mobile:text})}
            />
            <UIIconInput style={styles.input} icon='mail' placeholder='请输入邮箱'
              onChangeText={(text) => this.setState({email:text})}
            />
            <UIIconInput style={styles.input} icon='lock' placeholder='请输入登录密码'
              onChangeText={(text) => this.setState({password:text})}
            />
            <UIIconInput style={styles.input} icon='lock' placeholder='请输入重复密码'
              onChangeText={(text) => this.setState({passwordAgain:text})}
            />
            <UIIconInput style={styles.input} icon='contacts' placeholder='请输入昵称'
              onChangeText={(text) => this.setState({userName:text})}
            />
          </View>

          <UIButton style={styles.button} disabled={!validateOk} text='下一步' onPress={this.handleNextStep} />

          {/* <View style={styles.row} >
            <UICheckBox
              label={this.props.label}
              onChange={(state)=>this.setState({checked:state})}
              checked={this.state.checked}
              checkboxStyle={{height:20,width:20}}/>
            <Text style={styles.plainText}>注册FPAY钱包表示同意FPAY<Text style={styles.clickText}>《服务协议》</Text></Text>
          </View> */}
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
