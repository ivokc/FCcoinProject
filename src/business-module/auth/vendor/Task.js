import {loginIntf} from './Intf';
import {loginAction} from './dataflow/Action';

async function loginTask(params,dispatch) {
  try {
    let userInfo = await loginIntf(params);
    dispatch(loginAction({
      ...params,
      ...userInfo
    }));

  }catch(error){}
  
}



export {
  loginTask,
};
