import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton} from '../../main/component/UIComponents'


@AutoHideKeyboard
export default class LoginView extends React.Component {
  state = {
    username:'',
    password:'',
    
  }

  handleLogin = () => {
    let {username,password} = this.state;
    
    this.props.handleLogin({username,password});
  }
  validateForm = () => {
    if (Object.keys(this.state).some((key) => this.state[key] === '')){
      return false;
    }else{
      return true;
    }
  }
  render() {
    let validateOk = this.validateForm();
    
    return (
        <View style={styles.container}>
        
          <Text style={styles.title}>
            登录
          </Text>
          <View style={styles.underline} />
          <View style={styles.inputBox} >

            <UIIconInput  icon='mobile1' placeholder='请输入邮箱或手机号' 
              onChangeText={(text) => this.setState({username:text})}
            />
            <UIIconInput icon='lock' placeholder='请输入登录密码' secureTextEntry={true}
            onChangeText={(text) => this.setState({password:text})}/>
          </View>

          <UIButton disabled={!validateOk} style={styles.button} text='登录' onPress={this.handleLogin} />

          <View style={styles.row} >
            <Text style={styles.clickText} onPress={() => this.props.navigation.navigate('Regist')}>注册账号</Text>
            <Text style={styles.clickText} onPress={() => {Mydialog.show()}}>忘记密码</Text>
          </View>
        </View>

      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding:30,
  },
  title: {
    fontSize:25,
    fontWeight:'400',
    fontFamily:'PingFangSC-Regular',
    color:'rgba(0,0,0,1)'
  },
  row:{
    margin:10,
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
    marginTop:60,
  },
  button:{
    marginTop:35
  },
  clickText:{
    color:'rgba(114,109,254,1)',
    fontSize:18,
    fontFamily:'PingFangSC-Regular',
  }
});
