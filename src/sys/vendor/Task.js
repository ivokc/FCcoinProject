import {loginIntf,logoutIntf,userRegisterIntf,sendSmsIntf} from './Intf';
import {loginAction} from './dataflow/Action';

async function loginTask(params,dispatch) {
  try{
    //('loginTaskparams',params);
    let password = Just.encode(params.password,Constant.encryptKey);
    let username = Just.encode(params.username,Constant.encryptKey);
  
    let userInfo = await loginIntf({username,password});
    //('loginTaskuserInfomessage',userInfo.message);
    
    if (userInfo.result === 'false') {
      throw new Error(userInfo.message);
    }
    //('loginTaskuserInfo',userInfo);
    Just.storeData('userInfo',userInfo);
    dispatch(loginAction(userInfo));
    
  }catch(error){
    //('loginTaskuserError',error);
    return Promise.reject(error);
  }
}

async function logoutTask(params){
  try {
    let result = await logoutIntf(params);
    //('logoutTaskresult',result);
    if (result.result !== 'true') {
      throw new Error(result.message);
    }
    Just.clearAuthData();
  } catch (error) {
    //('logoutTaskError',error);
    return Promise.reject(error);
  }
}
async function sendSmsTask(params){
  try {
    let result = await sendSmsIntf(params);
    //('logoutTaskresult',result);
    if (result.result !== 'true') {
      throw new Error(result.message);
    }
  } catch (error) {
    //('logoutTaskError',error);
    return Promise.reject(error);
  }
}
async function getCaptialAccountTask(params){
  try {
    let result = await sendSmsIntf(params);
    //('getCaptialAccountTask',result);
    if (result.result !== 'true') {
      throw new Error(result.message);
    }
  } catch (error) {
    //('logoutTaskError',error);
    return Promise.reject(error);
  }
}





export {
  loginTask,
  logoutTask,
  sendSmsTask,
  getCaptialAccountTask
};
