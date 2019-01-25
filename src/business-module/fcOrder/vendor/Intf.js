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
* 登录接口
*/
function getRechargeOrderIntf() {
      console.log('getRechargeOrderIntf~~33333333333333333333333');
  const params = {
    __ajax:'json',
    __sid:'87c86e3c03044444adeea77494092ab1'
  };
  return Just.getRequest(Url.getRechargeOrder,params);
}

export {
  loginIntf,getRechargeOrderIntf
}
