import { View,StyleSheet,Text,Linking} from "react-native";

const NativeUtility = {

  //跳转其他应用
  linking(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
          Linking.openURL(url);
      }
  });
  }
  
}

export default NativeUtility; 