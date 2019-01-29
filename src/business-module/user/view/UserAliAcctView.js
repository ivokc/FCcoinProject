import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UIIconInput,UIButton,UICheckBox} from '../../../main/component/UIComponents'

export default class UserAliAcctView extends React.Component {

  state ={
    disabled:true
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>支付宝账号</Text>


          <UIButton style={{margin:30}} outline onPress={()=>{}} text='+   添加银行卡'/>
        </View>
      
    );
  }
}
UserAliAcctView.navigationOptions ={
  title: '银行卡账号',
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(244,244,244,1)',
    padding:10
  },
 
  inputBox:{
    marginTop:30
  },
  button:{
    marginTop:35
  },
  
});
