
export function getRechargeOrderTask(sid) {
      // //('getRechargeOrderIntf~~33333333333333333333333');
  const params = {
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest(Url.getRechargeOrder,params);
}


export function rechargeTask(sid,orderCode) {
      //('rechargeTask~~33333333333333333333333',orderCode);
  const params = {
     orderCode:orderCode,
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest('/js/a/api/recharge',params);
}
