import React from "react";
import { View,StyleSheet,Image,ImageBackground,Text} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import {UIRow} from "../../../main/component/UIComponents"

export default class UserView extends React.Component {



  onMenuItemPress = () => {
  }
  render() {
    let mobile = this.props.userInfo ?  this.props.userInfo.mobile : '';
    let userName = this.props.userInfo ?  this.props.userInfo.userName : '';
    let email = this.props.userInfo ?  this.props.userInfo.email : '';

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.profile} source={Img.AssertsBg}>
          <Image source={Img.Avator} style={{width:80,height:80}}/>
          <View style={styles.UserInfoBox}>
            <Text style={styles.UserNameText}>{userName}</Text>
            <Text style={styles.UserInfoText}>
              <Icon name='mail' size={17} color="#D5CCFF" />&nbsp;&nbsp;
                {email}
              </Text>
            <Text style={styles.UserInfoText}>
              <Icon name='mobile1' size={17} color="#D5CCFF" />&nbsp;&nbsp;
                {mobile}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <UIRow style={{marginTop:20}} onPress={()=>{this.props.navigation.navigate('UserBankAcct')}}>
            <Image style={styles.contentPic} source={Img.PayAccount} />
            <Text style={styles.contentTxt}>我的银行卡</Text>
          </UIRow>
          <UIRow  onPress={()=>{this.props.navigation.navigate('UserChangePwd')}}>
            <Image style={styles.contentPic} source={Img.Lock} />
            <Text style={styles.contentTxt}>修改登录密码</Text>
          </UIRow>
          <UIRow style={{marginTop:20}} onPress={this.props.handleLogout}>
            <Image style={styles.contentPic} source={Img.Quit} />
            <Text style={styles.contentTxt}>退出登录</Text>
          </UIRow>
        </View>
      </View>
    );
  }
}
UserView.navigationOptions ={
  title:'我的'
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  profile:{
    flex:1,
    padding:20,
    flexDirection:'row',
    alignItems:'center'
  },
  UserInfoBox:{
    paddingLeft:20,
    height:80
  },
  UserNameText:{
    fontSize:20,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'rgba(242,234,255,1)',
    lineHeight:27,

  },
  UserInfoText:{
    lineHeight:27,
    fontSize:15,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'rgba(213,204,255,1)',
  },
  content:{
    flex:3,
    backgroundColor: 'rgba(245,245,245,1)'
  },
  contentPic:{
    width:25,
    height:25,
    resizeMode:'contain',
    margin:20
  },
  contentTxt:{
    fontSize:16,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'rgba(51,51,51,1)',
    lineHeight:42
  },


});
