/*
* 登录接口
*/
function loginIntf({username,password}) {
  const params = {
    username:'9E19A22A2A5887F3E03B80D54359442F',
    newpassword:'70388E628F9968515833B07899D03BB7',
    __ajax:'json',
    __sid:'2153428619324c0f91b4d7edd702179b'

  };
  return Just.postRequest(Url.changePWD,params);
}

export {
  loginIntf,
}
