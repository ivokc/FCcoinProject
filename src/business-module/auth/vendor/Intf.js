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

export {
  loginIntf,
}
