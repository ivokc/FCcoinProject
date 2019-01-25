/*
* 修改密码接口
*/
function changePWDIntf({password,newpassword,sessionId}) {
  const params = {
    password,
    newpassword,
    __ajax:'json',
    __sid:sessionId

  };
  return Just.getRequest(Url.changePWD,params);
}

export {
  changePWDIntf,
}
