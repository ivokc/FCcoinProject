import { createStackNavigator, createAppContainer,createSwitchNavigator } from "react-navigation";
import HomeView from "../business-module/home/view/HomeView";
import LoginContainer from "../business-module/auth/container/LoginContainer";
import AuthLoading from "../business-module/auth/AuthLoading";


const AppStack = createStackNavigator({ Home: HomeView });
const AuthStack = createStackNavigator({ Login: LoginContainer });
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