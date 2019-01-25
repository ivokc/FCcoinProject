import {loginIntf} from './Intf';
import {loginAction} from './dataflow/Action';

async function loginTask(params,dispatch) {
  try{
    console.log('loginTaskparams',params);
    let password = Just.encode(params.password,Constant.encryptKey);
    let username = Just.encode(params.username,Constant.encryptKey);
  
    let userInfo = await loginIntf({username,password});
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



export {
  loginTask,
};
