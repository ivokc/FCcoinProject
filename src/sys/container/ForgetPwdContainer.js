import { connect } from 'react-redux';
import ForgetPwdView from '../view/ForgetPwdView';
import {sendSmsIntf,forgetPWDIntf} from '../vendor/Intf';


const handleForgetPwd = async ({params,dispatch,ownProps}) => {
  try {
    let result = await forgetPWDIntf({...params,password:Just.encode(params.newpassword,Constant.encryptKey)});
    ownProps.navigation.navigate('Login',params);
  } catch (error) {
    //('handleNextStep',error);
  }

}
const handleSms = async ({params,dispatch,ownProps}) => {
  try {
    await sendSmsIntf({...params});
    
  }catch(error){
    //('handleUserRegister|error',error);

  }
}

const mapStateToProps = (state) => {
  
  return {
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    handleForgetPwd: (params) => handleForgetPwd({params,dispatch,ownProps}),
    handleSms: (params) => handleSms({params,dispatch,ownProps})

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgetPwdView);
