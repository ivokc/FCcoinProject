import {changePWDIntf} from './Intf';

async function changePWDTask(params) {
  try{
    let password = Just.encode(params.password,Constant.encryptKey);
    let newpassword = Just.encode(params.newpassword,Constant.encryptKey);
  
    let result = await changePWDIntf({...params,password,newpassword});
    //('changePWDTask',result);
    if(result.result === 'false'){
      throw new Error(result)
    }
  }catch(error){
    //('changePWDTaskError',error);
    return Promise.reject(error);
  }
  

  
}


export {
  changePWDTask,
};
