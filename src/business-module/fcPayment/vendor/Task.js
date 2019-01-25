
export function getRechargeOrderTask(sid) {
      // console.log('getRechargeOrderIntf~~33333333333333333333333');
  const params = {
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest(Url.getRechargeOrder,params);
}
