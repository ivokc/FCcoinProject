import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton} from '../../main/component/UIComponents'


@AutoHideKeyboard
export default class RegistMsgView extends React.Component {


  state = {
    smsCode:''
  }



  handleUserRegister = () => {
    this.props.handleUserRegister(this.state);
  }

  validateForm = () => {
    if (Object.keys(this.state).some((key) => this.state[key] === '')){
      return false;
    }else{
      return true;
    }
  }
  render() {
    let params = this.props.navigation.state.params;
    console.log('RegistMsgView',params);
    let validateOk = this.validateForm();
    
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            注册账号
          </Text>
          <View style={styles.underline} />
          <View style={{marginTop:60}} >
            <UIIconInput action='sms' icon='mail' placeholder='请输入短信校验码'
              onChangeText={(text) => this.setState({smsCode:text})}
            />
          </View>

          <UIButton disabled={!validateOk} style={styles.button} text='确定' onPress={this.handleUserRegister} />
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
