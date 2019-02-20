import React from "react";
import {StyleSheet,Text,View,ImageBackground,TouchableWithoutFeedback} from "react-native";

export default class UIAcctItem extends React.Component {
  render() {
    var randomNum = Just.randomNum(0,1);
    //('randomNum',randomNum);
   
    return (
      <ImageBackground style={styles.container} source={randomNum == 0 ? Img.BankCardBg1 : Img.BankCardBg2} >
        <View style={{flex:3}}>
          <Text style={[styles.cardtext,{fontSize:20,marginLeft:40}]}> {this.props.bankName} </Text>
          <Text style={[styles.cardtext,{fontSize:14,marginLeft:45,marginTop:5}]}> {this.props.acctType} </Text>
          <Text style={[styles.cardtext,{fontSize:18,marginTop:15,marginLeft:20}]}> 
            {this.props.acctNo.replacePos(5,15,' *** **** ****')}
          </Text>
        </View>
        <View style={{flex:1}}>
          {/* <TouchableWithoutFeedback onPress={()=> {this.props.onToggleStatePress(this.props.acctNo,this.props.acctStatus)}}>
            <View style={styles.button}>
              <Text style={[styles.buttontext,randomNum == 0 ? {color:'#639AFE'} : {color:'#FD896E'}]}>
                {this.props.acctStatus == '2' ? '启用' : '停用'}
              </Text>
            </View>
          </TouchableWithoutFeedback> */}
          <TouchableWithoutFeedback onPress={()=> {this.props.onDeletePress(this.props.cardCode)} }>
            <View style={styles.button}>
              <Text style={[styles.buttontext,randomNum == 0 ? {color:'#639AFE'} : {color:'#FD896E'}]}>删除</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height:130,
    flexDirection:'row',
    marginTop:10,
    padding:15,
  },
  cardtext:{
    fontSize:18,
    fontFamily:'PingFangSC-Regular',
    color:'rgba(255,255,255,1)'
  },
 
  button:{
    width:60,
    height:24,
    marginTop:13,
    marginBottom:13,
    backgroundColor:'rgba(255,255,255,1)',
    borderRadius:2,
    borderColor:'rgba(90,96,255,1)',
    alignItems:'center',
    justifyContent:'center'
  },
  buttontext:{
    fontSize:13,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
  }
});
