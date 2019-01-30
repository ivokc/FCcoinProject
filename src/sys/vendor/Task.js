import {loginIntf,logoutIntf,userRegisterIntf,sendSmsIntf} from './Intf';
import {loginAction} from './dataflow/Action';

async function loginTask(params,dispatch) {
  try{
    console.log('loginTaskparams',params);
    let password = Just.encode(params.password,Constant.encryptKey);
    let username = Just.encode(params.username,Constant.encryptKey);
  
    let userInfo = await loginIntf({username,password});
    console.log('loginTaskuserInfomessage',userInfo.message);
    
    if (userInfo.result === 'false') {
      throw new Error(userInfo.message);
    }
    console.log('loginTaskuserInfo',userInfo);
    Just.storeData('userInfo',userInfo);
    dispatch(loginAction(userInfo));
    
  }catch(error){
    console.log('loginTaskuserError',error);
    return Promise.reject(error);
  }
}

async function logoutTask(params){
  try {
    let result = await logoutIntf(params);
    console.log('logoutTaskresult',result);
    if (result.result !== 'true') {
      throw new Error(result.message);
    }
    Just.clearAuthData();
  } catch (error) {
    console.log('logoutTaskError',error);
    return Promise.reject(error);
  }
}
async function sendSmsTask(params){
  try {
    let result = await sendSmsIntf(params);
    console.log('logoutTaskresult',result);
    if (result.result !== 'true') {
      throw new Error(result.message);
    }
  } catch (error) {
    console.log('logoutTaskError',error);
    return Promise.reject(error);
  }
}
async function getCaptialAccountTask(params){
  try {
    let result = await sendSmsIntf(params);
    console.log('getCaptialAccountTask',result);
    if (result.result !== 'true') {
      throw new Error(result.message);
    }
  } catch (error) {
    console.log('logoutTaskError',error);
    return Promise.reject(error);
  }
}





export {
  loginTask,
  logoutTask,
  sendSmsTask,
  getCaptialAccountTask
};
