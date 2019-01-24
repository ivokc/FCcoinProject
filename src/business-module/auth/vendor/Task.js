import {loginIntf} from './Intf';
import {loginAction} from './dataflow/Action';

async function loginTask(params,dispatch) {
  console.log('2342342params',params);

  try {
    let password = Just.encode(params.password,Constant.encryptKey);
    let username = Just.encode(params.username,Constant.encryptKey);
    console.log('2342342password',password);
    console.log('2342342username',username);

    let userInfo = await loginIntf({username,password});
    dispatch(loginAction({
      ...params,
      ...userInfo
    }));

  }catch(error){
    console.log('2342342',error);
    
  }
  
}



export {
  loginTask,
};
