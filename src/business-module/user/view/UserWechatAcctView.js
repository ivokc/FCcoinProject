import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton,UICheckBox} from '../../../main/component/UIComponents'

@CommonHead('微信账号')
@AutoHideKeyboard
export default class UserWechatAcctView extends React.Component {
  
  state ={
    disabled:true
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>微信账号</Text>
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
