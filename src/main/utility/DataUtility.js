import {logoutAction } from '../../sys/vendor/dataflow/Action'
 

const DataUtility = {

  //判断对象类型
  type(o){
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  },
  //清登录信息
  clearAuthData(){
    Just.removeData('userInfo');
    dispatch(logoutAction());
    navigation.navigate('Auth');
  },

  //生成从minNum到maxNum的随机数
  randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
    case 1: 
        return parseInt(Math.random()*minNum+1,10); 
    case 2: 
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
    default: 
        return 0; 
    }
  },
 
  
}

//替换字符串指定位的值
String.prototype.replacePos = function(startPos, endPos, replacetext){
  let str = this.substring(0, startPos-1) + replacetext + this.substring(endPos);
  return str;
}
export default DataUtility; 