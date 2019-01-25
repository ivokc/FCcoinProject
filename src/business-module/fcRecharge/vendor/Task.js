
export function getRechargeOrderTask(sid) {
      // console.log('getRechargeOrderIntf~~33333333333333333333333');
  const params = {
    __ajax:'json',
    __sid:'6001edf6a9d94fcfb070f0bea8e1e37d'//sid
  };
  return Just.getRequest(Url.getRechargeOrder,params);
}
