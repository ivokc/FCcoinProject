import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton,UICheckBox} from '../../../main/component/UIComponents'

@CommonHead('修改登录密码',true)
@AutoHideKeyboard
export default class UserChangePwdView extends React.Component {

  state = {
    password:'',
    newpassword:'',
    newpasswordAgain:'',
  }

  validateForm = () => {
    let {password,newpassword,newpasswordAgain} = this.state;
    if (password === '' || newpassword === '' || newpasswordAgain === '') {
      return false;
    } else {
      if (newpassword === password || newpassword !== newpasswordAgain) {
        return false;
      } else {
        return true;
      }
    }
  }

  handleChangePWD = () => {
    this.props.handleChangePWD({...this.state});
  }


  render() {
    let validateOk = this.validateForm();
    return (
        <View style={styles.container}>
          <View style={styles.inputBox} >
            <UIIconInput icon='lock' placeholder='请输入旧密码' 
              onChangeText={(text) => this.setState({password:text})}/>
            <UIIconInput icon='lock' placeholder='请输入新登录密码'
              onChangeText={(text) => this.setState({newpassword:text})}/>
            <UIIconInput icon='lock' placeholder='再次输入新密码'
              onChangeText={(text) => this.setState({newpasswordAgain:text})}/>
          </View>

          <UIButton disabled={!validateOk} style={styles.button} text='确定' onPress={this.handleChangePWD} />

        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding:30
  },
 
  inputBox:{
    marginTop:20
  },
  button:{
    marginTop:35
  },
  
});
