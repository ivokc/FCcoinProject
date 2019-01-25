import {changePWDIntf} from './Intf';

async function changePWDTask(params) {
  try{
    let password = Just.encode(params.password,Constant.encryptKey);
    let newpassword = Just.encode(params.newpassword,Constant.encryptKey);
  
    let result = await changePWDIntf({...params,password,newpassword});
    console.log('changePWDTask',result);
    if(result.result === 'false'){
      
    }
  }catch(error){
    console.log('changePWDTaskError',error);
    return Promise.reject(error);
  }
  

  
}


export {
  changePWDTask,
};
