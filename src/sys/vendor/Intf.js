/*
* 登录接口
*/
function loginIntf({username,password}) {
  const params = {
    username,
    password,
    __ajax:'json',
    __login:true

  };
  return Just.getRequest(Url.login,params);
}

/*
* 登出接口
*/
function logoutIntf({sessionId}) {
  const params = {
    __ajax:'json',
    __sid:sessionId

  };
  return Just.getRequest(Url.logout,params);
}
/*
* 用户注册
*/
function userRegisterIntf({mobile,email,password,userName,smsCode}) {
  const params = {
    mobile,
    email,
    password,
    userName,
    smsCode,
    __ajax:'json',
  };
  return Just.getRequest(Url.userRegister,params);
  
}
/*
* 发送短信
*/
function sendSmsIntf({mobile}) {
  const params = {
    mobile,
    __ajax:'json',

  };
  return Just.getRequest(Url.sendSms,params);

}

/*
* 忘记密码
*/
function forgetPWDIntf({mobile,password,smsCode}) {
  const params = {
    mobile,
    password,
    smsCode,
    __ajax:'json',
  };
  return Just.getRequest(Url.forgetPWD,params);

}


/*
* 获取首页信息
*/
function getCaptialAccountIntf({sessionId}) {
  const params = {
    __ajax:'json',
    __sid:sessionId
  };
  return Just.getRequest(Url.getCaptialAccount,params);
}


export {
  loginIntf,
  logoutIntf,
  userRegisterIntf,
  sendSmsIntf,
  getCaptialAccountIntf,
  forgetPWDIntf
}
