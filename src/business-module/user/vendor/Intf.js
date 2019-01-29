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
/*
* 查询银行卡接口
*/
function getBankDatasIntf({sessionId}) {
  const params = {
    __ajax:'json',
    __sid:sessionId

  };
  return Just.getRequest(Url.getBankDatas,params);
}
/*
* 查询银行下拉数据接口
*/
function getBankSelectDataListIntf({sessionId}) {
  const params = {
    __ajax:'json',
    __sid:sessionId
  };
  return Just.getRequest(Url.getBankSelectDataList,params);
}
/*
* 新增银行卡接口
*/
function addBankDatasIntf({cardNumber,bankName,cardBranchName,cardUserName,sessionId}) {
  const params = {
    cardNumber,
    bankName,
    cardBranchName,
    cardUserName,
    __ajax:'json',
    __sid:sessionId

  };
  return Just.getRequest(Url.addBankDatas,params);
}
/*
* 删除银行卡接口
*/
function deleteBankDatasIntf({cardCode,sessionId}) {
  const params = {
    cardCode,
    __ajax:'json',
    __sid:sessionId

  };
  return Just.getRequest(Url.deleteBankDatas,params);
}
/*
* 禁用银行卡接口
*/
function disableBankDataIntf({cardCode,sessionId}) {
  const params = {
    cardCode,
    __ajax:'json',
    __sid:sessionId

  };
  return Just.getRequest(Url.disableBankData,params);
}
/*
* 启用银行卡接口
*/
function enableBankDataIntf({cardCode,sessionId}) {
  const params = {
    cardCode,
    __ajax:'json',
    __sid:sessionId

  };
  return Just.getRequest(Url.enableBankData,params);
}



export {
  changePWDIntf,
  getBankDatasIntf,
  addBankDatasIntf,
  getBankSelectDataListIntf,
  deleteBankDatasIntf,
  disableBankDataIntf,
  enableBankDataIntf,
}
