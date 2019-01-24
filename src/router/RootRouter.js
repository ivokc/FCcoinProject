import React from "react";

import { createStackNavigator, createAppContainer,createSwitchNavigator,createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeContainer from "../business-module/home/container/HomeContainer";
import LoginContainer from "../business-module/auth/container/LoginContainer";
import RegistContainer from "../business-module/auth/container/RegistContainer";
import RegistMsgContainer from "../business-module/auth/container/RegistMsgContainer";
import AuthLoading from "../business-module/auth/AuthLoading";
import RechargeDetContainer from "../business-module/rechargeDet/container/RechargeDetContainer";


const AppStack = createBottomTabNavigator({
   Home: HomeContainer,
   RechargeDet: RechargeDetContainer,

  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });
const AuthStack = createStackNavigator(
  { Login: LoginContainer,
    Regist:RegistContainer,
    RegistMsg: RegistMsgContainer
  },
  {
    headerMode:'none'
  }
  );
const RootRouter = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(RootRouter);