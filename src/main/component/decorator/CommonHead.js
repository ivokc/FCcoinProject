import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
export default (title) => (WrappedComponent) => {
  WrappedComponent.navigationOptions = {

    title: title,
    headerStyle: {
      height:43,
      backgroundColor: '#FFFFFF',
      borderBottomWidth:1,
      borderBottomColor:'rgba(247,247,247,1)',
      elevation:0//安卓不设底部会有投影
    },
    headerTintColor: '#444444',
    headerTitleStyle: {
      fontSize:20,
      fontFamily:'PingFangSC-Regular',
      fontWeight:'400',
      marginLeft:-10
    },
    headerBackImage: <Icon name='ios-arrow-back' size={30} color="#444444" />,
   
    
  };
}
