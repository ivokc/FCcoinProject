import { Platform,Linking} from "react-native";
import { ScanModule } from '../js-bridge/NativeModules';

const NativeUtility = {

  //跳转其他应用
  linking() {
   
    let url = Platform.OS === 'android' ? 'mqqwpa://im/chat?chat_type=wpa&uin=' + Constant.qqNum :
    `mqq://im/chat?chat_type=wpa&uin=${Constant.qqNum}&version=1&src_type=web`;
    
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
          Linking.openURL(url);
      }else{
        Mymessage.showMsg('请先安装QQ,再重试');
      }
    });
  },

  
  scanQRcode() {
    return ScanModule.scan();
  }
}

export default NativeUtility; 