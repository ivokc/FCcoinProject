import React from "react";
import {Image,Text} from "react-native";
import { createStackNavigator, createAppContainer,createSwitchNavigator,createBottomTabNavigator } from "react-navigation";
import HomeContainer from "../business-module/home/container/HomeContainer";
import LoginContainer from "../business-module/auth/container/LoginContainer";
import RegistContainer from "../business-module/auth/container/RegistContainer";
import RegistMsgContainer from "../business-module/auth/container/RegistMsgContainer";
import AuthLoading from "../business-module/auth/AuthLoading";
import UserContainer from "../business-module/user/container/UserContainer";

import PayListContainer from "../business-module/fcPayment/container/PayListContainer";
import PayDetailContainer from "../business-module/fcPayment/container/PayDetailContainer";
import PayContainer from "../business-module/fcPayment/container/PayContainer";
import PayOrderDetailContainer from "../business-module/fcRecharge/container/PayOrderDetailContainer";
import PayWayContainer from "../business-module/fcRecharge/container/PayWayContainer";
import PayResultContainer from "../business-module/fcRecharge/container/PayResultContainer";
import OrderListContainer from "../business-module/fcOrder/container/OrderListContainer";

import UserChangePwdContainer from '../business-module/user/container/UserChangePwdContainer';
import UserAcctContainer from '../business-module/user/container/UserAcctContainer';




const HomeStack = createBottomTabNavigator({
    Home: HomeContainer,
    HomePayDetail: PayListContainer,
    User: UserContainer,
  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let imageSrc;
        if (routeName === 'Home') {
          imageSrc = focused ? Img.HomeActive : Img.HomeInactive;
        } else if (routeName === 'RechargeDet') {
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
  PayResult:PayResultContainer,
  OrderList:OrderListContainer,
  UserChangePwd:UserChangePwdContainer,
  UserAcct:UserAcctContainer,
  
},{
  // headerMode:'float',
  // headerLayoutPreset:'center',
  // headerBackTitleVisible:true
});

const AuthStack = createStackNavigator(
  { Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: null,//单独配置HomeStack全部不要header
    }
  },
    Regist:RegistContainer,
    RegistMsg: RegistMsgContainer
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