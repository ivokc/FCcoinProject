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
