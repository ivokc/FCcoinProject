import {loginIntf} from './Intf';
import {loginAction} from '../../dataflow/Action';

async function loginTask(params,dispatch) {
  try {
    let userInfo = await loginIntf(params);
    dispatch(loginAction({
      ...params,
      ...userInfo
    }));

  }catch(error){}
  
}

// async function menuTask(dispatch){
//   try{
//     let response = await menuInterface();
//     dispatch(getMenuAction(response))
//   }catch(error){}
// }

// async function dictTask(dispatch) {
//   try {
//     let dicts = await dictInterface();
//     dispatch(getDictAction(dicts));

//   }catch(error){}
// }


export {
  loginTask,
};
