import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton,UICheckBox} from '../../../main/component/UIComponents'

@CommonHead('修改登录密码')
@AutoHideKeyboard
export default class UserAcctView extends React.Component {

  state ={
    disabled:true
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.inputBox} >
            <UIIconInput icon='lock' placeholder='请输入旧密码'/>
            <UIIconInput icon='lock' placeholder='请输入新登录密码'/>
            <UIIconInput icon='lock' placeholder='再次输入新密码'/>
          </View>

          <UIButton disabled={this.state.disabled} style={styles.button} text='确定' onPress={()=>{}} />

        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding:30
  },
 
  inputBox:{
    marginTop:30
  },
  button:{
    marginTop:35
  },
  
});
