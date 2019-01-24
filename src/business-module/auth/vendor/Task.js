import {loginIntf} from './Intf';
import {loginAction} from './dataflow/Action';

async function loginTask(params,dispatch) {
  console.log('loginTaskparams',params);

  try {
    let password = Just.encode(params.password,Constant.encryptKey);
    let username = Just.encode(params.username,Constant.encryptKey);

    let userInfo = await loginIntf({username,password});
    console.log('loginTaskuserInfo',userInfo);
    // Just.storeData('userInfo',userInfo);
    dispatch(loginAction(userinfo));
    

  }catch(error){
    console.log('loginTask',error);
  }
  
}



export {
  loginTask,
};
