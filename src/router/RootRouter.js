import React from "react";
import {Image,Text} from "react-native";
import { createStackNavigator, createAppContainer,createSwitchNavigator,createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons'

import HomeContainer from "../sys/container/HomeContainer";
import LoginContainer from "../sys/container/LoginContainer";
import RegistContainer from "../sys/container/RegistContainer";
import RegistMsgContainer from "../sys/container/RegistMsgContainer";
import ForgetPwdContainer from "../sys/container/ForgetPwdContainer";
import AuthLoading from "../sys/AuthLoading";
import HelpView from '../sys/view/HelpView';

import UserContainer from "../business-module/user/container/UserContainer";

import PayListContainer from "../business-module/fcPayment/container/PayListContainer";
import PayDetailContainer from "../business-module/fcPayment/container/PayDetailContainer";
import PayContainer from "../business-module/fcPayment/container/PayContainer";
import PayOrderDetailContainer from "../business-module/fcRecharge/container/PayOrderDetailContainer";
import PayWayContainer from "../business-module/fcRecharge/container/PayWayContainer";
import PayResultContainer from "../business-module/fcRecharge/container/PayResultContainer";
import OrderListContainer from "../business-module/fcOrder/container/OrderListContainer";
import PayQRCodeContainer from "../business-module/fcRecharge/container/PayQRCodeContainer";


import UserChangePwdContainer from '../business-module/user/container/UserChangePwdContainer';
import UserBankAcctContainer from '../business-module/user/container/UserBankAcctContainer';
import UserAddBankAcctContainer from '../business-module/user/container/UserAddBankAcctContainer';


// const UserAcctStack = createMaterialTopTabNavigator({
//   UserBankAcct:UserBankAcctContainer,
//   UserAliAcct:UserAliAcctContainer,
//   UserWechatAcct:UserWechatAcctContainer,
// },{
//   tabBarOptions: {
//     activeTintColor:'#7359FF',
//     inactiveTintColor:'#999999',
//     style:{
//       marginTop:3,
//       backgroundColor: 'white',
//       elevation:0
//     },
//     labelStyle: {
//       fontSize: 15,
//     },
//     indicatorStyle:{
//       backgroundColor: '#7359FF',
//       height:3
//     },
//   }
// });

const payListStack = createStackNavigator({
  HomePayList:PayListContainer,
},{
  navigationOptions: {
    title: '充值明细',//单独配置HomeStack全部不要header
  },
})


const HomeStack = createBottomTabNavigator({
    Home: HomeContainer,
    HomePayList:payListStack,
    User: UserContainer,
  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let imageSrc;
        if (routeName === 'Home') {
          imageSrc = focused ? Img.HomeActive : Img.HomeInactive;
        } else if (routeName === 'HomePayList') {
          imageSrc = focused ? Img.RechargeActive : Img.RechargeInactive;
        } else {
          imageSrc = focused ? Img.UserActive : Img.UserInactive;
        }
        return <Image source={imageSrc} style={{width:20,height:20}} />;
      },
      

    }),
    navigationOptions: {
      header: null,//单独配置HomeStack全部不要header
    },
    tabBarOptions: {
      labelStyle: {
        fontSize:12,
        fontFamily:'PingFangSC-Regular',
        fontWeight:'400',
      },
      activeTintColor: '#7359FF',
      inactiveTintColor: '#D3D3D3'
    },
});
const AppStack = createStackNavigator({
  Home: HomeStack,
  PayList:PayListContainer,
  PayDetail:PayDetailContainer,
  Pay:PayContainer,
  PayOrderDetail:PayOrderDetailContainer,
  PayWay:PayWayContainer,
  PayQRCode:PayQRCodeContainer,
  PayResult:PayResultContainer,
  OrderList:OrderListContainer,
  UserChangePwd:UserChangePwdContainer,
  UserBankAcct:UserBankAcctContainer,
  UserAddBankAcct:UserAddBankAcctContainer,
  Help:HelpView,
},{
  //全系统默认head
  // defaultNavigationOptions:{
  //   title:'支付账号',//覆盖UserAcctStack 的title
  //   headerStyle: {
  //     height:43,
  //     backgroundColor: '#FFFFFF',
  //     borderBottomWidth:1,
  //     borderBottomColor:'rgba(247,247,247,1)',
  //     elevation:0//安卓不设底部会有投影
  //   },
  //   headerTintColor: '#444444',
  //   headerTitleStyle: {
  //     fontSize:20,
  //     fontFamily:'PingFangSC-Regular',
  //     fontWeight:'400',
  //     marginLeft:-10
  //   },
  //   headerBackImage: <Icon name='ios-arrow-back' size={30} color="#444444" />,
  // }
});

const AuthStack = createStackNavigator(
  { 
    Login: {
      screen: LoginContainer,
      navigationOptions: {
        header: null,//单独配置HomeStack全部不要header
      }
    },
    Regist:RegistContainer,
    RegistMsg: RegistMsgContainer,
    ForgetPwd: ForgetPwdContainer
  },
  {

  }
  );
const RootRouter = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(RootRouter);