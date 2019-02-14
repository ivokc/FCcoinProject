import {Dimensions} from 'react-native';
global.Constant = {
  isDebug: true,
  // baseURL: 'http://www.w3school.com.cn/jquery',
  baseURL: 'http://94.191.24.59:8980',
  timeout: 5000,
  dateformat: 'YYYY-MM-DD HH:mm:ss',
  encryptKey:'fpay,fp,com',
  deviceWidth:Dimensions.get('window').width,
  deviceHeight:Dimensions.get('window').height,

  showLoading:false,//加载框可见

  qqNum:'00001'


}
/*
  小技巧
  发布时屏蔽掉所有的console.*调用。
  React Native 中有一个全局变量__DEV__用于指示当前运行环境是否是开发环境。
  我们可以据此在正式环境中替换掉系统原先的 console 实现。
*/

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  };
}
