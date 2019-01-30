import { Platform,Linking} from "react-native";
import { ScanModule } from '../js-bridge/NativeModules';

const NativeUtility = {

  //跳转其他应用
  linking() {
    let url = 'mqqwpa://im/chat?chat_type=wpa&uin=' + Constant.qqNum;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
          Linking.openURL(url);
      }else{
        Mymessage.show('请先安装QQ,再重试');
      }
    });
  },

  
  scanQRcode() {
    return ScanModule.scan();
  }
}

export default NativeUtility; 