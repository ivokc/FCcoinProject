import React from 'react';
import { Image,TouchableWithoutFeedback} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
export default (title,kefu) => (WrappedComponent) => {

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
      fontSize:17,
      fontFamily:'PingFangSC-Regular',
      fontWeight:'400',
      // marginLeft:-10
    },
    headerBackImage: <Icon name='ios-arrow-back' size={30} color="#444444" />,
    headerBackTitle:null,
    headerRight: kefu ? (
      <TouchableWithoutFeedback onPress={()=>Just.linking()}>
        <Image source={Img.kefu} style={{width: 30, height: 30,marginRight:10}}/>
      </TouchableWithoutFeedback>
    ) : null
  };
}
