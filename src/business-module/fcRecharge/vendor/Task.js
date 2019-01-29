
export function getBankDatasTask(sid) {
      // console.log('getRechargeOrderIntf~~33333333333333333333333');
  const params = {
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest('/js/a/api/getBankDatas',params);
}


export function creatRechargeOrderTask(sid,orderNum,cardCode) {
      // console.log('getRechargeOrderIntf~~33333333333333333333333');
  const params = {
     orderNum:orderNum,
     cardCode:cardCode,
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest('/js/a/api/creatRechargeOrder',params);
}


export function creatPaymentOrderTask(sid,orderNum,merchantOrderCode) {
      // console.log('getRechargeOrderIntf~~33333333333333333333333');
  const params = {
     orderNum:orderNum,
     merchantOrderCode:merchantOrderCode,
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest('/js/a/api/creatPaymentOrder',params);
}


export function rechargeTask(sid,orderCode) {
      console.log('rechargeTask~~33333333333333333333333',orderCode);
  const params = {
     orderCode:orderCode,
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest('/js/a/api/recharge',params);
}


export function paymentTask(sid,orderCode) {
      console.log('paymentTask~~33333333333333333333333',orderCode);
  const params = {
     orderCode:orderCode,
    __ajax:'json',
    __sid:sid//sid
  };
  return Just.getRequest('/js/a/api/payment',params);
}
